import { CheckCircle2, Clock, XCircle } from 'lucide-react'

export default function ApprovalTracker(){
  // Visual stepper for approval workflow
  const steps = [
    { k: 'Generated', state: 'done' },
    { k: 'Reviewed by Legal', state: 'in-progress' },
    { k: 'Approved', state: 'todo' },
  ] as const
  return (
    <div className="card p-4">
      <div className="mb-2 text-sm font-medium">Approval Workflow</div>
      <div className="flex items-center gap-4">
        {steps.map((s, i) => (
          <div key={s.k} className="flex items-center gap-2">
            {s.state==='done' && <CheckCircle2 className="h-5 w-5 text-emerald-600"/>}
            {s.state==='in-progress' && <Clock className="h-5 w-5 text-amber-600"/>}
            {s.state==='todo' && <XCircle className="h-5 w-5 text-slate-300"/>}
            <span className="text-sm">{s.k}</span>
            {i<steps.length-1 && <div className="mx-1 h-px w-8 bg-slate-200"/>}
          </div>
        ))}
      </div>
    </div>
  )
}
