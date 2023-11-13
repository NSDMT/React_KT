import React from 'react'

function Categories({ categories, selectCategory }) {
  return (
    <div>
      <h2>Kategoriler</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => selectCategory(category.name)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Categories
