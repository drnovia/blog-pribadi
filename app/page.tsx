import Link from "next/link";
import { getSortedPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getSortedPosts();

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600">
              Blog
            </p>
            <h1 className="mt-2 text-4xl font-bold text-slate-900">
              Novia
            </h1>
          </div>
          <nav className="flex gap-6 text-sm font-medium text-slate-700">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>

        <section className="mb-12 rounded-2xl bg-white p-8 shadow-soft">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-violet-600">
            Novia, in Bloom
          </p>
          <h2 className="max-w-2xl text-3xl font-bold text-slate-900">
            A life unfolding, beautifully.
          </h2>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1"
            >
              <p className="mb-3 text-sm text-slate-500">{post.date}</p>
              <h3 className="text-2xl font-bold text-slate-900">{post.title}</h3>
              <p className="mt-3 text-slate-600">{post.excerpt}</p>
              <div className="mt-5 text-sm font-semibold text-violet-600">
                Baca artikel →
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
