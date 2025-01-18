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
    name: 'forum',
  },
}

export function Nav() {
  return (
    <nav className="fixed left-0 top-0 h-full w-64 p-4 bg-white dark:bg-black border-r">
      <div className="flex flex-col space-y-2">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="text-lg hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors capitalize px-2 py-1"
            >
              {name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
