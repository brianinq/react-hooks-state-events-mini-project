import React from "react";

function CategoryFilter({ categories, selected, selectedHandler }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category, i) => (
        <button key={i} className={selected === category ? "selected" : ""} onClick={() => selectedHandler(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
