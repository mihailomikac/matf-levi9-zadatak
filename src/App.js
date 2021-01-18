import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin/unos-novog-proizvoda">Add product</Link>
          </li>
          <li>
            <Link to="/admin/proizvodi">Products</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/admin/unos-novog-proizvoda">
          <AddProduct />
        </Route>
        <Route path="/admin/proizvodi">
          <ProductList />
        </Route>
        
      </Switch>
    </div>
  </Router>
  );
}

export default App;
