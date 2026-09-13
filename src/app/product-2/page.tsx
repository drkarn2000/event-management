import { ProductLanding } from "@/components/ProductLanding";
import { getProductBySlug } from "@/lib/data/site";

export default function ProductTwoPage() {
  const product = getProductBySlug("product-2")!;

  return <ProductLanding product={product} label="Product 2" />;
}
