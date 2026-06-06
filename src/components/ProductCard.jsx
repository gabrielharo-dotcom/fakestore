import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const categoryBg = {
  "men's clothing":    "from-sky-100 to-blue-50",
  "women's clothing":  "from-rose-100 to-pink-50",
  "jewelery":          "from-amber-100 to-yellow-50",
  "electronics":       "from-emerald-100 to-teal-50",
}

export default function ProductCard({ product }) {
  const { title, price, image, category, rating } = product
  const bg = categoryBg[category] ?? "from-slate-100 to-gray-50"

  return (
    <Card className="flex flex-col h-full group cursor-pointer
      bg-white border border-border
      hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-200/60
      hover:border-orange-200
      transition-all duration-300 ease-out">

      {/* Imagen con fondo pastel por categoría */}
      <div className={`flex items-center justify-center h-52 rounded-t-lg overflow-hidden bg-gradient-to-br ${bg}`}>
        <img
          src={image}
          alt={title}
          className="h-44 w-44 object-contain
            group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <CardContent className="flex flex-col gap-2 flex-1 pt-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-bold leading-snug line-clamp-2 text-foreground flex-1">
            {title}
          </h3>
          <Badge className="shrink-0 text-[10px] bg-orange-500 hover:bg-orange-500 text-white capitalize">
            {category.split("'")[0].trim()}
          </Badge>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <span>⭐ {rating?.rate}</span>
          <span>({rating?.count} reseñas)</span>
        </div>
      </CardContent>

      <CardFooter className="pt-0 pb-4">
        <span className="text-xl font-extrabold text-orange-500">
          ${price.toFixed(2)}
        </span>
      </CardFooter>
    </Card>
  )
}
