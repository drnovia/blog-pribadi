import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="mb-6 inline-block text-sm font-medium text-violet-600">
          ← Kembali
        </Link>

        <article className="rounded-2xl bg-white p-8 shadow-soft">
          <p className="text-sm text-slate-500">{post.date} • {post.author}</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">{post.title}</h1>

          <div className="prose mt-8">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </main>
  );
}
