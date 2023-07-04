import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {



  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product' element={<Product />} />
          <Route path='*' element={<p>Error 404: Page not found</p>} />
        </Routes>
      </Router >
    </>
  );
}

export default App;
