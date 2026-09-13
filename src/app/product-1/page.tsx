import { ProductLanding } from "@/components/ProductLanding";
import { getProductBySlug } from "@/lib/data/site";

export default function ProductOnePage() {
  const product = getProductBySlug("product-1")!;

  return <ProductLanding product={product} label="Product 1" />;
}
