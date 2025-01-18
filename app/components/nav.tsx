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
    <nav className="fixed left-0 top-0 h-full w-64 p-4 bg-gray-100 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div className="flex flex-col space-y-2">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="text-lg text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors px-2 py-1"
            >
              {name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
