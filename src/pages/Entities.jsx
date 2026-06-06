import { useProducts } from "@/hooks/useProducts"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Package } from "lucide-react"

function TableSkeleton() {
  return Array.from({ length: 6 }).map((_, i) => (
    <TableRow key={i}>
      <TableCell><Skeleton className="h-12 w-12 rounded-md" /></TableCell>
      <TableCell><Skeleton className="h-4 w-64 rounded" /></TableCell>
      <TableCell><Skeleton className="h-5 w-20 rounded-full" /></TableCell>
      <TableCell><Skeleton className="h-4 w-16 rounded" /></TableCell>
      <TableCell><Skeleton className="h-4 w-10 rounded" /></TableCell>
      <TableCell><Skeleton className="h-4 w-20 rounded" /></TableCell>
    </TableRow>
  ))
}

export default function Entities() {
  const { products, loading, error } = useProducts()

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
          <Package className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Listado de Productos</h1>
          <p className="text-sm text-muted-foreground">
            {loading ? "Cargando..." : `${products.length} productos en total`}
          </p>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="text-center py-12 text-destructive">
          <p className="text-lg font-medium">Error al cargar productos</p>
          <p className="text-sm text-muted-foreground mt-1">{error}</p>
        </div>
      )}

      {/* Table */}
      <div className="rounded-xl border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-20">Imagen</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Categoría</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Reseñas</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableSkeleton />
            ) : (
              products.map((product) => (
                <TableRow key={product.id} className="hover:bg-muted/30 transition-colors">
                  {/* Imagen */}
                  <TableCell>
                    <div className="w-12 h-12 rounded-md bg-white flex items-center justify-center p-1 border border-border">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </TableCell>

                  {/* Título */}
                  <TableCell className="max-w-xs">
                    <p className="text-sm font-medium text-foreground line-clamp-2">
                      {product.title}
                    </p>
                  </TableCell>

                  {/* Categoría */}
                  <TableCell>
                    <Badge variant="secondary" className="capitalize whitespace-nowrap">
                      {product.category}
                    </Badge>
                  </TableCell>

                  {/* Precio */}
                  <TableCell className="font-semibold text-foreground whitespace-nowrap">
                    ${product.price.toFixed(2)}
                  </TableCell>

                  {/* Rating */}
                  <TableCell>
                    <span className="flex items-center gap-1 text-sm">
                      <span>⭐</span>
                      <span className="font-medium">{product.rating.rate}</span>
                    </span>
                  </TableCell>

                  {/* Reseñas */}
                  <TableCell className="text-muted-foreground text-sm">
                    {product.rating.count}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

    </div>
  )
}
