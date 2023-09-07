import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { UserContext } from './contexts/UserContext';
import UserAuth from './routes/UserAuth';
import AdminAuth from './routes/AdminAuth';


import AddItem from './pages/FormSample/AddItem';
import AdminLayout from './pages/Layouts/AdminLayout';

import HomePage from './pages/Home/Home-page';
import SigninPage from './pages/Authentication/SigninPage';
import SignupPage from './pages/Authentication/SignupPage';

// store
import ProductCatalog from './pages/Store/ProductCatalog';
import Product from './pages/Store/Product';
import Success from './pages/Store/Success';
import Cart from './pages/Store/Cart';
import Wishlist from './pages/Store/Wishlist';

// product management
import AddProduct from './pages/Product/AddProduct';
import ManageProducts from './pages/Product/ManageProducts';
import EditProduct from './pages/Product/EditProduct';
import ViewProduct from './pages/Product/ViewProduct';
import ManageOrders from './pages/Product/ManageOrders';
import ViewOrder from './pages/Product/ViewOrder';
import Insights from './pages/Product/Insights';

// delivery management
import AddDriver from "./pages/Delivery/RegisterDriver/RegisterDriver";
import ManageDriver from "./pages/Delivery/ManageDriver/ManageDriver";
import ViewDeliveryOrder from "./pages/Delivery/ViewOrder/ViewOrder";
import UpdateDriver from "./pages/Delivery/updateDriver/update-driver";
import UpdateOrder from "./pages/Delivery/UpdatePendingOrder/UpdateOrder";
import ProcessingOrder from "./pages/Delivery/ProcessingOrder/ProcessingOrder";
import CompletedOrder from "./pages/Delivery/CompletedOrder/CompletedOrder";

// inventory management
import OverviewPage from "./pages/Inventory/overview-page/overview";
import AddItemPage from "./pages/Inventory/add-item-page/AddItem";
import ManageInventoryPage from "./pages/Inventory/manage-inventory-page/manage-inventory";
import SupplierRegForm from "./pages/Inventory/register-supplier-page/supplier-register";
import UpdateItem from "./pages/Inventory/update-inventory-page/update-inventory";
import ViewInventoryItem from "./pages/Inventory/view-item-details-page/view-items";
import ManageSupplierWindow from "./pages/Inventory/manage-supplier/manage-supplier";
import ReleasedItems from './pages/Inventory/released-items/ReleasedItems';
import ReleaseItems from "./pages/Inventory/release-items-page/test-comp";
import ReleaseSearch from './pages/Inventory/release-search/ReleaseSearch';
import ViewSupplierDetails from './pages/Inventory/view-supplier/view-supplier';
import UpdateSupplierDetails from './pages/Inventory/update-supplier-page/update-supplier';
import RopCalculator from './pages/Inventory/rop-calculator/RopCalc';



// user
import UserLayout from './pages/Layouts/UserLayout';
import MyOrders from './pages/Store/MyOrders';
import MyProfile from './pages/Profile/MyProfile';

// error page
import Error from './pages/Error/Error';


function App() {

  const {user} = useContext(UserContext)

  return (
    <Router>
      <Toaster />
      
      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/signin" element={<SigninPage/>} />
        <Route path="/signup" element={<SignupPage/>} />

        {/* store routes */}
        <Route path='/store' element={<ProductCatalog />} />
        <Route path='/store/:id' element={<Product />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />


        {/* ADMIN ROUTES */}
        {/* <Route element={<AdminAuth />} > */}

          {/* product routes */}
          <Route path='/admin/products/manageProducts' element={< ManageProducts />} />
          <Route path='/admin/products/addProduct' element={<AddProduct />} />
          <Route path='/admin/products/editProduct/:id' element={<EditProduct />} />
          <Route path='/admin/products/viewProduct/:id' element={<ViewProduct />} />
          <Route path='/admin/products/manageOrders' element={<ManageOrders />} />
          <Route path='/admin/products/viewOrder/:id' element={<ViewOrder />} />
          <Route path='/admin/products/insights' element={<Insights />} />


          {/* delivery routes */}
          <Route path="/admin/delivery/add-driver" element={<AddDriver />} />
          <Route path="/admin/delivery/manage-driver" element={<ManageDriver />} />
          <Route path="/admin/delivery/view-order" element={<ViewDeliveryOrder />} />
          <Route path="/admin/delivery/update-driver" element={<UpdateDriver/>}/> 
          <Route path="/admin/delivery/update-order" element={<UpdateOrder/>}/> 
          <Route path="/admin/delivery/processing-order" element={<ProcessingOrder/>}/>
          <Route path="/admin/delivery/completed-order" element={<CompletedOrder/>}/>
          

          {/* inventory routes */}
          <Route path="/admin/inventory/overview" element={<OverviewPage />} />
          <Route path="/admin/inventory/add-item" element={<AddItemPage />} />
          <Route path="/admin/inventory/manage-inventory" element={<ManageInventoryPage />}/>
          <Route path="/admin/inventory/supplier-registration" element={<SupplierRegForm />}/>
          <Route path="/admin/inventory/update-item" element={<UpdateItem />} />
          <Route path="/admin/inventory/view-item" element={<ViewInventoryItem />}/>
          <Route path="/admin/inventory/manage-suppliers" element={<ManageSupplierWindow />}/>
          <Route path="/admin/inventory/released-list" element={<ReleasedItems/>} />
          <Route path="/admin/inventory/release-items" element={<ReleaseItems/>} />
          <Route path="/admin/inventory/release-search" element={<ReleaseSearch/>} />
          <Route path="/admin/supplier/view-supplier-details" element={<ViewSupplierDetails/>} />
          <Route path="/admin/supplier/update-supplier-details" element={<UpdateSupplierDetails/>} />
          <Route path="/admin/inventory/rop-calculator" element={<RopCalculator/>} />


        {/* </Route> */}


        {/* USER ROUTES */}
        <Route element={<UserAuth />}>
          <Route path='/user' element={<UserLayout />} />
          <Route path='/account/myOrders' element={<MyOrders />} />
          <Route path='/account/profile' element={<MyProfile />} />
        </Route>

        
        {/* CATCH ALL */}
        <Route path='*' element={<Error />} />

      </Routes>
    </Router>
  )
}

export default App;