export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 p-6 text-white">
      <section className="grid min-h-screen lg:grid-cols-[250px_1fr]">
        <aside className="hidden border-r border-zinc-800 p-6 lg:block">
          <div className="h-8 w-24 animate-pulse rounded bg-zinc-800" />
          <div className="mt-8 space-y-4">
            <div className="h-10 animate-pulse rounded-xl bg-zinc-800" />
            <div className="h-10 animate-pulse rounded-xl bg-zinc-800" />
            <div className="h-10 animate-pulse rounded-xl bg-zinc-800" />
          </div>
        </aside>

        <section className="space-y-5 p-6">
          <div className="h-40 animate-pulse rounded-3xl bg-zinc-800" />

          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <article
                key={i}
                className="h-40 animate-pulse rounded-3xl bg-zinc-800"
              />
            ))}
          </section>

          <article className="h-48 animate-pulse rounded-3xl bg-zinc-800" />
        </section>
      </section>
    </main>
  );
}