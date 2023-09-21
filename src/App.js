import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './customer/pages/HomePage/HomePage';
import ProductPage from './customer/pages/ProductPage/ProductPage';
import SignInPage from './customer/pages/SignInPage/SignInPage';
import CreateAccountPage from './customer/pages/CreateAccountPage/CreateAccountPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="products" element={<ProductPage/>}/>
          <Route path="signin" element={<SignInPage/>}/>
          <Route path="create-account" element={<CreateAccountPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
