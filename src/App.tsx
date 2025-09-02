import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Bell, LogIn, UserPlus } from 'lucide-react'
import { useEffect, useState } from 'react'

// Header with sticky CTA and minimal nav — mirrors modern SaaS layout
function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname]) // close menu on route change
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container-px mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-2">
            {/* Brand logo placeholder */}
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand to-accent-violet"></div>
            <span className="text-lg font-semibold">Ravono Meetings</span>
          </a>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/pricing" className={({isActive})=>isActive? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}>Pricing</NavLink>
          <NavLink to="/resources" className={({isActive})=>isActive? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}>Resources</NavLink>
          <NavLink to="/blog" className={({isActive})=>isActive? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}>Blog</NavLink>
          <NavLink to="/help" className={({isActive})=>isActive? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}>Help</NavLink>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <NavLink to="/login" className="btn btn-outline"><LogIn className="h-4 w-4"/> Log in</NavLink>
          <NavLink to="/signup" className="btn btn-primary"><UserPlus className="h-4 w-4"/> Try Ravono Free</NavLink>
        </div>

        <button aria-label="Toggle menu" onClick={()=>setOpen(v=>!v)} className="md:hidden">
          {open ? <X/> : <Menu/>}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-px mx-auto flex flex-col gap-2 py-3">
            <NavLink to="/pricing" className="py-2">Pricing</NavLink>
            <NavLink to="/resources" className="py-2">Resources</NavLink>
            <NavLink to="/blog" className="py-2">Blog</NavLink>
            <NavLink to="/help" className="py-2">Help</NavLink>
            <div className="h-px bg-slate-200"/>
            <NavLink to="/login" className="btn btn-outline">Log in</NavLink>
            <NavLink to="/signup" className="btn btn-primary">Try Ravono Free</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

// Footer with trust signals and GDPR badge
function Footer(){
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-px mx-auto grid gap-8 py-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand to-accent-violet"/>
            <span className="text-lg font-semibold">Ravono Meetings</span>
          </div>
          <p className="text-sm text-slate-600">Meeting minutes, transcripts, and compliance — automated and secure.</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">GDPR & SOC2 Ready</div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-700">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/help">Support</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-700">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-700">Get started</h3>
          <div className="flex gap-2">
            <a href="/signup" className="btn btn-primary">Try for Free</a>
            <a href="/help" className="btn btn-outline">Book a Demo</a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Ravono, Inc. All rights reserved.</div>
    </footer>
  )
}

// Notification bell placeholder for global alerts
function GlobalBar(){
  return (
    <div className="sticky top-16 z-40 border-b border-slate-200 bg-gradient-to-r from-indigo-50 to-violet-50/60 p-2 text-center text-sm text-slate-700">
      <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-brand"><Bell className="h-3 w-3"/></span>
      Smart compliance reminders enabled. Customize in Settings.
    </div>
  )
}

export default function App(){
  return (
    <div className="flex min-h-screen flex-col">
      <Header/>
      <GlobalBar/>
      {/* Main outlet renders pages */}
      <main className="flex-1">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
