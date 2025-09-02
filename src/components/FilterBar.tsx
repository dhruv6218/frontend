export default function FilterBar(){
  return (
    <div className="flex flex-wrap items-center gap-2">
      <select className="input max-w-[180px]" aria-label="Status filter">
        <option value="all">All statuses</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
        <option value="alert">Compliance Alert</option>
      </select>
      <select className="input max-w-[180px]" aria-label="Date range">
        <option value="30">Last 30 days</option>
        <option value="90">Last 90 days</option>
        <option value="365">Last year</option>
      </select>
      <select className="input max-w-[200px]" aria-label="Tags">
        <option value="all">All tags</option>
        <option>Legal</option>
        <option>Sales</option>
        <option>HR</option>
      </select>
    </div>
  )
}
