
import ByCategory from './components/ByCategory';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import BestSales from './components/BestSales';
import BannerAd from './components/BannerAd';
 import HotDeals from './components/HotDeals';
 import FeaturedProducts from './components/FeaturedProducts';
 import Login from  './components/auth/login';
 import MyAccount from './components/auth/myaccount';


 function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ByCategory />} />
          <Route path='/HotDeals' element={<HotDeals />} />
          <Route path='/FeaturedProducts' element={<FeaturedProducts />} />
          <Route path='/BannerAd' element={<BannerAd />} />
          <Route path='/auth/MyAccount' element={< MyAccount />} />
          
          
          

          
          
          

        </Route>

      </Routes>
    </BrowserRouter>

  
   

   )

 }

 export default App;
