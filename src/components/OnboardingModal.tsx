import { useState } from 'react'

export default function OnboardingModal(){
  const [open, setOpen] = useState(true)
  if(!open) return null
  return (
    <div role="dialog" aria-modal className="fixed inset-0 z-50 grid place-items-center bg-slate-900/40 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-hover">
        <h2 className="text-2xl font-semibold">Welcome to Ravono Meetings</h2>
        <p className="mt-2 text-sm text-slate-600">A quick tour to help you set up compliance-friendly, automated meeting notes.</p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Connect your Zoom, Google Meet, or Teams.</li>
          <li>Choose your compliance mode (GDPR, SOC2, HIPAA).</li>
          <li>Invite your team and set approval flows.</li>
        </ol>
        <div className="mt-6 flex justify-end gap-2">
          <button className="btn btn-outline" onClick={()=>setOpen(false)}>Maybe later</button>
          <a href="/settings" className="btn btn-primary">Set up now</a>
        </div>
      </div>
    </div>
  )
}
