export default function FAQ(){
  const faqs = [
    { q: 'What makes Ravono different?', a: 'Ravono automates minutes and compliance in one flow — no juggling multiple tools.' },
    { q: 'Do you store my recordings?', a: 'Yes, with encryption and retention controls. You can auto-delete after a set period.' },
    { q: 'Can I bring my own transcript?', a: 'Absolutely. Upload a text transcript and we’ll generate summaries and action items.' },
    { q: 'Is there a free trial?', a: 'Yes, 14 days with unlimited meetings.' },
  ]
  return (
    <div className="container-px mx-auto max-w-4xl py-12">
      <h1 className="text-2xl font-semibold">Frequently asked questions</h1>
      <div className="mt-6 space-y-4">
        {faqs.map(f => (
          <details key={f.q} className="card p-4">
            <summary className="cursor-pointer text-lg font-semibold">{f.q}</summary>
            <p className="mt-2 text-sm text-slate-700">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
