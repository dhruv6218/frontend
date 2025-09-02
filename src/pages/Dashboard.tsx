import Sidebar from '@/components/Sidebar'
import StatCard from '@/components/StatCard'
import NotificationBell from '@/components/NotificationBell'
import OnboardingModal from '@/components/OnboardingModal'
import { CalendarClock, CheckSquare, ShieldCheck } from 'lucide-react'

export default function Dashboard(){
  return (
    <div className="container-px mx-auto max-w-7xl py-8">
      <div className="grid gap-6 md:grid-cols-[16rem,1fr]">
        <Sidebar/>
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Welcome, Alex! Your productivity hub for meeting compliance.</h1>
              <p className="text-slate-600">Quick glance at your meetings and compliance health.</p>
            </div>
            <NotificationBell/>
          </div>
          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard title="Meetings this month" value={18} subtitle="Up 12%" icon={<CalendarClock className="h-4 w-4 text-brand"/>}/>
            <StatCard title="Pending action items" value={7} subtitle="3 due this week" icon={<CheckSquare className="h-4 w-4 text-amber-600"/>}/>
            <StatCard title="Compliance health" value={'92%'} subtitle="Checklist status" icon={<ShieldCheck className="h-4 w-4 text-emerald-600"/>}/>
          </div>
          {/* Quick actions */}
          <div className="mt-6 flex flex-wrap gap-2">
            <a href="/meetings" className="btn btn-outline">View meetings</a>
            <a href="/upload" className="btn btn-primary">Add meeting</a>
            <a href="/reports" className="btn btn-outline">Generate report</a>
          </div>
        </div>
      </div>
      {/* Onboarding for first-time users */}
      <OnboardingModal/>
    </div>
  )
}
