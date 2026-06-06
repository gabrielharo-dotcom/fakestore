import { ShoppingBag } from "lucide-react"
import { useProducts } from "@/hooks/useProducts"
import ProductCard from "@/components/ProductCard"
import { Skeleton } from "@/components/ui/skeleton"

function ProductSkeleton() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border p-4">
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
      <section className="text-center py-16 mb-12 rounded-2xl bg-gradient-to-br from-primary/10 via-background to-secondary/20 border border-border">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <ShoppingBag className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
          FakeStore Catalog
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Explora nuestro catálogo de productos. Ropa, joyería, electrónica y más,
          todo en un solo lugar.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
          {loading ? "Cargando productos..." : `${products.length} productos disponibles`}
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
        <h2 className="text-xl font-semibold text-foreground mb-6">
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
