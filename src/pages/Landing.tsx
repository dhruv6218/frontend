import { ArrowRight, ShieldCheck, Mic, FileText, Users, Bot, Bell, ClipboardCheck, Share2 } from 'lucide-react'

// Landing page mirrors modern minimalist SaaS structure with hero, trust, features, testimonials
export default function Landing(){
  return (
    <div>
      {/* Hero */}
      <section className="container-px mx-auto flex max-w-6xl flex-col items-center gap-8 py-16 text-center md:py-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-xs text-slate-600">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600"/> GDPR & SOC2 Ready
        </div>
        <h1 className="max-w-4xl bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-4xl font-semibold text-transparent md:text-6xl">
          Meetings reimagined: Record, Transcribe, and Stay Compliant Effortlessly with Ravono Meetings
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">Ravono turns every Zoom, Google Meet, or Teams call into polished minutes and compliance records — complete with AI summaries, action items, and approvals.</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="/signup" className="btn btn-primary">Try Ravono Free <ArrowRight className="h-4 w-4"/></a>
          <a href="/help" className="btn btn-outline">Book Demo</a>
        </div>
        {/* Above-the-fold illustration */}
        <div className="mt-6 w-full rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-violet-50 p-4 shadow-soft">
          <div className="h-64 w-full rounded-xl bg-white shadow-soft" aria-hidden />
        </div>
        {/* Trust badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
          <span className="rounded-full bg-slate-100 px-3 py-1">Trusted by 1,200+ teams</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">ISO 27001</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">SOC2 Type II</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">GDPR</span>
        </div>
      </section>

      {/* Features grid */}
      <section className="container-px mx-auto max-w-6xl py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Mic, title: 'Meeting recording', desc: 'Record or import calls from Zoom, Meet, or Teams with one click.' },
            { icon: FileText, title: 'Automated transcripts', desc: 'Accurate, searchable transcripts with speaker labels and PII redaction.' },
            { icon: Bot, title: 'AI summaries', desc: 'Concise summaries with highlights, decisions, risks, and next steps.' },
            { icon: ClipboardCheck, title: 'Compliance', desc: 'GDPR/SOC2-friendly with retention policies and consent capture.' },
            { icon: Users, title: 'Team collaboration', desc: 'Assign action items, comment on timeline, and track approvals.' },
            { icon: Share2, title: 'Secure sharing', desc: 'Export PDF/Word, share by link, and send to Slack or Email securely.' },
            { icon: Bell, title: 'Notifications', desc: 'Smart reminders for pending signatures, overdue items, and reviews.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-brand"><Icon className="h-5 w-5"/></div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-px mx-auto max-w-6xl py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[{
            quote: 'Ravono cut our note-taking time by 90% and improved compliance reviews.', name: 'Elena Park', role: 'Head of Legal, Optima Health'
          },{
            quote: 'Action items are crystal clear and deadlines never slip now.', name: 'Marcus Chen', role: 'VP Sales, QuantaCloud'
          },{
            quote: 'Audit-ready documentation from every meeting — no extra work.', name: 'Sofia Martinez', role: 'CISO, Northwind Labs'
          }].map(t => (
            <figure key={t.name} className="card p-5">
              <blockquote className="text-slate-800">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-slate-600">— {t.name}, {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-6xl py-16 text-center">
        <div className="card mx-auto max-w-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-8 text-white">
          <h2 className="text-3xl font-semibold">Start capturing compliant meeting minutes today</h2>
          <p className="mt-2 text-indigo-100">Try Ravono free. No credit card required.</p>
          <div className="mt-4 flex justify-center gap-3">
            <a href="/signup" className="btn bg-white text-slate-900 hover:bg-slate-100">Try Ravono Free</a>
            <a href="/help" className="btn btn-outline border-white/40 text-white hover:bg-white/10">Book Demo</a>
          </div>
        </div>
      </section>
    </div>
  )
}
