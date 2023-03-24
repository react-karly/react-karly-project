import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BaseLayout } from './components/Layout/Layout';
import Home from './pages/Home';
import './App.module.css';


function App() {

  return (
    <Router>
      <div className="App">
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/mainpopup" element={ <MainPopup />} /> */}
           
            {/* 
            <Route path="/signup" element={<Login />} />
            <Route path="/signin" element={<Register />} /> */}
          </Routes>
        </BaseLayout>
      </div>
    </Router>
  );
}

export default App;
