export default function Pricing(){
  const tiers = [
    { name: 'Starter', price: '$0', desc: 'For individuals getting started', features: ['10 meetings/month', 'AI summaries', 'PDF export'] },
    { name: 'Team', price: '$29', desc: 'Per user / month', features: ['Unlimited meetings', 'Compliance policies', 'Team collaboration', 'Slack/Email share'] },
    { name: 'Enterprise', price: 'Let’s talk', desc: 'Security & scale', features: ['SSO & SCIM', 'Custom retention', 'Legal hold', 'Dedicated support'] },
  ]
  return (
    <div className="container-px mx-auto max-w-6xl py-12">
      <h1 className="text-2xl font-semibold text-center">Simple, transparent pricing</h1>
      <p className="text-center text-slate-600">Start free. Upgrade when you’re ready.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {tiers.map(t => (
          <div key={t.name} className={`card p-6 ${t.name==='Team' ? 'border-indigo-300 ring-1 ring-indigo-200' : ''}`}>
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <div className="mt-2 text-3xl font-bold">{t.price}</div>
            <p className="mt-1 text-sm text-slate-600">{t.desc}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {t.features.map(f => <li key={f}>• {f}</li>)}
            </ul>
            <a href="/signup" className="btn btn-primary mt-6 w-full">Get started</a>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-slate-600">All plans include secure export, AI summaries, and compliance checks.</p>
    </div>
  )
}
