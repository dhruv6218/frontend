import { Share2, Copy, FileDown, Mails, MessageSquare } from 'lucide-react'

export default function ExportShare(){
  return (
    <div className="card p-4">
      <div className="mb-2 flex items-center gap-2 text-sm font-medium"><Share2 className="h-4 w-4"/> Export & Share</div>
      <div className="flex flex-wrap gap-2">
        <button className="btn btn-outline"><FileDown className="h-4 w-4"/> PDF</button>
        <button className="btn btn-outline"><FileDown className="h-4 w-4"/> Word</button>
        <button className="btn btn-outline"><Copy className="h-4 w-4"/> Copy link</button>
        <button className="btn btn-outline"><Mails className="h-4 w-4"/> Email</button>
        <button className="btn btn-outline"><MessageSquare className="h-4 w-4"/> Slack</button>
      </div>
    </div>
  )
}
