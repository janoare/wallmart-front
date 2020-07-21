import React from 'react';
import './App.css';
import ProductFilter from '../src/productfilter/ProductFilter'

let BASE_URL;
if (process.env.BACKEND_HOST) 
  BASE_URL = process.env.BACKEND_HOST;
else 
  BASE_URL = 'http://localhost:8080';

console.log(BASE_URL);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductFilter products={PRODUCTS} base_url={BASE_URL}/>
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
