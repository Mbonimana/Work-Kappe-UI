
import ByCategory from './components/ByCategory';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
 import Login from  './components/auth/login';
 import MyAccount from './components/auth/myaccount';
 import ContactUs from './components/ContactUs';
 import Registration from './components/auth/Registration';


 function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ByCategory />} />
    
          <Route path='/MyAccount' element={< MyAccount />} />
          <Route path='/ContactUs' element={<ContactUs />} />

        </Route>
        <Route path='/Login' element={< Login/>} />
        <Route path='/Registration' element={< Registration/>} />
      

      </Routes>
    </BrowserRouter>

  
   

   )

 }

 export default App;
