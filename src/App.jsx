import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BaseLayout } from './components/Layout/Layout';
import './App.module.css';

function App() {
  return (
    <Router>
      <div className="App">
        <BaseLayout>
          <Routes>
            {/* <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Login />} />
            <Route path="/signin" element={<Register />} /> */}
          </Routes>
        </BaseLayout>
      </div>
    </Router>
  );
}

export default App;
