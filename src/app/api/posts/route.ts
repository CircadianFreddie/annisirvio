import { NextResponse } from 'next/server'

// Shape of a Substack post item — only the fields we actually use.
// Substack's API returns more fields but we don't care about them.
type SubstackPost = {
  title: string
  slug: string
  post_date: string
  subtitle?: string | null
  cover_image?: string | null
}

export async function GET() {
  try {
    const res = await fetch(
      'https://annisirvio.substack.com/api/v1/posts?limit=50&offset=0',
      { next: { revalidate: 3600 } } // cache 1h
    )

    if (!res.ok) throw new Error('Substack API failed')

    const data: SubstackPost[] = await res.json()

    const posts = data.map((p) => ({
      title: p.title,
      slug: p.slug,
      link: `https://annisirvio.substack.com/p/${p.slug}`,
      pubDate: p.post_date,
      description: p.subtitle ?? '',
      thumbnail: p.cover_image ?? '',
    }))

    return NextResponse.json(posts)
  } catch {
    return NextResponse.json([], { status: 500 })
  }
}