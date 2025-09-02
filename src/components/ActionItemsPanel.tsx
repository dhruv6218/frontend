import { CheckSquare, Plus } from 'lucide-react'
import { useState } from 'react'

export type ActionItem = { id: string; text: string; assignee?: string; due?: string; done?: boolean }

export default function ActionItemsPanel(){
  const [items, setItems] = useState<ActionItem[]>([
    { id: '1', text: 'Send NDA to ACME Legal', assignee: 'Priya', due: 'Fri', done: false },
    { id: '2', text: 'Review SOC2 clause updates', assignee: 'Ravi', due: 'Mon', done: false },
  ])
  return (
    <div className="card p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium"><CheckSquare className="h-4 w-4"/> Action Items</div>
        <button className="btn btn-outline" onClick={()=>setItems([...items, { id: crypto.randomUUID(), text: 'New item', done: false }])}><Plus className="h-4 w-4"/> Add</button>
      </div>
      <ul className="space-y-2 text-sm">
        {items.map(i => (
          <li key={i.id} className="flex items-center justify-between rounded-lg border border-slate-200 p-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" checked={!!i.done} onChange={()=>setItems(items.map(it => it.id===i.id? { ...it, done: !it.done } : it))}/>
              <span className={i.done? 'line-through text-slate-400' : ''}>{i.text}</span>
            </label>
            <div className="text-xs text-slate-500">{i.assignee ? `@${i.assignee}` : 'Unassigned'} • {i.due ?? 'No due date'}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
