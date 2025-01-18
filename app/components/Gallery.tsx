'use client'

import { useState } from 'react'
import Image from 'next/image'

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  group: string
}

interface GalleryProps {
  images: GalleryImage[]
}

export function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Group images by their group property
  const groupedImages = images.reduce((groups, image) => {
    const group = image.group
    if (!groups[group]) {
      groups[group] = []
    }
    groups[group].push(image)
    return groups
  }, {} as Record<string, GalleryImage[]>)

  return (
    <div className="w-full space-y-8">
        <h3 className="text-2xl font-semibold mb-4">Click on picture for full view</h3>
      {Object.entries(groupedImages).map(([groupName, groupImages]) => (
        <div key={groupName}>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {groupImages.map((image, index) => (
              <div
                key={image.src}
                className="relative aspect-square cursor-pointer hover:opacity-80 transition-opacity h-[250px]"
                onClick={() => setSelectedImage(images.findIndex(img => img.src === image.src))}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal for enlarged image */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 