import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './customer/pages/HomePage/HomePage';
import ProductPage from './customer/pages/ProductPage/ProductPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="products" element={<ProductPage/>}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
