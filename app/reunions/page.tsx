import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Reunions',
  description: 'Alecstar reunions and performances',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Reunions</h1>
      <BlogPosts />
    </section>
  )
}
