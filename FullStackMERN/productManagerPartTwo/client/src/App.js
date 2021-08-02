import './App.css';
import ProductManagerForm from './components/ProductManagerForm';
import Products from './components/Products';
import {Router} from '@reach/router';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductManagerForm path="/"/>
      </Router>
        <hr/>
      <Router>
        <Products path="/"/>
        <Product path="/product/:id"/>
      </Router>
    </div>
  );
}

export default App;
