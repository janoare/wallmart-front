import React from 'react';
import './App.css';
import ProductFilter from '../src/productfilter/ProductFilter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductFilter products={PRODUCTS}/>
      </header>
    </div>
  );
}

const PRODUCTS = [
  {id: 1, price: 1000, description: 'asdasd', image: 'http://www.lider.cl/catalogo/images/whiteLineIcon.svg', brand: 'qwer'},
  {id: 1, price: 1000, description: 'asdasd', image: 'http://www.lider.cl/catalogo/images/whiteLineIcon.svg', brand: 'qwer', discountPrice: 100},
  {id: 1, price: 1000, description: 'asdasd', image: 'http://www.lider.cl/catalogo/images/whiteLineIcon.svg', brand: 'qwer'},
  {id: 1, price: 1000, description: 'asdasd', image: 'http://www.lider.cl/catalogo/images/whiteLineIcon.svg', brand: 'qwer'},
  {id: 1, price: 1000, description: 'asdasd', image: 'http://www.lider.cl/catalogo/images/whiteLineIcon.svg', brand: 'qwer'},
  {id: 1, price: 1000, description: 'asdasd', image: 'http://www.lider.cl/catalogo/images/whiteLineIcon.svg', brand: 'qwer'}
];


export default App;
