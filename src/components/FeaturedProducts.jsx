import ProductsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";

export const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </div>
  );
};
export default FeaturedProducts;
