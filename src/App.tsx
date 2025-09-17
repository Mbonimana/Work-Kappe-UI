
import ByCategory from './components/ByCategory';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import MyAccount from './components/auth/myaccount';
import Registration from './components/auth/Registration';
import ContactUs from './components/ContactUs';
import DashboardLayout from './components/dashboardComponents/DashboardLayout';
import AddProduct from './components/dashboardComponents/AddProduct';
import Orders from './components/dashboardComponents/Orders';
import Performance from './components/dashboardComponents/Performance';
import ClientMessages from './components/dashboardComponents/Messages';
import ProductTable from './components/dashboardComponents/Products';
import UserTable from './components/dashboardComponents/users';
import SettingsPage from './components/dashboardComponents/Settings';
import Login from  './components/auth/login';


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
        
         <Route path="/" element={<DashboardLayout />}>
        <Route path="/orders" element={<Orders />} />
        <Route path="/dashboard" element={<Performance />} />
         <Route path="messages" element={<ClientMessages />} /> 
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="products" element={<ProductTable />} />
        <Route path="users" element={<UserTable />} />
       <Route path="adminsettings" element={<SettingsPage />} />
        
        
        </Route>

           


      

        
      

      </Routes>
    </BrowserRouter>

  
   

   )

 }

 export default App;
