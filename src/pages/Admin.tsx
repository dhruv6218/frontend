export default function Admin(){
  return (
    <div className="container-px mx-auto max-w-5xl py-12">
      <h1 className="text-2xl font-semibold">Admin</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="card p-4">
          <h3 className="text-lg font-semibold">Subscription</h3>
          <p className="text-sm text-slate-600">Team plan — renews Oct 2025</p>
          <div className="mt-3 flex gap-2">
            <button className="btn btn-outline">Manage billing</button>
            <button className="btn btn-primary">Upgrade</button>
          </div>
        </div>
        <div className="card p-4">
          <h3 className="text-lg font-semibold">Usage</h3>
          <p className="text-sm text-slate-600">This month: 18 meetings, 12 exports</p>
          <div className="mt-3 h-2 w-full rounded bg-slate-100">
            <div className="h-2 w-2/3 rounded bg-indigo-500"/>
          </div>
        </div>
      </div>
    </div>
  )
}
