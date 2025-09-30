// src/app/sitemap.ts
import type { MetadataRoute } from 'next'

/**
 * Always set NEXT_PUBLIC_SITE_URL in Lightsail (e.g., https://zionxai.com).
 * Relying on proxy headers is brittle; the env is the source of truth.
 */
const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '')

/** Replace with your real dynamic source when ready */
async function getDynamicPaths(): Promise<
  Array<{ path: string; lastModified?: string | Date }>
> {
  // Examples:
  // const res = await fetch(`${BASE_URL}/api/posts`, { cache: 'no-store' })
  // const posts = await res.json() as Array<{ slug: string, updatedAt?: string }>
  // return posts.map(p => ({ path: `/blog/${p.slug}`, lastModified: p.updatedAt }))
  return []
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!BASE_URL) {
    // Fails safe in non-prod so you notice missing env
    console.warn('NEXT_PUBLIC_SITE_URL is not set; using http://localhost:3000')
  }
  const abs = (p: string) =>
    (BASE_URL || 'http://localhost:3000') + (p.startsWith('/') ? p : `/${p}`)

  // List your current “known” routes here
  const staticRoutes = [
    '/',
    '/services',
    '/clients',
    '/contact',
  ].map((p) => ({
    url: abs(p),
    changeFrequency: 'monthly' as const,
    priority: p === '/' ? 1 : 0.7,
    lastModified: new Date(),
  }))

  const dynamic = (await getDynamicPaths()).map((r) => ({
    url: abs(r.path),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
    lastModified: r.lastModified ?? new Date(),
  }))

  return [...staticRoutes, ...dynamic]
}

// If you truly need live data each hit (rare), uncomment:
// export const dynamic = 'force-dynamic'
