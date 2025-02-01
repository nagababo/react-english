
interface ISearchBarProps {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (newFilterText: string) => void;
  onInStockOnlyChange: (newInStockOnly: boolean) => void;
}
const SearchBar:React.FC<ISearchBarProps>=({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange})=> {
    return (
      <form>
        <input type="text"
        value={filterText}
        placeholder="Search..." 
        onChange={(e)=>onFilterTextChange(e.target.value)}
        />
        <label>
          <input type="checkbox" checked={inStockOnly}
          onChange={(e)=>{onInStockOnlyChange(e.target.checked)}} />
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  }
  export default SearchBar;