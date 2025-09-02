import { ReactNode } from 'react'

export default function StatCard({ title, value, subtitle, icon }: { title: string; value: string | number; subtitle?: string; icon?: ReactNode }){
  // Compact analytics card
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-slate-600">{title}</div>
        {icon}
      </div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      {subtitle && <div className="mt-1 text-xs text-slate-500">{subtitle}</div>}
    </div>
  )
}
