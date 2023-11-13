import React, { useState } from 'react';

function ProductAdd({ addProduct, categories }) {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const urunEkle = () => {
    addProduct({ name: productName, price: parseFloat(productPrice), categorie: productCategory });
    setProductName('');
    setProductPrice('');
    setProductCategory('')
  };
  return (

    <div className='container'>

      <div className="row mt-5 py-3">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className='border p-5'>
            <h1>Product List</h1>
            <label htmlFor="">Ürün Adı</label>
            <input
              className='form-control my-4'
              type="text"
              placeholder="name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <label htmlFor="">Fiyat</label>
            <input
              className='form-control my-4'
              type='number'
              placeholder="price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
            <label htmlFor="">Kategori</label>
            <select onChange={(e) => setProductCategory(e.target.value)} name="kategori" id="kategori">
              {categories.map((category) => (
                <option value={category.name}>{category.name}</option>

              ))}

            </select>
            <button className='btn btn-primary m-4' onClick={urunEkle}>EKLE</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductAdd;
