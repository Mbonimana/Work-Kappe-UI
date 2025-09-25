import ByCategory from './components/ByCategory';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import MyAccount from './components/auth/myaccount';
import ScrollToTop from './components/ScrolltoTop';
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
import Login from './components/auth/login';
import Project from './components/project';
import ViewTableData from './components/ViewTableData';
import ProductView from './components/ProductView';

import Checkout from './components/checkout';
// ✅ Import CartProvider
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* ✅ Wrap everything with CartProvider */}
      <CartProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<ByCategory />} />
            <Route path='/MyAccount' element={<MyAccount />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/project' element={<Project />} />
            <Route path="/singleView/:id" element={<ViewTableData />} />
            <Route path="/ProductView/:id" element={<ProductView />} />
           
            <Route path="checkout" element={<Checkout />} />
          </Route>

          <Route path='/Login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />

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
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;
