import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { to: "/", label: "Home" },
  { to: "/entities", label: "Personajes" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "shadow-lg shadow-orange-900/20 backdrop-blur-md bg-orange-500/95"
          : "bg-orange-500"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 font-bold text-white text-base">
          <ShoppingBag className="h-5 w-5" />
          FakeStore Catalog
        </NavLink>

        {/* Nav links */}
        <nav className="flex items-center gap-2">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                cn(
                  "px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-white text-orange-500 shadow-sm"
                    : "text-white/85 hover:text-white hover:bg-white/15"
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  )
}
