-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ─── profiles ────────────────────────────────────────────────────────────────
-- One row per Supabase auth user. Role drives dashboard access.
create table public.profiles (
  id                  uuid references auth.users(id) on delete cascade primary key,
  full_name           text not null default '',
  email               text not null default '',
  role                text not null default 'inactive'
    check (role in ('student_full', 'homeschool_parent', 'admin', 'inactive')),
  subscription_status text not null default 'none'
    check (subscription_status in ('active', 'canceled', 'past_due', 'none')),
  moodle_user_id      integer,
  skool_member_id     text,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

-- ─── subscriptions ───────────────────────────────────────────────────────────
create table public.subscriptions (
  id                      uuid primary key default uuid_generate_v4(),
  user_id                 uuid references public.profiles(id) on delete cascade not null,
  stripe_customer_id      text not null,
  stripe_subscription_id  text unique not null,
  plan                    text not null check (plan in ('full_live', 'homeschool')),
  status                  text not null,
  current_period_start    timestamptz,
  current_period_end      timestamptz,
  canceled_at             timestamptz,
  created_at              timestamptz not null default now(),
  updated_at              timestamptz not null default now()
);

create index subscriptions_user_id_idx             on public.subscriptions(user_id);
create index subscriptions_stripe_customer_id_idx  on public.subscriptions(stripe_customer_id);
create index subscriptions_stripe_sub_id_idx       on public.subscriptions(stripe_subscription_id);

-- ─── auto-create profile on sign-up ──────────────────────────────────────────
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ─── updated_at triggers ─────────────────────────────────────────────────────
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.set_updated_at();

create trigger subscriptions_updated_at
  before update on public.subscriptions
  for each row execute procedure public.set_updated_at();
