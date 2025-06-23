import { Card, CardContent } from "@/components/ui/card";
import { formatPrice, formatMinOrder } from "@/lib/utils";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="bg-white hover:shadow-md transition-shadow cursor-pointer group">
      <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-promo-blue">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs text-gray-500">
            {formatMinOrder(product.minOrder)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
