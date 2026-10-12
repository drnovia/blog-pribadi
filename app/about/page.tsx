import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-soft">
        <Link href="/" className="text-sm font-medium text-violet-600">
          ← Kembali
        </Link>
        <h1 className="mt-6 text-4xl font-bold text-slate-900">About Novia</h1>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          A curious mind collecting stories, little wonders, and thoughts along the way.
        </p>

        <p className="mt-4 text-lg leading-8 text-slate-700">
          Just living, learning, and blooming. ☀️
        </p>
      </div>
    </main>
  );
}
