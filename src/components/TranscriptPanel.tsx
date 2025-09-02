export default function TranscriptPanel(){
  // Transcript panel with speaker labels
  const lines = [
    { s: 'Alex (Host)', t: 'Thanks everyone for joining. Today is about finalizing our compliance checklist.' },
    { s: 'Priya (Legal)', t: 'We need explicit consent prompts for all recordings going forward.' },
    { s: 'Ravi (Security)', t: 'PII redaction rules will cover emails and phone numbers automatically.' },
  ]
  return (
    <div className="card max-h-[420px] overflow-auto p-4">
      <div className="mb-2 text-sm font-medium">Transcript</div>
      <div className="space-y-3 text-sm">
        {lines.map((l, i) => (
          <div key={i}>
            <div className="text-xs font-semibold text-slate-500">{l.s}</div>
            <p className="text-slate-800">{l.t}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
