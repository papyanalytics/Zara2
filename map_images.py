from pathlib import Path
import re
root = Path(r'c:\Users\Issa\OneDrive\Documents\Zahra Vs')
asset_dir = root / 'assets' / 'products'
files = [p.name for p in asset_dir.glob('*')]
print('Total images:', len(files))
content = (root / 'index.html').read_text(encoding='utf-8')
names = re.findall(r'name: \"([^\"]+)\"', content)
print('Found product names:', len(names))
for name in names:
    key = re.sub(r'[^A-Za-z0-9 ]+', '', name).lower().split()
    print('\nProduct:', name)
    matches = [f for f in files if all(k in f.lower() for k in key if len(k) > 3)]
    if matches:
        print('  matches:', matches[:10])
    else:
        loose = [f for f in files if any(k in f.lower() for k in key if len(k) > 4)]
        print('  loose matches:', loose[:10])
