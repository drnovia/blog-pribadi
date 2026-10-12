```tsx
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

                  <h3 className="text-2xl font-medium leading-snug transition group-hover:text-blue-300 md:text-3xl">
                    {post.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white/55">
                    {post.excerpt}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-sm">
                    <span className="text-white/50">Read the story</span>
                    <span className="text-blue-300 transition group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="border border-white/10 p-10 text-white/60">
              Tulisan pertama sedang dipersiapkan.
            </div>
          )}
```
