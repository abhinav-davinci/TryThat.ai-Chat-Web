import { MessageSquare, LayoutDashboard, Building2, Heart, ClipboardList, Plus, User } from 'lucide-react'

const navItems = [
  { label: 'AI Chat', icon: MessageSquare, href: '/chat' },
  { label: 'Dashboard', icon: LayoutDashboard, href: '#' },
  { label: 'My Properties', icon: Building2, href: '#' },
  { label: 'Your Interests', icon: Heart, href: '#' },
  { label: 'My Requirements', icon: ClipboardList, href: '#' },
]

export default function ListPropertyHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt="TryThat.ai" className="h-8 w-auto" />
        </a>

        {/* Nav links - hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-neutral-600 rounded-lg hover:bg-neutral-50 hover:text-neutral-800 transition-colors"
            >
              <item.icon size={16} />
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="/list-property"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#2558A6] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#1e4a8a] transition-colors"
          >
            <Plus size={16} />
            Add Property
          </a>
          <button
            type="button"
            className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition-colors"
            aria-label="User menu"
          >
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
