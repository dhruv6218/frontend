export default function Settings(){
  return (
    <div className="container-px mx-auto max-w-3xl py-12">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <div className="mt-6 space-y-6">
        <div className="card p-4">
          <h3 className="text-lg font-semibold">Profile</h3>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <label className="text-sm">Full name<input className="input" defaultValue="Alex Chen"/></label>
            <label className="text-sm">Email<input className="input" defaultValue="alex@company.com"/></label>
          </div>
        </div>
        <div className="card p-4">
          <h3 className="text-lg font-semibold">Theme</h3>
          <div className="mt-3 flex items-center gap-2">
            <button className="btn btn-outline">Light</button>
            <button className="btn btn-outline">Dark</button>
            <input type="color" className="h-10 w-10 rounded" aria-label="Brand color" defaultValue="#4F46E5"/>
          </div>
        </div>
        <div className="card p-4">
          <h3 className="text-lg font-semibold">Privacy & Data</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <button className="btn btn-outline">Download data</button>
            <button className="btn btn-outline">Delete account</button>
            <button className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}
