export default function Help(){
  return (
    <div className="container-px mx-auto max-w-3xl py-12">
      <h1 className="text-2xl font-semibold">Help & Support</h1>
      <p className="text-slate-600">We’re here to help with onboarding, integrations, or compliance questions.</p>
      <div className="mt-6 space-y-4">
        <details className="card p-4" open>
          <summary className="cursor-pointer text-lg font-semibold">How do I connect Zoom/Meet/Teams?</summary>
          <p className="mt-2 text-sm text-slate-700">Go to Upload → Record live and click “Connect provider”. You can revoke access anytime.</p>
        </details>
        <details className="card p-4">
          <summary className="cursor-pointer text-lg font-semibold">How is data secured?</summary>
          <p className="mt-2 text-sm text-slate-700">We use encryption at rest and in transit, strict access controls, and regular audits. SOC2 Type II and ISO 27001 standards guide our practices.</p>
        </details>
        <details className="card p-4">
          <summary className="cursor-pointer text-lg font-semibold">Can I export minutes to Word?</summary>
          <p className="mt-2 text-sm text-slate-700">Yes. From the meeting page, choose Export → Word or PDF.</p>
        </details>
        <div className="card p-4">
          <h3 className="text-lg font-semibold">Contact support</h3>
          <p className="text-sm text-slate-700">Email support@ravono.com or use the in-app chat widget.</p>
        </div>
      </div>
    </div>
  )
}
