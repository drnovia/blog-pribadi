import Link from "next/link";
import { getSortedPosts } from "@/lib/posts";
import AboutMotion from "./AboutMotion";

export default function HomePage() {
  const posts = getSortedPosts();

  return (
    <AboutMotion>
    <main className="min-h-screen bg-[#030d1a] text-white">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        <header className="mb-8 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <Link href="/" className="text-lg font-semibold tracking-[0.18em] text-white/90 uppercase">
            Novia
          </Link>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <Link href="/about" className="transition hover:text-white">About</Link>
          </nav>
        </header>

        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_45%),linear-gradient(135deg,#071321,#0d1729_35%,#142537_100%)] p-6 shadow-[0_30px_80px_rgba(2,6,23,0.8)] md:p-10">
          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p data-anim="hero" className="mb-4 inline-flex items-center rounded-full border border-[#ffd966]/30 bg-[#ffd966]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f9d976]">
                Novia, in Bloom
              </p>
              <h1 data-anim="hero" className="max-w-xl text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
                A life unfolding,
                <span className="block bg-gradient-to-r from-white via-violet-200 to-sky-300 bg-clip-text text-transparent">
                  beautifully.
                </span>
              </h1>
              <p data-anim="hero" className="mt-5 max-w-lg text-base leading-7 text-slate-300 md:text-lg">
                A curious mind collecting stories, little wonders, and thoughts along the way.
              </p>

              <div data-anim="hero" className="mt-7 flex flex-wrap gap-3">
                {[
                  "stories",
                  "ideas",
                  "notes",
                  "growth",
                  "blooming",
                ].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-200"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div data-anim="hero" className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#posts"
                  className="rounded-full bg-[#f5d76a] px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_10px_30px_rgba(245,215,106,0.35)] transition hover:-translate-y-0.5"
                >
                  Read the latest
                </Link>
                <Link
                  href="/about"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30"
                >
                  About Novia
                </Link>
              </div>
            </div>

            <div data-anim="panel" className="rounded-[28px] border border-white/10 bg-[#0b1521]/80 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">novia.log</span>
              </div>

              <div className="mt-5 space-y-3 font-mono text-sm text-slate-200">
                <div data-anim="log" className="text-slate-400">[22:48:12] <span className="text-violet-300">Startup</span></div>
                <div data-anim="log"><span className="text-emerald-400">novia@bloom</span> <span className="text-sky-300">~/notes</span> <span className="text-slate-400">%</span> journal --daily</div>
                <div data-anim="log" className="text-slate-300">Collecting tiny joys, sharp lessons, and bright ideas.</div>
                <div data-anim="log" className="text-slate-400">[22:48:14] <span className="text-purple-300">Status:</span> feeling grateful, growing, blooming.</div>
                <div data-anim="log" className="text-violet-300">Ready to share what I learn.</div>
              </div>
            </div>
          </div>
        </section>

        <section id="posts" className="mt-14">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">Journal</p>
              <h2 className="mt-2 text-3xl font-bold text-white">Latest reflections</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                data-anim="card"
                className="group rounded-[28px] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/7"
              >
                <p className="text-sm text-slate-400">{post.date}</p>
                <h3 className="mt-3 text-2xl font-bold text-white transition group-hover:text-violet-200">{post.title}</h3>
                <p className="mt-4 text-slate-300">{post.excerpt}</p>
                <div className="mt-6 inline-flex items-center text-sm font-semibold text-[#f5d76a]">
                  Read article <span className="ml-2">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
    </AboutMotion>
  );
}
