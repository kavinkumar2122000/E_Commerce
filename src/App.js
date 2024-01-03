
import './App.css';

import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCatergroy from './pages/ShopCatergroy';
import product from './pages/Product';
import Cart from './pages/Crat';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'






function App() {
  return (
    <div>
     <BrowserRouter>
     
    
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCatergroy  banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCatergroy banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCatergroy banner={kids_banner}  category="kid"/>}/>
        <Route path="/product" element={<product/>}>
        <Route path=':productId' element={<product/>}/>
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>

    
     
     
     </BrowserRouter>
    </div>
  );
}

export default App;
