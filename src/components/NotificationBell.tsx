import { Bell } from 'lucide-react'

export default function NotificationBell(){
  // Bell with red badge for pending alerts
  return (
    <button className="relative rounded-full p-2 hover:bg-slate-100" aria-label="Notifications">
      <Bell className="h-5 w-5 text-slate-700"/>
      <span className="absolute -right-0.5 -top-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-white"/>
    </button>
  )
}
