import os
import re
from collections import Counter

ROOT = os.path.dirname(os.path.dirname(__file__))
ASSETS_DIR = os.path.join(ROOT, "assets", "products")

HTML_FILES = [
    "index.html",
    "women.html",
    "men.html",
    "shoes.html",
    "bags.html",
    "accessories.html",
    "collections.html",
]

IMAGE_PATTERN = r'assets/products/([^"\')]+)'

all_assets = []

for root, dirs, files in os.walk(ASSETS_DIR):
    for file in files:
        if file.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
            all_assets.append(file)

asset_set = set(all_assets)

referenced = []
missing = []

for html in HTML_FILES:

    path = os.path.join(ROOT, html)

    if not os.path.exists(path):
        continue

    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    matches = re.findall(IMAGE_PATTERN, content)

    for match in matches:

        filename = os.path.basename(match)

        referenced.append(filename)

        if filename not in asset_set:
            missing.append((html, filename))

duplicates = [
    item for item, count in Counter(referenced).items()
    if count > 5
]

print("\n========== PRODUCT IMAGE AUDIT ==========\n")

print(f"Total assets found: {len(all_assets)}")
print(f"Total referenced images: {len(referenced)}")
print(f"Missing image references: {len(missing)}")
print(f"Overused images: {len(duplicates)}")

print("\n--- Missing References ---")

for html, file in missing:
    print(f"{html} -> {file}")

print("\n--- Overused Images ---")

for file in duplicates:
    print(file)

print("\nAudit complete.\n")