import { NavLink } from 'react-router-dom'
import { LayoutGrid, CalendarClock, Upload, Users, ShieldCheck, BarChart3, Settings, LifeBuoy } from 'lucide-react'

// App sidebar for authenticated views
export default function Sidebar(){
  const link = ({ isActive }: { isActive: boolean }) => `flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-indigo-50 text-brand' : 'text-slate-600 hover:bg-slate-50'}`
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white p-4 md:block">
      <div className="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-500">Navigation</div>
      <nav className="flex flex-col gap-1">
        <NavLink to="/dashboard" className={link}><LayoutGrid className="h-4 w-4"/> Dashboard</NavLink>
        <NavLink to="/meetings" className={link}><CalendarClock className="h-4 w-4"/> Meetings</NavLink>
        <NavLink to="/upload" className={link}><Upload className="h-4 w-4"/> Upload</NavLink>
        <NavLink to="/team" className={link}><Users className="h-4 w-4"/> Team</NavLink>
        <NavLink to="/compliance" className={link}><ShieldCheck className="h-4 w-4"/> Compliance</NavLink>
        <NavLink to="/reports" className={link}><BarChart3 className="h-4 w-4"/> Reports</NavLink>
        <NavLink to="/settings" className={link}><Settings className="h-4 w-4"/> Settings</NavLink>
        <NavLink to="/help" className={link}><LifeBuoy className="h-4 w-4"/> Help</NavLink>
      </nav>
    </aside>
  )
}
