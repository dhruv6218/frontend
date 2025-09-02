import { Search } from 'lucide-react'

export default function SearchBar({ placeholder = 'Search meetings, speakers, tags…' }: { placeholder?: string }){
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"/>
      <input aria-label="Search" className="input pl-9" placeholder={placeholder} />
    </div>
  )
}
