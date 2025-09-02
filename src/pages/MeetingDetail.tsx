import Player from '@/components/Player'
import TranscriptPanel from '@/components/TranscriptPanel'
import AISummaryPanel from '@/components/AISummaryPanel'
import ActionItemsPanel from '@/components/ActionItemsPanel'
import ComplianceChecklist from '@/components/ComplianceChecklist'
import ESignatureWidget from '@/components/ESignatureWidget'
import ApprovalTracker from '@/components/ApprovalTracker'

export default function MeetingDetail(){
  return (
    <div className="container-px mx-auto max-w-6xl py-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Q4 Compliance Planning</h1>
          <p className="text-slate-600">Aug 20, 2025 • 42 min</p>
        </div>
        <div className="flex gap-2">
          <a href="#" className="btn btn-outline">Back</a>
          <a href="#" className="btn btn-primary">Export</a>
        </div>
      </div>

      {/* Player + Transcript side by side */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4">
          <Player/>
          <AISummaryPanel/>
          <ActionItemsPanel/>
        </div>
        <div className="space-y-4">
          <TranscriptPanel/>
          <ComplianceChecklist/>
          <ESignatureWidget/>
          <ApprovalTracker/>
        </div>
      </div>
    </div>
  )
}
