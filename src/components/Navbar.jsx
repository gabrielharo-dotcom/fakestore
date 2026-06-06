import { NavLink } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { to: "/", label: "Inicio" },
  { to: "/entities", label: "Productos" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
          <ShoppingBag className="h-5 w-5" />
          FakeStore Catalog
        </NavLink>

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                cn(
                  "px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
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
