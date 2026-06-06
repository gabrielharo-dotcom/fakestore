import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProductCard({ product }) {
  const { title, price, image, category, rating } = product

  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-center h-52 p-6 bg-white rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain"
        />
      </div>

      <CardContent className="flex flex-col gap-2 flex-1 pt-4">
        <Badge variant="secondary" className="w-fit capitalize text-xs">
          {category}
        </Badge>
        <h3 className="text-sm font-semibold leading-snug line-clamp-2 text-foreground">
          {title}
        </h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <span>⭐ {rating?.rate}</span>
          <span className="text-muted-foreground/50">({rating?.count} reseñas)</span>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <span className="text-lg font-bold text-foreground">${price.toFixed(2)}</span>
      </CardFooter>
    </Card>
  )
}
