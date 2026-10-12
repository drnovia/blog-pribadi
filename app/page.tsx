```tsx
import Link from "next/link";
import { getSortedPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getSortedPosts();

  return (
    <main className="min-h-screen bg-[#080c16] text-[#f3f5fb]">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <header className="flex items-center justify-between border-b border-white/10 py-6">
          <Link href="/" className="text-sm font-semibold tracking-[0.18em]">
            NOVIA <span className="text-blue-400">STUDIO</span>
          </Link>

          <nav className="flex gap-6 text-sm text-white/65">
            <Link href="/" className="hover:text-blue-300">Home</Link>
            <Link href="/about" className="hover:text-blue-300">About</Link>
          </nav>
        </header>

        <section className="relative overflow-hidden border-b border-white/10 py-24 md:py-36">
          <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-blue-500/15 blur-[100px]" />

          <div className="relative">
            <p className="mb-8 text-xs uppercase tracking-[0.35em] text-blue-300">
              Personal Journal / Ideas / Becoming
            </p>

            <h1 className="max-w-5xl text-5xl font-medium leading-tight tracking-tight md:text-7xl lg:text-8xl">
              Novia, <span className="text-blue-300">in Bloom.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/60 md:text-xl">
              A life unfolding, beautifully.
              <br />
              Notes on life, ideas, growth, and everything in between.
            </p>

            <a
              href="#journal"
              className="mt-10 inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-sm hover:border-blue-300 hover:text-blue-300"
            >
              Explore the journal -&gt;
            </a>
          </div>

          <div className="mt-20 flex items-center justify-between border-t border-white/10 pt-5 text-xs uppercase tracking-[0.2em] text-white/35">
            <span>Personal archive</span>
            <span>Est. 2026</span>
          </div>
        </section>

        <section id="journal" className="py-20 md:py-28">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-blue-300">
                The journal
              </p>
              <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                Thoughts in progress.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/50">
              A collection of stories, reflections, and little discoveries
              along the way.
            </p>
          </div>

          {posts.length > 0 ? (
            <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
              {posts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={"/blog/" + post.slug}
                  className="group bg-[#0b1120] p-7 transition duration-300 hover:bg-[#111c31] md:p-10"
                >
                  <div className="mb-10 flex items-center justify-between text-xs text-white/40">
                    <span>
                      {String(index + 1).padStart(2, "0")} / JOURNAL
                    </span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-2xl font-medium leading-snug group-hover:text-blue-300 md:text-3xl">
                    {post.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white/55">
                    {post.excerpt}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-sm">
                    <span className="text-white/50">Read the story</span>
                    <span className="text-blue-300">-&gt;</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="border border-white/10 p-10 text-white/60">
              Tulisan pertama sedang dipersiapkan.
            </div>
          )}
        </section>

        <footer className="flex flex-col justify-between gap-4 border-t border-white/10 py-8 text-xs text-white/40 md:flex-row">
          <p>Copyright 2026 Novia, in Bloom.</p>
          <p>A life unfolding, beautifully.</p>
        </footer>
      </div>
    </main>
  );
}
```
