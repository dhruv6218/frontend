import { useState } from 'react'
import { Mail, Lock, Github, Google } from 'lucide-react'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function onSubmit(e: React.FormEvent){
    e.preventDefault()
    setError('')
    if(!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) return setError('Please enter a valid email address.')
    if(password.length < 8) return setError('Password must be at least 8 characters.')
    // Submit to backend later via env API
    alert('Logged in (demo)')
  }

  return (
    <div className="container-px mx-auto grid max-w-6xl gap-8 py-16 md:grid-cols-2">
      <div className="hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-10 text-white md:block">
        <h2 className="text-3xl font-semibold">Welcome back</h2>
        <p className="mt-2 text-indigo-100">Your productivity hub for meeting compliance.</p>
        <ul className="mt-6 space-y-3 text-indigo-100">
          <li>• AI summaries and action items</li>
          <li>• GDPR/SOC2-ready workflows</li>
          <li>• Team collaboration and approvals</li>
        </ul>
      </div>
      <div>
        <h1 className="text-3xl font-semibold">Log in</h1>
        <p className="mt-2 text-slate-600">New here? <a href="/signup">Create your Ravono account</a>.</p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          {error && <div className="rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">{error}</div>}
          <label className="block text-sm font-medium">Email</label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"/>
            <input className="input pl-9" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" required />
          </div>
          <label className="block text-sm font-medium">Password</label>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"/>
            <input className="input pl-9" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Your password" required minLength={8} />
          </div>
          <button className="btn btn-primary w-full" type="submit">Log in</button>
          <div className="text-center text-sm"><a href="#">Forgot password?</a></div>
          <div className="flex items-center gap-3">
            <div className="h-px w-full bg-slate-200"/><span className="text-xs text-slate-500">or</span><div className="h-px w-full bg-slate-200"/>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button type="button" className="btn btn-outline w-full"><Google className="h-4 w-4"/> Google</button>
            <button type="button" className="btn btn-outline w-full"><Github className="h-4 w-4"/> GitHub</button>
          </div>
        </form>
      </div>
    </div>
  )
}
