export default function Compliance(){
  const rows = [
    { policy: 'Consent confirmation', status: 'Enabled', last: 'Aug 20' },
    { policy: 'PII redaction', status: 'Enabled', last: 'Aug 18' },
    { policy: 'Retention (90 days)', status: 'Enabled', last: 'Aug 01' },
    { policy: 'Export encryption', status: 'Pending', last: '—' },
  ]
  return (
    <div className="container-px mx-auto max-w-5xl py-12">
      <h1 className="text-2xl font-semibold">Compliance</h1>
      <p className="text-slate-600">Manage consent, redaction, retention, and export security.</p>
      <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr className="text-left text-sm text-slate-600">
              <th className="px-4 py-3">Policy</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Last updated</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map(r => (
              <tr key={r.policy} className="text-sm">
                <td className="px-4 py-3">{r.policy}</td>
                <td className="px-4 py-3"><span className={`tag ${r.status==='Pending' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>{r.status}</span></td>
                <td className="px-4 py-3 text-slate-500">{r.last}</td>
                <td className="px-4 py-3"><button className="btn btn-outline">Configure</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
