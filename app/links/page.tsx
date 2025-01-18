import Image from 'next/image'

const links = [
  {
    url: 'http://www.tk99.net',
    image: '/images/gallery/tk99.jpg',
    imageWidth: 207,
    imageHeight: 74,
    description: 'Syracuse based classic rock'
  },
  {
    url: 'http://www.wour.com',
    image: '/images/gallery/wourlogoblack.jpg',
    imageWidth: 205,
    imageHeight: 116,
    description: 'Utica based classic rock'
  },
  {
    url: 'http://www.pyx106.com',
    image: '/images/gallery/pyx106.jpg',
    imageWidth: 150,
    imageHeight: 76,
    description: 'Albany based classic rock'
  },
  {
    url: 'http://www.powerplaymagazine.co.uk',
    image: '/images/gallery/powerplaylogo.jpg',
    imageWidth: 286,
    imageHeight: 90,
    description: 'England (United Kingdom) magazine that did a review of our DVD and CD'
  },
  {
    url: 'http://www.uvtv.info',
    image: '/images/gallery/uvtvbanner1.jpg',
    imageWidth: 468,
    imageHeight: 60,
    description: 'Central New York Video Wizards'
  },
  {
    url: 'http://www.arippleintime.com',
    image: '/images/gallery/finalrippleandpeacesign.jpg',
    imageWidth: 245,
    imageHeight: 116,
    description: "Alecstar manager Mitch Tingiris webpage. He wrote a book!"
  }
]

const textLinks = [
  {
    url: 'http://www.ktjmusic.com',
    text: 'KTJ Music',
    description: "George Mahoney's music store"
  },
  {
    url: 'http://www.myspace.com/smartalecband',
    text: 'Smart Alec',
    description: "Jack Murray's band"
  },
  {
    url: 'http://www.805online.com',
    text: '805',
    description: 'Longtime CNY progressive rock favorite'
  },
  {
    url: 'http://www.kanerocks.com',
    text: 'Kane',
    description: 'Classic rock monsters'
  },
  {
    url: 'http://www.markdoyle.com',
    text: 'Mark Doyle',
    description: 'Musician extraordinaire and member of Free Will & Jukin\' Bone'
  },
  {
    url: 'http://www.joewhitingmusic.com',
    text: 'Joe Whiting',
    description: 'The original voice of Syracuse and member of Free Will & Jukin\' Bone'
  },
  {
    url: 'http://www.newyorkflyers.com',
    text: 'New York Flyers',
    description: 'Fellow 80\'s CNY rockers'
  },
  {
    url: 'http://www.arcaneaudio.com/',
    text: 'Tuffy\'s Barn',
    description: 'Jim Barnes & Paul Baywall\'s Studio'
  },
  {
    url: 'http://www.fjamods.com',
    text: 'FJA Mods',
    description: 'Local guitar amplifier guru Jerry Pinneli\'s site. Custom & factory work'
  },
  {
    url: 'http://www.djritchie.com',
    text: 'D.J. Ritchie',
    description: 'D.J. for hire... weddings, parties, etc.'
  }
]

export default function LinksPage() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Links</h1>
      
      <p className="text-lg mb-8">
        If you would like your web site to appear on our links page, please Email us your site name and a brief description of your sites content.
      </p>

      {/* Links with images */}
      <div className="space-y-8 mb-12">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:opacity-80 transition-opacity"
          >
            <div className="relative">
              <Image
                src={link.image}
                width={link.imageWidth}
                height={link.imageHeight}
                alt=""
              />
            </div>
            <span className="text-lg">{link.description}</span>
          </a>
        ))}
      </div>

      {/* Text-only links */}
      <div className="space-y-4">
        {textLinks.map((link) => (
          <div key={link.url} className="flex gap-2">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
            >
              {link.text}
            </a>
            <span className="text-lg">- {link.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
} 