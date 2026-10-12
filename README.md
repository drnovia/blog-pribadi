# Blog Pribadi

Blog personal starter menggunakan Next.js, Tailwind CSS, dan Markdown.

## Setup

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Menambah Artikel

1. Buat file baru di folder `content/posts/` dengan format `.md`
2. Tambahkan frontmatter:

```markdown
---
title: "Judul Artikel"
excerpt: "Deskripsi singkat"
date: "YYYY-MM-DD"
author: "Nama Kamu"
---
```

3. Tulis konten artikel di bawah frontmatter

## Deploy ke Vercel

1. Push ke GitHub
2. Buka https://vercel.com
3. Import repository ini
4. Deploy selesai!
