import { useState } from 'react'
import { Mail, Building2, Lock } from 'lucide-react'

export default function Signup(){
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [password, setPassword] = useState('')
  const [agree, setAgree] = useState(false)
  const [error, setError] = useState('')

  function onSubmit(e: React.FormEvent){
    e.preventDefault()
    setError('')
    if(!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) return setError('Please enter a valid email address.')
    if(company.length < 2) return setError('Company name looks too short.')
    if(password.length < 8) return setError('Password must be at least 8 characters.')
    if(!agree) return setError('Please accept the Terms & Privacy policy.')
    alert('Account created (demo). Proceed to onboarding.')
    window.location.href = '/dashboard'
  }

  return (
    <div className="container-px mx-auto grid max-w-6xl gap-8 py-16 md:grid-cols-2">
      <div className="hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-10 text-white md:block">
        <h2 className="text-3xl font-semibold">Create your Ravono account</h2>
        <p className="mt-2 text-indigo-100">Start with a free plan. Upgrade anytime.</p>
        <ul className="mt-6 space-y-3 text-indigo-100">
          <li>• Unlimited transcripts for first 14 days</li>
          <li>• AI summaries and action items included</li>
          <li>• Secure export and sharing</li>
        </ul>
      </div>
      <div>
        <h1 className="text-3xl font-semibold">Sign up</h1>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          {error && <div className="rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">{error}</div>}
          <label className="block text-sm font-medium">Work Email</label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"/>
            <input className="input pl-9" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" required />
          </div>
          <label className="block text-sm font-medium">Company</label>
          <div className="relative">
            <Building2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"/>
            <input className="input pl-9" value={company} onChange={e=>setCompany(e.target.value)} placeholder="Your company" required />
          </div>
          <label className="block text-sm font-medium">Password</label>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"/>
            <input className="input pl-9" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="At least 8 characters" required minLength={8} />
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={agree} onChange={()=>setAgree(!agree)} /> I agree to the <a href="#">Terms</a> and <a href="#">Privacy</a>.
          </label>
          <button className="btn btn-primary w-full" type="submit">Create account</button>
          <div className="text-center text-sm">Already have an account? <a href="/login">Log in</a>.</div>
        </form>
      </div>
    </div>
  )
}
