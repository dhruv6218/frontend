import { UserPlus } from 'lucide-react'

export default function Team(){
  const team = [
    { name: 'Alex Chen', role: 'Admin' },
    { name: 'Priya Patel', role: 'Legal' },
    { name: 'Ravi Kumar', role: 'Security' },
  ]
  return (
    <div className="container-px mx-auto max-w-5xl py-12">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Team</h1>
        <button className="btn btn-primary"><UserPlus className="h-4 w-4"/> Invite</button>
      </div>
      <div className="grid gap-3">
        {team.map(m => (
          <div key={m.name} className="card flex items-center justify-between p-4">
            <div>
              <div className="font-medium">{m.name}</div>
              <div className="text-xs text-slate-500">{m.role}</div>
            </div>
            <select className="input max-w-[180px]">
              <option>Admin</option>
              <option>Editor</option>
              <option>Viewer</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}
