"""Check the portfolio's local references, certificate copies and plotted dates."""
from pathlib import Path
from html.parser import HTMLParser
import hashlib
import json
import re

root = Path(__file__).resolve().parent.parent

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.refs, self.images = [], [], []
        self.h1 = 0
        self.dead_links = []
        self.month_lengths = []
        self.chart_flags = {}

    def handle_starttag(self, tag, pairs):
        attrs = dict(pairs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        if tag == 'h1':
            self.h1 += 1
        if tag in ['img', 'script', 'link', 'a']:
            self.refs.extend(attrs[key] for key in ['src', 'href'] if key in attrs)
        if tag == 'img':
            self.images.append(attrs)
        if tag == 'a' and attrs.get('href', '') in ['', '#']:
            self.dead_links.append(attrs)
        style = attrs.get('style', '')
        if attrs.get('class') == 'day-track' and style.startswith('--days:'):
            self.month_lengths.append(int(style.split(':')[1]))
        if tag == 'i' and style.startswith('grid-column:'):
            month = len(self.month_lengths)
            day = int(style.split(':')[1])
            self.chart_flags[f'2026-{month:02}-{day:02}'] = attrs['class']

page = Page()
html = (root / 'index.html').read_text(encoding='utf-8')
script = (root / 'script.js').read_text(encoding='utf-8')
css = (root / 'styles.css').read_text(encoding='utf-8')
page.feed(html)
study = (root / 'docs' / 'time-series-anomaly-detection-README.md').read_text(encoding='utf-8')
reported_dates = re.findall(r'^\| \d+ \| (2026-\d\d-\d\d) \| [^|]+ \| (Lower|Upper) \|$', study, re.MULTILINE)
expected_flags = {date: {'Lower': 'below', 'Upper': 'above'}[limit] for date, limit in reported_dates}
missing = []
for ref in page.refs:
    if ref.startswith(('https:', 'http:', 'data:', 'mailto:')):
        continue
    if ref.startswith('#'):
        if ref[1:] not in page.ids:
            missing.append(ref)
    elif not (root / ref).is_file():
        missing.append(ref)
for ref in re.findall(r'url\("([^"]+)"\)', css) + re.findall(r'"(assets/[^"\n]+)"', script):
    if not (root / ref).is_file():
        missing.append(ref)

def luminance(color):
    rgb = [int(color[i:i+2], 16) / 255 for i in [1, 3, 5]]
    linear = [x / 12.92 if x <= .04045 else ((x + .055) / 1.055) ** 2.4 for x in rgb]
    return sum(x * weight for x, weight in zip(linear, [.2126, .7152, .0722]))

pairs = [('#f2f3f0', '#101113'), ('#b0b4bd', '#191b1f'), ('#8bb4ff', '#101113'),
         ('#18232e', '#dce7f9'), ('#445363', '#dce7f9'), ('#174d96', '#dce7f9'),
         ('#596a7e', '#dce7f9'), ('#777f8e', '#191b1f')]
ratios = [{'foreground': a, 'background': b, 'ratio': round((max(luminance(a), luminance(b)) + .05) / (min(luminance(a), luminance(b)) + .05), 2)} for a, b in pairs]
integrity = []
for source, name in [('Data Analysis.pdf', 'data-analysis.pdf'), ('Data Science.pdf', 'data-science.pdf')]:
    original = root.parent / 'certificate' / source
    copied = root / 'assets' / 'certificates' / name
    if original.exists():
        integrity.append({'file': name, 'original_unchanged': hashlib.sha256(original.read_bytes()).digest() == hashlib.sha256(copied.read_bytes()).digest()})
    else:
        integrity.append({'file': name, 'present': copied.is_file(), 'original_comparison': 'not available outside original workspace'})

report = {
    'one_h1': page.h1 == 1,
    'duplicate_ids': len(page.ids) != len(set(page.ids)),
    'missing_local_assets_or_anchors': missing,
    'dead_links': page.dead_links,
    'images_have_dimensions_and_alt': all(all(key in image for key in ['width', 'height', 'alt']) for image in page.images),
    'contrast_pairs': ratios,
    'certificate_integrity': integrity,
    'calendar': {'observations': sum(page.month_lengths), 'flagged_dates': page.chart_flags,
                 'matches_study': page.chart_flags == expected_flags},
    'runtime_has_camera_or_password_feature': bool(re.search(r'getUserMedia|mediaDevices|type=[\"\x27]password', html + script)),
}
(root / 'docs' / 'static-checks.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
print(json.dumps(report, indent=2))
assert report['one_h1'] and not report['duplicate_ids'] and not missing and not page.dead_links
assert report['images_have_dimensions_and_alt']
assert all(item.get('original_unchanged', item.get('present', False)) for item in integrity)
assert not report['runtime_has_camera_or_password_feature']
assert page.month_lengths == [31, 28, 31, 30, 28]
assert len(expected_flags) == 9 and report['calendar']['matches_study']
assert all(item['ratio'] >= 4.5 for item in ratios[:6])
assert all(item['ratio'] >= 3 for item in ratios[6:])
