import Image from 'next/image'

const releases = [
  {
    year: 1978,
    images: [
      {
        src: '/images/gallery/45front.jpg',
        alt: 'Album front cover 1978',
        width: 300,
        height: 296
      },
      {
        src: '/images/gallery/45back.jpg',
        alt: 'Album back cover 1978',
        width: 300,
        height: 294
      }
    ]
  },
  {
    year: 1980,
    images: [
      {
        src: '/images/gallery/front-web.jpg',
        alt: 'Album front cover 1980',
        width: 300,
        height: 297
      },
      {
        src: '/images/gallery/back-album-web.jpg',
        alt: 'Album back cover 1980',
        width: 300,
        height: 293
      }
    ]
  },
  {
    year: 1984,
    images: [
      {
        src: '/images/gallery/picdiscfront.jpg',
        alt: 'Album front cover 1984',
        width: 300,
        height: 297
      },
      {
        src: '/images/gallery/picdiscback.jpg',
        alt: 'Album back cover 1984',
        width: 300,
        height: 303
      }
    ]
  },
  {
    year: 2004,
    images: [
      {
        src: '/images/gallery/dvd-cover-for-print.jpg',
        alt: 'DVD Cover 2004',
        width: 600,
        height: 395,
        fullWidth: true
      }
    ]
  },
  {
    year: 2005,
    images: [
      {
        src: '/images/gallery/alecstar-cover-111-copy.jpg',
        alt: 'Album front cover 2005',
        width: 300,
        height: 300
      },
      {
        src: '/images/gallery/inside-front-cover.jpg',
        alt: 'Album inside cover 2005',
        width: 296,
        height: 296
      },
      {
        src: '/images/gallery/back-cover.jpg',
        alt: 'Album back cover 2005',
        width: 403,
        height: 356,
        fullWidth: true
      }
    ]
  }
]

export default function DiscographyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-12 text-center">Discography</h1>
      
      <div className="space-y-16">
        {releases.map((release) => (
          <section key={release.year} className="space-y-6">
            <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400">
              {release.year}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {release.images.map((image, index) => (
                <div 
                  key={image.src}
                  className={`relative ${
                    image.fullWidth ? 'md:col-span-2' : ''
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="mx-auto"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
} 