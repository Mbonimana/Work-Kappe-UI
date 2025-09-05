
import ByCategory from './components/ByCategory';

import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import BestSales from './components/BestSales';
import BannerAd from './components/BannerAd';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ByCategory />} />
          <Route path='/byCategory' element={<ByCategory />} />
          
          

        </Route>

      </Routes>
    </BrowserRouter>
   

  )





}

export default App;
