import { useState } from "react"
import { useProducts } from "@/hooks/useProducts"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

const categoryBg = {
  "men's clothing":   "from-sky-100 to-blue-50",
  "women's clothing": "from-rose-100 to-pink-50",
  "jewelery":         "from-amber-100 to-yellow-50",
  "electronics":      "from-emerald-100 to-teal-50",
}

const categoryLabel = {
  "men's clothing":   "Ropa Hombre",
  "women's clothing": "Ropa Mujer",
  "jewelery":         "Joyería",
  "electronics":      "Electrónica",
}

function CardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
      <Skeleton className="h-52 w-full" />
      <div className="p-4 flex flex-col gap-3">
        <div className="flex justify-between">
          <Skeleton className="h-5 w-40 rounded" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
        <Skeleton className="h-4 w-24 rounded" />
        <Skeleton className="h-4 w-16 rounded" />
      </div>
    </div>
  )
}

function EntityCard({ product }) {
  const { title, price, image, category, rating } = product
  const bg = categoryBg[category] ?? "from-slate-100 to-gray-50"
  const label = categoryLabel[category] ?? category

  return (
    <div className="group bg-white rounded-xl border border-border shadow-sm overflow-hidden
      cursor-pointer
      hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-200/50 hover:border-orange-200
      transition-all duration-300 ease-out">

      {/* Imagen */}
      <div className={`flex items-center justify-center h-52 bg-gradient-to-br ${bg}`}>
        <img
          src={image}
          alt={title}
          className="h-44 w-44 object-contain
            group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-3">
        {/* Nombre + badge categoría */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-bold text-foreground line-clamp-2 flex-1 leading-snug">
            {title}
          </h3>
          <Badge className="shrink-0 text-[10px] bg-orange-500 hover:bg-orange-500 text-white whitespace-nowrap">
            {label}
          </Badge>
        </div>

        {/* Precio */}
        <div>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium mb-0.5">
            Precio
          </p>
          <p className="text-base font-extrabold text-orange-500">
            ${price.toFixed(2)}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground
            bg-muted px-2 py-0.5 rounded-full">
            ⭐ {rating.rate} · {rating.count} reseñas
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Entities() {
  const { products, loading, error } = useProducts()
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = ["all", ...new Set(products.map((p) => p.category))]

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="mb-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-1">
          Entidades
        </p>
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl font-extrabold text-foreground">
              Listado completo de productos
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {loading
                ? "Cargando..."
                : `Productos obtenidos: ${products.length} | Mostrando: ${filtered.length}`}
            </p>
          </div>
        </div>
      </div>

      {/* Filtros */}
      {!loading && (
        <div className="mt-6 mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Filtrar por categoría
          </p>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-1.5 rounded-md text-sm font-medium border transition-all duration-200",
                  activeCategory === cat
                    ? "bg-orange-500 text-white border-orange-500 shadow-sm"
                    : "bg-white text-foreground border-border hover:border-orange-300 hover:text-orange-500"
                )}
              >
                {cat === "all" ? "Todas" : categoryLabel[cat] ?? cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-center py-12 text-destructive">
          <p className="text-lg font-medium">Error al cargar productos</p>
          <p className="text-sm text-muted-foreground mt-1">{error}</p>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <CardSkeleton key={i} />)
          : filtered.map((product) => (
              <EntityCard key={product.id} product={product} />
            ))}
      </div>

    </div>
  )
}
