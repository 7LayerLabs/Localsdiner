#!/usr/bin/env python3
import os
import subprocess
import sys

def main():
    # Get all image files
    files = sorted([f for f in os.listdir('.') if f.endswith(('.jpeg', '.jpg', '.JPG', '.JPEG')) and f != 'categorize.py'])

    print(f"Found {len(files)} images to categorize\n")
    print("Category Options:")
    print("  1 = breakfast")
    print("  2 = lunch_dinner")
    print("  3 = soup")
    print("  4 = sides")
    print("  5 = dessert")
    print("  6 = drinks")
    print("  7 = interior")
    print("  8 = exterior")
    print("  9 = branding")
    print("  10 = seasonal")
    print("\nOr type 's' to skip, 'q' to quit\n")

    # Category mapping
    category_map = {
        '1': 'breakfast',
        '2': 'lunch_dinner',
        '3': 'soup',
        '4': 'sides',
        '5': 'dessert',
        '6': 'drinks',
        '7': 'interior',
        '8': 'exterior',
        '9': 'branding',
        '10': 'seasonal'
    }

    categorizations = {}

    for i, filename in enumerate(files, 1):
        print(f"\n{'='*60}")
        print(f"Image {i}/{len(files)}: {filename}")
        print('='*60)

        # Open the image in Preview (macOS default viewer)
        subprocess.run(['open', filename])

        # Ask for category
        while True:
            choice = input(f"Enter number (1-10) or s/q: ").strip().lower()

            if choice == 'q':
                print("\nStopping categorization...")
                if input("Save progress so far? (y/n): ").lower() == 'y':
                    rename_files(categorizations)
                return

            if choice == 's':
                print("Skipping this image")
                break

            if choice in category_map:
                category = category_map[choice]
                categorizations[filename] = category
                print(f"✓ Categorized as: {category}")
                break
            else:
                print("Invalid choice. Enter 1-10, s, or q")

    # Rename all files
    print(f"\n\n{'='*60}")
    print("All images categorized! Renaming files...")
    print('='*60)
    rename_files(categorizations)

def rename_files(categorizations):
    # Count files per category
    category_counts = {}

    for filename in sorted(categorizations.keys()):
        category = categorizations[filename]

        if category not in category_counts:
            category_counts[category] = 0
        category_counts[category] += 1

        # Generate new filename
        new_filename = f"{category}_{category_counts[category]:02d}.jpeg"

        # Rename file
        if os.path.exists(filename):
            os.rename(filename, new_filename)
            print(f"Renamed: {filename} -> {new_filename}")

    print(f"\n✓ Renamed {len(categorizations)} files")
    print("\nSummary:")
    for category, count in sorted(category_counts.items()):
        print(f"  {category}: {count} files")

if __name__ == "__main__":
    main()
