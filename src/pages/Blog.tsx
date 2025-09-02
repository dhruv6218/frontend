export default function Blog(){
  const posts = [
    { title: 'How to run audit‑ready meetings', date: 'Aug 12, 2025' },
    { title: 'GDPR vs SOC2 for transcripts', date: 'Jul 28, 2025' },
    { title: 'Action items that actually get done', date: 'Jul 10, 2025' },
  ]
  return (
    <div className="container-px mx-auto max-w-5xl py-12">
      <h1 className="text-2xl font-semibold">Blog</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {posts.map(p => (
          <a key={p.title} className="card block p-4 hover:shadow-hover" href="#">
            <div className="h-28 w-full rounded-lg bg-slate-100"/>
            <div className="mt-3 font-medium">{p.title}</div>
            <div className="text-sm text-slate-600">{p.date}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
