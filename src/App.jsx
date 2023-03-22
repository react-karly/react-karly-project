import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BaseLayout } from './components/Layout/Layout';
import './App.module.css';
import Register from './pages/Register';
import Login from './pages/Login';
import RegisterRefactor from './pages/RegisterRefactorPage/RegisterRefactor';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <div className="App">
          <BaseLayout>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/signup1" element={<RegisterRefactor />} />
            </Routes>
          </BaseLayout>
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
