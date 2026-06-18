-- ─── Enable RLS ──────────────────────────────────────────────────────────────
alter table public.profiles      enable row level security;
alter table public.subscriptions enable row level security;

-- ─── Helper: is current user an admin? ───────────────────────────────────────
create or replace function public.is_admin()
returns boolean as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$ language sql security definer stable;

-- ─── profiles policies ───────────────────────────────────────────────────────

-- Users read only their own row; admins read all
create policy "profiles_select"
  on public.profiles for select
  using (auth.uid() = id or public.is_admin());

-- Users may update their own row but CANNOT elevate their own role or status
create policy "profiles_update_self"
  on public.profiles for update
  using (auth.uid() = id)
  with check (
    auth.uid() = id
    and role = (select role from public.profiles where id = auth.uid())
    and subscription_status = (select subscription_status from public.profiles where id = auth.uid())
  );

-- Admins may update any profile (including role overrides)
create policy "profiles_update_admin"
  on public.profiles for update
  using (public.is_admin());

-- Insert allowed only for the matching auth user (fired by trigger)
create policy "profiles_insert_self"
  on public.profiles for insert
  with check (auth.uid() = id);

-- ─── subscriptions policies ──────────────────────────────────────────────────

-- Users read only their own subscription; admins read all
create policy "subscriptions_select"
  on public.subscriptions for select
  using (auth.uid() = user_id or public.is_admin());

-- All writes (insert / update / delete) are performed exclusively via the
-- service_role key in webhook handlers. No authenticated-user write policies
-- are needed, and omitting them ensures no client can tamper with billing data.
