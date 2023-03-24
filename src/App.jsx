import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BaseLayout } from './components/Layout/Layout';
import Home from './pages/Home';
import './App.module.css';
import Cart from '@/pages/Cart/Cart';
import ProductDetail from '@/pages/ProductDetail/ProductDetail';
import ProductList from '@/pages/ProductList/ProductList';
import { RecoilRoot } from 'recoil';


function App() {

  return (
    <RecoilRoot>
      <Router>
        <div className="App">
          <BaseLayout>
            <Routes>
              <Route path="/home" element={<Home />} />
              {/* <Route path="/signup" element={<Login />} /> */}
              {/* <Route path="/login" element={<Register />} /> */}
              {/* 로그인 회원가입 텍스트 스타일 테스트  */}
              {/* <Route path="/signup" element={<Cart />} /> */}
              {/* <Route path="/login" element={<Cart />} /> */}
              <Route path="/product-list" element={<ProductList />} />
              <Route path="/product-detail" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BaseLayout>
        </div>
      </Router>
    </RecoilRoot>
// import { MainPopup } from './components/Popup/MainPopup';
  )
}
export default App;
