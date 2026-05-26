export function SortSelect() {
  return (
    <select defaultValue="recommended" className="min-w-44" aria-label="Sort by">
      <option value="recommended">Recommended</option>
      <option value="rating">Highest rated</option>
      <option value="price_low">Price: low to high</option>
      <option value="price_high">Price: high to low</option>
      <option value="popularity">Most popular</option>
    </select>
  );
}
