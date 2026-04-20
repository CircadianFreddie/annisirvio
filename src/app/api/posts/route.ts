import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch(
      'https://annisirvio.substack.com/api/v1/posts?limit=50&offset=0',
      { next: { revalidate: 3600 } } // cache 1h
    )

    if (!res.ok) throw new Error('Substack API failed')

    const data = await res.json()

    const posts = data.map((p: any) => ({
      title: p.title,
      slug: p.slug,
      link: `https://annisirvio.substack.com/p/${p.slug}`,
      pubDate: p.post_date,
      description: p.subtitle || '',
      thumbnail: p.cover_image || '',
    }))

    return NextResponse.json(posts)
  } catch {
    return NextResponse.json([], { status: 500 })
  }
}