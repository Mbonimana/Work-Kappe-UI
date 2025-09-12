
import ByCategory from './components/ByCategory';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import BestSales from './components/BestSales';
import BannerAd from './components/BannerAd';
 import HotDeals from './components/HotDeals';
 import FeaturedProducts from './components/FeaturedProducts';
 import Login from  './components/auth/login';
 import MyAccount from './components/auth/myaccount';
 import ContactUs from './components/ContactUs';
 import RegstratioForm from './components/auth/Registration';


 function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ByCategory />} />
    
          <Route path='/auth/MyAccount' element={< MyAccount />} />
          <Route path='/components/ContactUs' element={<ContactUs />} />
          
    

        </Route>

        <Route path="/Login"  element={<Login />} /> 
        <Route path="/Components/auth/login"  element={<Login />} /> 

      </Routes>
    </BrowserRouter>

  
   

   )

 }

 export default App;
