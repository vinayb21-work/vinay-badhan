#!/bin/bash

# Step 1: Convert HEIC files to JPG (if any exist)
find public/uploads/photos public/uploads/treks -type f -iname "*.HEIC" -exec sh -c '
  for f; do
    sips -s format jpeg "$f" --out "${f%.HEIC}.jpg"
    rm "$f"
  done
' _ {} +

# Step 2: Resize all images to max 1600px width
find public/uploads/photos public/uploads/treks -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -exec sips --resampleWidth 1600 {} \;

echo "Image cleanup complete!"
