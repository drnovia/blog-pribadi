import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030d1a] px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur md:p-12">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-sky-300">
          ← Back home
        </Link>

        <div className="mt-8 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="rounded-[28px] border border-[#f5d76a]/30 bg-gradient-to-br from-[#f5d76a]/15 to-violet-500/10 p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[#f5d76a]">Novia</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white">About me</h1>
            <p className="mt-4 text-slate-300">
              A curious mind collecting stories, little wonders, and thoughts along the way.
            </p>
          </div>

          <div className="space-y-5 text-slate-200">
            <p className="text-lg leading-8">
              Just living, learning, and blooming. ☀️
            </p>
            <p className="leading-8 text-slate-300">
              This blog is my quiet corner of the internet — a place to pause, reflect, and share the small moments that matter. I write about growth, creativity, lessons, and the beauty of becoming.
            </p>
            <p className="leading-8 text-slate-300">
              Every post is a little snapshot of where I am right now: curious, grateful, and still blooming.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
