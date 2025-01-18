import { Gallery } from '../components/Gallery'
import fs from 'fs'
import path from 'path'
import galleryData from './gallery.json'

// Convert gallery.json data to the format needed by Gallery component
const galleryImages = galleryData.images.map(image => ({
  src: `/images/gallery/${image.filename}`,
  alt: image.description || image.filename.replace('.jpg', ''),
  width: image.width,
  height: image.height,
  group: image.group || 'Uncategorized'
}))

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Gallery</h1>
      <Gallery images={galleryImages} />
    </div>
  )
} 