import { UploadCloud, FileAudio2, FileText } from 'lucide-react'

export default function Upload(){
  return (
    <div className="container-px mx-auto max-w-3xl py-12">
      <h1 className="text-2xl font-semibold">Add Meeting</h1>
      <p className="text-slate-600">Record a new meeting or upload an existing audio/video file.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h3 className="mb-2 text-lg font-semibold">Record live</h3>
          <p className="text-sm text-slate-600">Connect Zoom, Google Meet, or Teams.</p>
          <button className="btn btn-primary mt-4">Connect provider</button>
        </div>
        <div className="card p-6">
          <h3 className="mb-2 text-lg font-semibold">Upload file</h3>
          <p className="text-sm text-slate-600">We accept MP3, WAV, MP4, and text transcripts.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 p-3 hover:bg-slate-50"><FileAudio2 className="h-4 w-4"/> <input type="file" className="hidden"/> Audio/Video</label>
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 p-3 hover:bg-slate-50"><FileText className="h-4 w-4"/> <input type="file" className="hidden"/> Transcript</label>
          </div>
          <button className="btn btn-primary mt-4"><UploadCloud className="h-4 w-4"/> Upload</button>
        </div>
      </div>
    </div>
  )
}
