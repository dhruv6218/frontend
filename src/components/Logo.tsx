export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  // Neutral geometric logo placeholder for Ravono branding
  return (
    <svg className={className} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#4F46E5"/>
          <stop offset="100%" stopColor="#8B5CF6"/>
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="48" height="48" rx="12" fill="url(#g)"/>
      <path d="M20 42l12-20 12 20" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
