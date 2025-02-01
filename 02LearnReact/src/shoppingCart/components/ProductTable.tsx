import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

interface IProductTableProps {
  products: [];
  filterText: string;
  inStockOnly: boolean;

}
const ProductTable: React.FC<IProductTableProps> = ({ products, filterText, inStockOnly }) => {
  const rows = [] as any;
  let lastCategory: null = null;

  products.forEach((product: any) => {

    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
export default ProductTable