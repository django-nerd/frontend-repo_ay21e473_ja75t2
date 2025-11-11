import { Link, NavLink } from 'react-router-dom'
import { Menu, Infinity, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/research', label: 'Research' },
  { to: '/labs', label: 'Labs' },
  { to: '/founders', label: 'Founders' },
  { to: '/gallery', label: 'Gallery' },
]

export default function Navbar({ onOpenDock }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white">
            <Infinity className="w-6 h-6 text-violet-400" />
            <span className="font-semibold tracking-wide">Infinity AI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) => `relative px-3 py-2 rounded-md text-sm transition text-gray-300 hover:text-white ${isActive ? 'text-white' : ''}`}
              >
                {({ isActive }) => (
                  <>
                    <span>{n.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="active-pill"
                        className="absolute inset-0 -z-10 rounded-md bg-white/10"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={onOpenDock} className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-sm text-white transition">
              <Sparkles className="w-4 h-4" />
              Open Side Footer
            </button>
            <button onClick={onOpenDock} className="md:hidden p-2 rounded-md hover:bg-white/10 text-white">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
