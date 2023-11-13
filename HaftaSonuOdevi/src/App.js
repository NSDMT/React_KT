
import ProductAdd from './ProductAdd';
import './App.css';
import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap'
import Product from './Product';
import Navi from './Navi';
import Categories from './Categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'



function App() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Meyve" },
    { id: 2, name: "Sebze" },
    { id: 3, name: "Sarkuteri" },
    { id: 4, name: "Tüm Ürünler" }
  ])
  const [products, setProducts] = useState([
    { id: 1, name: "Elma", price: 10, categorie: "Meyve" },
    { id: 2, name: "Armut", price: 20, categorie: "Meyve" },
    { id: 3, name: "Muz", price: 30, categorie: "Meyve" },
    { id: 4, name: "Brokoli", price: 40, categorie: "Sebze" },
    { id: 5, name: "Salatalık", price: 50, categorie: "Sebze" },
    { id: 6, name: "Marul", price: 60, categorie: "Sebze" },
    { id: 7, name: "Zeytin", price: 70, categorie: "Sarkuteri" },
    { id: 8, name: "Peynir", price: 80, categorie: "Sarkuteri" },
    { id: 9, name: "Kaşar", price: 90, categorie: "Sarkuteri" }
  ])
  const [selectedCategory, setSelectedCategory] = useState(null);

  const selectCategory = (category) => {
    if (category === 'Tüm Ürünler') {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };
  const [cardCount, setCardCount] = useState(0)
  const [showCardLink, setShowCardLink] = useState(false)
  const [cardItems, setCardItems] = useState([])

  const addToCard = (product) => {
    setCardCount(cardCount + 1)
    setShowCardLink(true)
    setCardItems([...cardItems, product])
  }

  const clearCard = () => {
    setCardCount(0);
    setShowCardLink(false);
    setCardItems([]);
  }

  const addNewProduct = (newProduct) => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
  };

  return (
    <Container>
      <Navi cardCount={cardCount} showCardLink={showCardLink} clearCard={clearCard} cardItems={cardItems} />
      <Row style={{ marginTop: '50px' }}>
        <Col xs="3">
          <Categories categories={categories} selectCategory={selectCategory} />
        </Col>
        <Col xs="9">
          <Product products={products} addToCard={addToCard} selectedCategory={selectedCategory} />
        </Col>

        <Routes>
          <Route path='addProduct' element={<ProductAdd addProduct={addNewProduct} categories={categories} />}></Route>
          <Route path='/'></Route>
        </Routes>

      </Row>

    </Container>

  );
}

export default App;
