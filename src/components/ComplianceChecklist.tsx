import { CheckCircle2, XCircle } from 'lucide-react'

export default function ComplianceChecklist(){
  // Simple checklist with pass/fail states
  const items = [
    { k: 'Consent recorded', ok: true },
    { k: 'PII masked in transcript', ok: true },
    { k: 'Data retention policy applied', ok: false },
    { k: 'Export encrypted', ok: true },
  ]
  return (
    <div className="card p-4">
      <div className="mb-2 text-sm font-medium">Compliance Checklist</div>
      <ul className="space-y-2 text-sm">
        {items.map(i => (
          <li key={i.k} className="flex items-center justify-between">
            <span>{i.k}</span>
            {i.ok ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-700"><CheckCircle2 className="h-4 w-4"/> Pass</span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-rose-100 px-2 py-0.5 text-rose-700"><XCircle className="h-4 w-4"/> Needs review</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
