# Builds both parent handouts from data/school-calendar-2026-27.json, the same
# file the website reads, so the printed and online calendars cannot drift.
#   1. Darul-Haya-Wall-Calendar-2026-27.pdf  - Monday to Sunday month grid
#   2. Darul-Haya-School-Calendar-2026-27.pdf - key dates list
import json
from datetime import date, timedelta
from reportlab.lib.pagesizes import LETTER, landscape
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfgen import canvas as pdfcanvas
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph,
                                Spacer, Table, TableStyle, KeepTogether)

DATA = json.load(open('/home/user/Darul-Haya/data/school-calendar-2026-27.json'))

CLAY, TEAL, TEALD = HexColor('#1E4A35'), HexColor('#21804E'), HexColor('#1A6B41')
CLOSED = HexColor('#35604A')
AMBER, AMBERL = HexColor('#D3A63A'), HexColor('#F0C250')
BEIGE, BEIGED = HexColor('#EEF8F0'), HexColor('#D8EDDF')
MUTED, RULE = HexColor('#4B6E5D'), HexColor('#BCD9C7')
HONEY, WHITE = HexColor('#FBF0D2'), HexColor('#FFFFFF')

MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December']
WEEKDAY = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


def d(iso):
    y, m, dd = (int(x) for x in iso.split('-'))
    return date(y, m, dd)


def hijri(iso):
    """Derived from the month-start table, exactly as lib/schoolCalendar.js does."""
    t = d(iso)
    found = None
    for s in DATA['hijriMonthStarts']:
        if d(s['gregorian']) <= t:
            found = s
        else:
            break
    return {'day': (t - d(found['gregorian'])).days + 1,
            'month': found['name'], 'year': found['year']}


def hlabel(iso):
    h = hijri(iso)
    return f"{h['day']} {h['month']} {h['year']}"


# ISO date -> event
DAYMAP = {}
for e in DATA['events']:
    cur, end = d(e['start']), d(e['end'])
    while cur <= end:
        DAYMAP[cur.isoformat()] = e
        cur += timedelta(1)

FILL = {'holiday': (CLAY, WHITE), 'closed': (CLOSED, WHITE), 'break': (BEIGED, CLAY),
        'eid': (AMBERL, CLAY), 'term': (TEAL, WHITE)}

FIRST, LAST = DATA['firstDay'], DATA['lastDay']


def school_months():
    a, b = d(FIRST), d(LAST)
    out, y, m = [], a.year, a.month
    while (y, m) <= (b.year, b.month):
        out.append((y, m))
        m += 1
        if m > 12:
            m, y = 1, y + 1
    return out


# ══ 1. WALL CALENDAR ════════════════════════════════════════════════
def wall_calendar(path):
    PW, PH = LETTER                       # portrait: 3 months across, 4 down
    M = 32
    c = pdfcanvas.Canvas(path, pagesize=(PW, PH))
    c.setTitle('Darul Haya 2026-27 Wall Calendar')
    c.setAuthor('Darul Haya')

    BAND = 58
    c.setFillColor(CLAY); c.rect(0, PH - BAND, PW, BAND, stroke=0, fill=1)
    c.setFillColor(AMBERL); c.rect(PW * 0.68, PH - BAND - 4, PW * 0.32, 4, stroke=0, fill=1)
    c.setFillColor(TEAL); c.rect(0, PH - BAND - 4, PW * 0.68, 4, stroke=0, fill=1)
    c.setFillColor(AMBERL); c.setFont('Times-Bold', 12)
    c.drawString(M, PH - 20, 'Darul Haya')
    c.setFillColor(WHITE); c.setFont('Times-Bold', 19)
    c.drawString(M, PH - 41, '2026-27 School Calendar')
    c.setFillColor(BEIGED); c.setFont('Helvetica', 7.4)
    c.drawString(M, PH - 52, 'Live online school, Grades 2 to 12  \u00b7  Sep 8, 2026 to Jun 29, 2027  \u00b7  1448-1449 AH')
    c.setFont('Helvetica', 7.4)
    c.drawRightString(PW - M, PH - 20, 'Gregorian date above, Hijri date below')
    c.drawRightString(PW - M, PH - 32, 'darulhaya.com/calendar')

    # legend
    ly = PH - BAND - 21
    lx = M
    c.setFont('Helvetica', 6.8)
    for fill, label in [(TEAL, 'First and last day'), (CLAY, 'Statutory holiday'),
                        (BEIGED, 'Break'), (AMBERL, 'Eid, subject to moon sighting'),
                        (WHITE, 'Class day')]:
        c.setFillColor(fill); c.setStrokeColor(RULE); c.setLineWidth(0.5)
        c.roundRect(lx, ly - 1.5, 8.5, 6.5, 2, stroke=1, fill=1)
        c.setFillColor(CLAY)
        c.drawString(lx + 11.5, ly, label)
        lx += 11.5 + c.stringWidth(label, 'Helvetica', 6.8) + 13

    COLS, ROWS, GAP = 3, 4, 10
    grid_top = ly - 13
    mw = (PW - 2 * M - GAP * (COLS - 1)) / COLS
    avail_h = grid_top - (M + 20)
    mh = (avail_h - GAP * (ROWS - 1)) / ROWS

    HEAD, WDH = 19, 9
    cw = mw / 7
    rh = (mh - HEAD - WDH) / 6          # fixed 6 week-rows so every month aligns

    months = school_months()
    for i, (yy, mm) in enumerate(months):
        col, row = i % COLS, i // COLS
        x = M + col * (mw + GAP)
        top = grid_top - row * (mh + GAP)

        first = date(yy, mm, 1)
        ndays = (date(yy + (mm == 12), mm % 12 + 1, 1) - first).days
        lead = first.weekday()            # Monday == 0

        c.setFillColor(BEIGED)
        c.rect(x, top - HEAD, mw, HEAD, stroke=0, fill=1)
        c.setFillColor(CLAY); c.setFont('Times-Bold', 10)
        c.drawString(x + 5, top - 9, f'{MONTHS[mm - 1]} {yy}')
        h1, h2 = hijri(first.isoformat()), hijri(date(yy, mm, ndays).isoformat())
        span = (f"{h1['month']} {h1['year']}" if h1['month'] == h2['month']
                else f"{h1['month']} to {h2['month']} {h2['year']}")
        c.setFillColor(MUTED); c.setFont('Helvetica', 5.6)
        c.drawString(x + 5, top - 16.2, span)

        c.setFillColor(MUTED); c.setFont('Helvetica-Bold', 6)
        for k, w in enumerate(WEEKDAY):
            c.drawCentredString(x + cw * (k + 0.5), top - HEAD - 6.8, w[0])

        for n in range(1, ndays + 1):
            cur = date(yy, mm, n)
            idx = lead + n - 1
            cx = x + (idx % 7) * cw
            cy = top - HEAD - WDH - (idx // 7 + 1) * rh
            iso = cur.isoformat()
            ev = DAYMAP.get(iso)
            outside = iso < FIRST or iso > LAST
            if ev and ev['kind'] in FILL:
                bg, fg = FILL[ev['kind']]
            elif outside:
                bg, fg = BEIGE, MUTED
            else:
                bg, fg = WHITE, CLAY
            c.setFillColor(bg); c.setStrokeColor(RULE); c.setLineWidth(0.35)
            c.roundRect(cx + 0.9, cy + 0.9, cw - 1.8, rh - 1.8, 2.5, stroke=1, fill=1)
            c.setFillColor(fg)
            c.setFont('Helvetica-Bold', 8.4)
            c.drawCentredString(cx + cw / 2, cy + rh - 10, str(n))
            c.setFont('Helvetica', 5.6)
            c.drawCentredString(cx + cw / 2, cy + 3.4, str(hijri(iso)['day']))

    # notes fill the two empty slots at the end of the grid
    spare = COLS * ROWS - len(months)
    if spare:
        col, row = len(months) % COLS, len(months) // COLS
        x = M + col * (mw + GAP)
        top = grid_top - row * (mh + GAP)
        w = mw * spare + GAP * (spare - 1)
        c.setFillColor(HONEY); c.setStrokeColor(AMBERL); c.setLineWidth(0.7)
        c.roundRect(x, top - mh, w, mh, 5, stroke=1, fill=1)
        c.setFillColor(AMBERL); c.rect(x, top - mh, 3.5, mh, stroke=0, fill=1)
        tx, ty = x + 12, top - 15
        c.setFillColor(CLAY); c.setFont('Helvetica-Bold', 8)
        c.drawString(tx, ty, 'Every Hijri month begins with the sighting of the moon.')
        c.setFont('Helvetica', 7.2)
        for line in [
            'Both Eid dates, the start of Ramadan and every Hijri date here are the',
            'ones we expect. Any of them can move by a day. We confirm each Eid',
            'closure by email and WhatsApp as soon as it is announced, and we never',
            'expect a child in class on Eid.',
            '',
            'Classes run on Eastern Time. Professional activity days are announced',
            'separately. Sep 30 and Nov 11 are not public holidays in Ontario, so',
            'classes run as normal. Anything that moves is emailed to parents and',
            'updated at darulhaya.com/calendar.',
        ]:
            ty -= 10.2
            c.drawString(tx, ty, line)

    c.setStrokeColor(RULE); c.setLineWidth(0.5)
    c.line(M, M + 8, PW - M, M + 8)
    c.setFillColor(MUTED); c.setFont('Helvetica', 6.8)
    c.drawString(M, M - 1, 'Darul Haya  \u00b7  info@darulhaya.com  \u00b7  437-423-4787')
    c.drawRightString(PW - M, M - 1, 'darulhaya.com/calendar')
    c.showPage()
    c.save()
    print('built', path)


# ══ 2. KEY DATES LIST ═══════════════════════════════════════════════
def key_dates(path):
    PW, PH = LETTER
    M = 0.62 * inch
    CW = PW - 2 * M
    body = ParagraphStyle('b', fontName='Helvetica', fontSize=7.9, leading=10.3, textColor=CLAY)
    small = ParagraphStyle('s', parent=body, fontSize=7.1, leading=9.4, textColor=MUTED)
    h2 = ParagraphStyle('h2', fontName='Times-Bold', fontSize=11.5, leading=13.5,
                        textColor=CLAY, spaceBefore=4, spaceAfter=3)
    F = []

    PILL = {'term': (TEAL, WHITE, 'TERM'), 'break': (BEIGED, TEALD, 'BREAK'),
            'holiday': (CLAY, WHITE, 'HOLIDAY'), 'closed': (CLOSED, WHITE, 'CLOSED'),
            'eid': (AMBERL, CLAY, 'EID')}

    def pill(kind):
        bg, fg, txt = PILL[kind]
        return Table([[Paragraph(f'<font color="{fg.hexval()}"><b>{txt}</b></font>',
                                 ParagraphStyle('p', fontName='Helvetica-Bold', fontSize=5.6,
                                                leading=7, alignment=1))]],
                     colWidths=[38], rowHeights=[10],
                     style=TableStyle([
                         ('BACKGROUND', (0, 0), (-1, -1), bg),
                         ('ROUNDEDCORNERS', [5, 5, 5, 5]),
                         ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
                         ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 0),
                         ('TOPPADDING', (0, 0), (-1, -1), 0), ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
                     ]))

    def glabel(e):
        def one(iso, yr=True):
            t = d(iso)
            return f'{WEEKDAY[t.weekday()][:3]}, {MONTHS[t.month - 1][:3]} {t.day}' + (f', {t.year}' if yr else '')
        if e['start'] == e['end']:
            return one(e['start'])
        join = 'or' if e['kind'] == 'eid' else 'to'
        same = e['start'][:4] == e['end'][:4]
        return f"{one(e['start'], not same)} {join} {one(e['end'])}"

    def hrange(e):
        if e['start'] == e['end']:
            return hlabel(e['start'])
        if e['kind'] == 'eid':
            return hlabel(e['end'])
        a, b = hijri(e['start']), hijri(e['end'])
        if a['month'] == b['month'] and a['year'] == b['year']:
            return f"{a['day']} to {b['day']} {a['month']} {a['year']}"
        return f"{hlabel(e['start'])} to {hlabel(e['end'])}"

    F.append(Paragraph('The school year, in order', h2))
    cols = [42, 150, 92, CW - 42 - 150 - 92]
    rows, styles = [], [
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 6), ('RIGHTPADDING', (0, 0), (-1, -1), 6),
        ('TOPPADDING', (0, 0), (-1, -1), 2.6), ('BOTTOMPADDING', (0, 0), (-1, -1), 2.6),
        ('LINEBELOW', (0, 0), (-1, -2), 0.5, RULE),
        ('BOX', (0, 0), (-1, -1), 0.7, RULE),
    ]
    for i, e in enumerate(DATA['events']):
        rows.append([
            pill(e['kind']),
            Paragraph(f"<b>{glabel(e)}</b><br/><font color=\"#4B6E5D\" size=\"7\">{hrange(e)}</font>", body),
            Paragraph(f"<b>{e['label']}</b>", body),
            Paragraph(f"<font color=\"#4B6E5D\">{e['note']}</font>", body),
        ])
        if e['kind'] == 'eid':
            styles.append(('BACKGROUND', (0, i), (-1, i), HONEY))
        elif i % 2:
            styles.append(('BACKGROUND', (0, i), (-1, i), BEIGE))
    F.append(Table(rows, colWidths=cols, style=TableStyle(styles)))

    F.append(Spacer(1, 6))
    F.append(Table([['', Paragraph(
        '<b>Every Hijri month begins with the sighting of the moon.</b> Both Eid dates, the start of '
        'Ramadan and every month start below are the dates we expect. Any of them can move by a day. '
        'We confirm each Eid closure with families by email and WhatsApp as soon as it is announced, '
        'and we never expect a child in class on Eid.', body)]],
        colWidths=[4, CW - 4],
        style=TableStyle([
            ('BACKGROUND', (0, 0), (0, 0), AMBERL), ('BACKGROUND', (1, 0), (1, 0), HONEY),
            ('LEFTPADDING', (0, 0), (0, 0), 0), ('RIGHTPADDING', (0, 0), (0, 0), 0),
            ('LEFTPADDING', (1, 0), (1, 0), 9), ('RIGHTPADDING', (1, 0), (1, 0), 9),
            ('TOPPADDING', (0, 0), (-1, -1), 5), ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
            ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ])))

    gap = 16
    # statutory table needs more room than the Hijri list, so split 44/56
    wl = (CW - gap) * 0.44
    wr = (CW - gap) * 0.56
    side = TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), BEIGED),
        ('BOX', (0, 0), (-1, -1), 0.7, RULE),
        ('LINEBELOW', (0, 0), (-1, -2), 0.5, RULE),
        ('LEFTPADDING', (0, 0), (-1, -1), 6), ('RIGHTPADDING', (0, 0), (-1, -1), 5),
        ('TOPPADDING', (0, 0), (-1, -1), 1.5), ('BOTTOMPADDING', (0, 0), (-1, -1), 1.5),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ])

    hm = [[Paragraph('<b>Hijri month</b>', body), Paragraph('<b>Expected to begin</b>', body)]]
    for m in DATA['hijriMonthStarts']:
        if FIRST <= m['gregorian'] <= LAST:
            t = d(m['gregorian'])
            when = f"{WEEKDAY[t.weekday()][:3]}, {MONTHS[t.month - 1][:3]} {t.day}, {t.year}"
            hm.append([Paragraph(f"{m['name']} {m['year']}", body),
                       Paragraph(f'<font color="#4B6E5D">{when}</font>', body)])
    hm_t = Table(hm, colWidths=[wl * 0.54, wl * 0.46], style=side)

    st = [[Paragraph('<b>Date</b>', body), Paragraph('<b>Hijri</b>', body),
           Paragraph('<b>For our students</b>', body)]]
    for h in DATA['statutoryHolidays']:
        t = d(h['date'])
        st.append([
            Paragraph(f"{WEEKDAY[t.weekday()][:3]}, {MONTHS[t.month - 1][:3]} {t.day}, {t.year}", body),
            Paragraph(f'<font color="#4B6E5D">{hlabel(h["date"])}</font>', body),
            Paragraph(f'<font color="#4B6E5D">{h["effect"]}</font>', body),
        ])
    st_t = Table(st, colWidths=[wr * 0.33, wr * 0.29, wr * 0.38], style=side)

    F.append(Spacer(1, 2))
    F.extend([
        Table([[Paragraph('Hijri months this year', h2),
                Paragraph('Ontario statutory holidays', h2)]],
              colWidths=[wl + gap / 2, wr + gap / 2],
              style=TableStyle([('LEFTPADDING', (0, 0), (-1, -1), 0),
                                ('RIGHTPADDING', (0, 0), (-1, -1), 0),
                                ('BOTTOMPADDING', (0, 0), (-1, -1), 0)])),
        Table([[hm_t, '', st_t]], colWidths=[wl, gap, wr],
              style=TableStyle([
                  ('VALIGN', (0, 0), (-1, -1), 'TOP'),
                  ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 0),
                  ('TOPPADDING', (0, 0), (-1, -1), 0), ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
              ])),
    ])
    F.append(Spacer(1, 3))
    F.append(Paragraph(
        'Classes run on Eastern Time. Professional activity days are announced to families '
        'separately. September 30 and November 11 are not public holidays in Ontario, so classes run '
        'as normal. Anything that moves is emailed to parents and updated at darulhaya.com/calendar.',
        small))

    def chrome(c, doc):
        c.saveState()
        c.setFillColor(CLAY); c.rect(0, PH - 66, PW, 66, stroke=0, fill=1)
        c.setFillColor(AMBERL); c.rect(PW * 0.66, PH - 70.5, PW * 0.34, 4.5, stroke=0, fill=1)
        c.setFillColor(TEAL); c.rect(0, PH - 70.5, PW * 0.66, 4.5, stroke=0, fill=1)
        c.setFillColor(AMBERL); c.setFont('Times-Bold', 13)
        c.drawString(M, PH - 23, 'Darul Haya')
        c.setFillColor(WHITE); c.setFont('Times-Bold', 19)
        c.drawString(M, PH - 45, '2026-27 School Calendar')
        c.setFillColor(BEIGED); c.setFont('Helvetica', 8.2)
        c.drawString(M, PH - 57, 'Live online school, Grades 2 to 12  ·  Aligned to the Ontario school year  ·  1448-1449 AH')
        c.setFont('Helvetica', 8)
        c.drawRightString(PW - M, PH - 23, 'Sep 8, 2026 to Jun 29, 2027')
        c.setStrokeColor(RULE); c.setLineWidth(0.6)
        c.line(M, 42, PW - M, 42)
        c.setFillColor(MUTED); c.setFont('Helvetica', 7.4)
        c.drawString(M, 32, 'Darul Haya  ·  info@darulhaya.com  ·  437-423-4787  ·  darulhaya.com/calendar')
        c.drawRightString(PW - M, 32, f'Page {c.getPageNumber()}')
        c.restoreState()

    doc = BaseDocTemplate(path, pagesize=LETTER, leftMargin=M, rightMargin=M,
                          topMargin=M, bottomMargin=M,
                          title='Darul Haya 2026-27 School Calendar', author='Darul Haya')
    doc.addPageTemplates([PageTemplate(
        id='p', frames=[Frame(M, 48, CW, PH - 78 - 48, id='f', leftPadding=0,
                              rightPadding=0, topPadding=0, bottomPadding=0)],
        onPage=chrome)])
    doc.build(F)
    print('built', path)


wall_calendar('Darul-Haya-Wall-Calendar-2026-27.pdf')
key_dates('Darul-Haya-School-Calendar-2026-27.pdf')
