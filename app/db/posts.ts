import { readFileSync } from 'fs'
import path from 'path'

export async function getPost(slug: string[]) {
  const filePath = path.join(process.cwd(), 'app/blog/posts', `${slug.join('-')}.mdx`)
  const content = readFileSync(filePath, 'utf8')
  return { content }
} 