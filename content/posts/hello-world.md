@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #030d1a;
  --card: rgba(15, 23, 42, 0.8);
  --text: #f8fafc;
  --muted: #cbd5e1;
  --accent: #f5d76a;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(96, 165, 250, 0.14), transparent 28%),
    radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.12), transparent 32%),
    #030d1a;
  color: var(--text);
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.prose {
  max-width: 720px;
  color: #e2e8f0;
}

.prose h1,
.prose h2,
.prose h3,
.prose h4 {
  margin-top: 2rem;
  margin-bottom: 0.8rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #ffffff;
}

.prose p,
.prose li,
.prose blockquote {
  color: #dbe5f0;
  line-height: 1.8;
}

.prose a {
  color: #7dd3fc;
}

.prose strong {
  color: #ffffff;
}

.prose blockquote {
  border-left: 3px solid rgba(245, 215, 106, 0.8);
  padding-left: 1rem;
  color: #f1f5f9;
  font-style: italic;
}

.prose code {
  background: rgba(15, 23, 42, 0.8);
  color: #f8fafc;
  padding: 0.15rem 0.35rem;
  border-radius: 0.35rem;
}

.prose pre {
  background: #0f172a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #f8fafc;
  padding: 1rem;
  border-radius: 1rem;
  overflow-x: auto;
}

.prose hr {
  border-color: rgba(255, 255, 255, 0.08);
}

::selection {
  background: rgba(245, 215, 106, 0.35);
  color: white;
}

html,
body,
#root {
  min-height: 100%;
}

body {
  overflow-x: hidden;
}

#root {
  isolation: isolate;
}
