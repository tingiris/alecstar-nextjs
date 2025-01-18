const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');

// Path to your gallery images
const galleryPath = path.join(process.cwd(), 'public', 'images', 'gallery');
const outputPath = path.join(process.cwd(), 'app', 'gallery', 'gallery.json');

// Get all jpg files
const imageFiles = fs.readdirSync(galleryPath)
  .filter(file => file.toLowerCase().endsWith('.jpg'));

// Create metadata for each image
const images = imageFiles.map(filename => {
  const dimensions = sizeOf(path.join(galleryPath, filename));
  return {
    filename,
    width: dimensions.width,
    height: dimensions.height,
    description: "",
    group: ""
  };
});

// Write to gallery.json
fs.writeFileSync(
  outputPath,
  JSON.stringify({ images }, null, 2)
);

console.log(`Created gallery.json with ${images.length} images`); 