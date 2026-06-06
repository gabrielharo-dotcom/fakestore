import { ShoppingBag } from "lucide-react"
import { useProducts } from "@/hooks/useProducts"
import ProductCard from "@/components/ProductCard"
import { Skeleton } from "@/components/ui/skeleton"

function ProductSkeleton() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-white p-4 shadow-sm">
      <Skeleton className="h-52 w-full rounded-lg" />
      <Skeleton className="h-4 w-20 rounded" />
      <Skeleton className="h-4 w-full rounded" />
      <Skeleton className="h-4 w-3/4 rounded" />
      <Skeleton className="h-6 w-16 rounded mt-auto" />
    </div>
  )
}

export default function Home() {
  const { products, loading, error } = useProducts()

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Hero */}
      <section className="relative text-center py-20 mb-12 rounded-3xl overflow-hidden
        bg-gradient-to-br from-orange-400 via-orange-500 to-amber-400
        shadow-xl shadow-orange-200">

        {/* Manchas decorativas */}
        <div className="absolute -top-8 -left-8 w-52 h-52 rounded-full bg-yellow-300/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-8 -right-8 w-52 h-52 rounded-full bg-red-400/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl
            bg-white/20 border border-white/30 mb-6 shadow-lg">
            <ShoppingBag className="h-8 w-8 text-white" />
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight text-white mb-4 drop-shadow-sm">
            FakeStore Catalog
          </h1>

          <p className="text-white/85 text-lg max-w-xl mx-auto leading-relaxed">
            Explora nuestro catálogo de productos. Ropa, joyería, electrónica y más,
            todo en un solo lugar.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full
            bg-white/20 border border-white/30 text-sm text-white font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-green-300 animate-pulse" />
            {loading ? "Cargando productos..." : `${products.length} productos disponibles`}
          </div>
        </div>
      </section>

      {/* Error */}
      {error && (
        <div className="text-center py-12 text-destructive">
          <p className="text-lg font-medium">Error al cargar productos</p>
          <p className="text-sm text-muted-foreground mt-1">{error}</p>
        </div>
      )}

      {/* Grid */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-6">
          Todos los productos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)
            : products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </section>

    </div>
  )
}
