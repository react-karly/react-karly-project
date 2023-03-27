import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BaseLayout } from './components/Layout/Layout';
import Home from '@/pages/Home/Home';
import './App.module.css';
import Cart from '@/pages/Cart/Cart';
import ProductDetail from '@/pages/ProductDetail/ProductDetail';
import ProductList from '@/pages/ProductList/ProductList';
import { RecoilRoot } from 'recoil';
import Register from '@/pages/Register/Register';
import Login from '@/pages/Login/Login';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <div className="App">
          <BaseLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/product-list" element={<ProductList />} />
              <Route
                path="/product-detail/:productId"
                element={<ProductDetail />}
              />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BaseLayout>
        </div>
      </Router>
    </RecoilRoot>
  );
}
export default App;
