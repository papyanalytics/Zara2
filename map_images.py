from pathlib import Path
import re

root = Path(__file__).resolve().parent
asset_dir = root / 'assets' / 'products'
source_files = [root / 'index.html']

asset_files = sorted([p.name for p in asset_dir.glob('*') if p.is_file()])
asset_set = set(asset_files)

ref_pattern = re.compile(r'assets/products/[^"\'\s<>)]+')
reference_paths = set()

for source in source_files:
    text = source.read_text(encoding='utf-8', errors='ignore')
    reference_paths.update(ref_pattern.findall(text))

ref_names = set(Path(path).name for path in reference_paths)
missing = sorted(ref_names - asset_set)
unused = sorted(asset_set - ref_names)

source_names = ', '.join(str(p.name) for p in source_files)
print(f'Total image files in assets/products: {len(asset_files)}')
print(f'Total unique asset references in {source_names}: {len(ref_names)}')
print()

if missing:
    print('Missing referenced images:')
    for path in missing:
        print(' -', path)
    print()
else:
    print('All referenced assets are present.')
    print()

if unused:
    print('Unused image files in assets/products:')
    for path in unused:
        print(' -', path)
    print()
else:
    print('No unused asset files found.')
