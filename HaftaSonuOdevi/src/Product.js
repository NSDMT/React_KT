import React from 'react'
import { Row } from "reactstrap"

function Product({ products, addToCard, selectedCategory }) {
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categorie === selectedCategory)
    : products;
  return (
    <Row>
      {filteredProducts.map((product) => (


        <div key={product.id} className='col-4 p-3 border' >
          <h2>Ürün</h2>
          <p>Ürün adı :{product.name}</p>
          <p>Fiyatı : {product.price}₺</p>
          <button className='btn btn-success' onClick={() => addToCard(product)}>Sepete Ekle</button>
        </div>

      ))}
    </Row>
  )
}

export default Product
