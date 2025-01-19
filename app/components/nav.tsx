import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/history': {
    name: 'History',
  },
  '/gallery': {
    name: 'Photo Gallery',
  },
  '/discography': {
    name: 'Discography',
  },
  '/merchandise': {
    name: 'DVD',
  },
  '/reunions': {
    name: 'Reunions',
  },
  '/thanks': {
    name: 'Special Thanks',
  },
  '/contact': {
    name: 'Contact',
  },
  'https://pub10.bravenet.com/forum/static/show.php?usernum=829203309&frmid=284&msgid=0': {
    name: 'Message Board',
  },
}

export function Nav() {
  return (
    <nav className="fixed md:fixed bottom-0 md:left-0 md:top-0 w-full md:w-64 p-4 bg-gray-100 dark:bg-gray-900 border-t md:border-r border-gray-200 dark:border-gray-800 md:h-full h-auto">
      <div className="flex md:flex-col flex-row flex-wrap justify-center md:justify-start gap-2 md:space-y-2">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="font-semibold text-sm md:text-lg text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors px-2 py-1"
            >
              {name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
