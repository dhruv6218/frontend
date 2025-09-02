export default function Resources(){
  return (
    <div className="container-px mx-auto max-w-5xl py-12">
      <h1 className="text-2xl font-semibold">Resources</h1>
      <p className="text-slate-600">Guides, templates, and best practices for compliant meetings.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[1,2,3,4,5,6].map(i => (
          <a key={i} className="card block p-4 hover:shadow-hover" href="#">
            <div className="h-28 w-full rounded-lg bg-slate-100"/>
            <div className="mt-3 font-medium">Compliance checklist template</div>
            <div className="text-sm text-slate-600">Downloadable PDF and DOCX</div>
          </a>
        ))}
      </div>
    </div>
  )
}
