export default function Reports(){
  return (
    <div className="container-px mx-auto max-w-5xl py-12">
      <h1 className="text-2xl font-semibold">Reports</h1>
      <p className="text-slate-600">Export audit-ready documentation across teams and time ranges.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="card p-4">
          <h3 className="text-lg font-semibold">Compliance Summary</h3>
          <p className="text-sm text-slate-600">Generate a summary of policies, statuses, and exceptions.</p>
          <button className="btn btn-primary mt-3">Generate</button>
        </div>
        <div className="card p-4">
          <h3 className="text-lg font-semibold">Meeting Minutes Pack</h3>
          <p className="text-sm text-slate-600">Bundle minutes, transcripts, and signatures for a date range.</p>
          <button className="btn btn-primary mt-3">Generate</button>
        </div>
      </div>
    </div>
  )
}
