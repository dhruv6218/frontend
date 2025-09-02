import { Mic, FileText, Bot, ClipboardCheck, Users, Share2, Bell } from 'lucide-react'

export default function Features(){
  const features = [
    { icon: Mic, title: 'Meeting recording', desc: 'Record or connect Zoom, Meet, or Teams.' },
    { icon: FileText, title: 'Automated transcripts', desc: 'Speaker labels, timestamps, and PII redaction.' },
    { icon: Bot, title: 'AI summaries', desc: 'Highlights, decisions, risks, and next steps.' },
    { icon: ClipboardCheck, title: 'Compliance', desc: 'GDPR/SOC2-ready policies and audit trail.' },
    { icon: Users, title: 'Team collaboration', desc: 'Assign, comment, and track approvals.' },
    { icon: Share2, title: 'Export & share', desc: 'Export PDF/Word, share via Email or Slack.' },
    { icon: Bell, title: 'Notifications', desc: 'Smart reminders for signatures and reviews.' },
  ]
  return (
    <div className="container-px mx-auto max-w-6xl py-12">
      <h1 className="text-2xl font-semibold">Features</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {features.map(f => (
          <div key={f.title} className="card p-5">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-brand"><f.icon className="h-5 w-5"/></div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
