import Sidebar from '@/components/Sidebar'
import SearchBar from '@/components/SearchBar'
import FilterBar from '@/components/FilterBar'
import MeetingCard, { type Meeting } from '@/components/MeetingCard'

export default function Meetings(){
  const data: Meeting[] = [
    { id: 'm1', title: 'Q4 Compliance Planning', date: 'Aug 20, 2025', duration: '42 min', status: 'completed', tags: ['Compliance', 'Security'] },
    { id: 'm2', title: 'ACME NDA Review', date: 'Aug 21, 2025', duration: '28 min', status: 'pending', tags: ['Legal'] },
    { id: 'm3', title: 'Enterprise Deal Sync', date: 'Aug 22, 2025', duration: '55 min', status: 'alert', tags: ['Sales', 'Risk'] },
  ]
  return (
    <div className="container-px mx-auto max-w-7xl py-8">
      <div className="grid gap-6 md:grid-cols-[16rem,1fr]">
        <Sidebar/>
        <div>
          <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <h1 className="text-2xl font-semibold">Meetings</h1>
            <div className="flex items-center gap-2">
              <SearchBar/>
              <a href="/upload" className="btn btn-primary">Add Meeting</a>
            </div>
          </div>
          <FilterBar/>
          <div className="mt-4 grid gap-3">
            {data.map(m => <MeetingCard key={m.id} m={m}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}
