import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-soft">
        <Link href="/" className="text-sm font-medium text-violet-600">
          ← Kembali
        </Link>
        <h1 className="mt-6 text-4xl font-bold text-slate-900">Tentang Saya</h1>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          Saya adalah seorang pembelajar dan penulis yang suka membagikan pengalaman,
          pemikiran, dan proyek yang sedang saya kerjakan.
        </p>

        <p className="mt-4 text-lg leading-8 text-slate-700">
          Blog ini dibuat untuk mencatat cerita, teknologi, dan hal-hal kecil yang
          saya pelajari setiap hari.
        </p>
      </div>
    </main>
  );
}
