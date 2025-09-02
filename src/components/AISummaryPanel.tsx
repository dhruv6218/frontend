export default function AISummaryPanel(){
  // AI summary block with highlights
  return (
    <div className="card p-4">
      <div className="mb-2 text-sm font-medium">AI Summary</div>
      <p className="text-sm text-slate-700">The team aligned on the Q4 compliance rollout with an emphasis on data retention updates and NDA process improvements. Sales requested a standardized approval workflow for enterprise deals. Two follow-ups were identified for Legal and Security.</p>
      <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-slate-700">
        <li>Decision: Adopt 90-day transcript retention with opt-in extension.</li>
        <li>Risk: Legacy NDA template lacks revised SOC2 language.</li>
        <li>Next Step: Security to share encryption key rotation policy.</li>
      </ul>
    </div>
  )
}
