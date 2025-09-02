import { PlayCircle, FileText, CheckCircle2, AlertCircle } from 'lucide-react'

export type Meeting = {
  id: string
  title: string
  date: string
  duration: string
  status: 'pending'|'completed'|'alert'
  tags?: string[]
}

export default function MeetingCard({ m }: { m: Meeting }){
  // Meeting list row/card with tags and status
  const status = {
    pending: { label: 'Pending', color: 'bg-amber-100 text-amber-800', Icon: AlertCircle },
    completed: { label: 'Completed', color: 'bg-emerald-100 text-emerald-800', Icon: CheckCircle2 },
    alert: { label: 'Compliance Alert', color: 'bg-rose-100 text-rose-800', Icon: AlertCircle },
  }[m.status]
  return (
    <a href={`/meetings/${m.id}`} className="card group flex items-center justify-between p-4 transition hover:shadow-hover">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-brand"><PlayCircle className="h-5 w-5"/></div>
        <div>
          <div className="font-medium text-slate-900">{m.title}</div>
          <div className="text-xs text-slate-500">{m.date} • {m.duration}</div>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className={`tag ${status.color}`}><status.Icon className="mr-1 h-3 w-3"/>{status.label}</span>
            {m.tags?.map(t => <span key={t} className="tag"><FileText className="h-3 w-3"/>{t}</span>)}
          </div>
        </div>
      </div>
      <div className="text-slate-400">Open →</div>
    </a>
  )
}
