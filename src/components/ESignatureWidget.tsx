import { PenLine } from 'lucide-react'

export default function ESignatureWidget(){
  // E-signature UI placeholder (front-end only)
  return (
    <div className="card p-4">
      <div className="mb-2 flex items-center gap-2 text-sm font-medium"><PenLine className="h-4 w-4"/> E‑Signature</div>
      <div className="h-28 rounded-lg border border-dashed border-slate-300 bg-slate-50"></div>
      <div className="mt-2 flex items-center justify-between text-xs text-slate-600">
        <span>Status: Pending signature</span>
        <div className="flex gap-2">
          <button className="btn btn-outline">Request</button>
          <button className="btn btn-primary">Sign</button>
        </div>
      </div>
    </div>
  )
}
