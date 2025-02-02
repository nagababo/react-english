import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable({ products }:any) {
   const [filterText, setFilterText] = useState<any>('')
   const [inStockOnly, setInStockOnly] = useState<boolean>(false)
    return (
      <div>
        <SearchBar 
        filterText={filterText}
        inStockOnly = {inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
        />
        <ProductTable products={products} 
        filterText={filterText}
        inStockOnly = {inStockOnly}
        />
      </div>
    );
  }