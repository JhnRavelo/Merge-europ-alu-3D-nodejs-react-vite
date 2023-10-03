
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Admin/Home/Home'
import Product from '../pages/Admin/Products/Product'
import Users from '../pages/Admin/Users/Users';
import Pages from '../pages/Admin/Pages/Pages';
import Orders from '../pages/Admin/Orders/Orders';
import Commercials from '../pages/Admin/Commercials/Commercials';
import PrivateRoutes from '../components/Private/PrivateRoutes';

const prime = import.meta.env.VITE_PRIME.split(" ");

const AdminRouter = () => {
  return (
    <>
        <Routes>
            <Route element={<PrivateRoutes prime={prime[0]} />}>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<Users />} />
            <Route path="/product" element={<Product />} />
            <Route path='/page' element={<Pages/> }/>
            <Route path='/order' element={<Orders/>}/>
            <Route path='/commercial' element={<Commercials/>}/>
            </Route> 
          </Routes>
    </>
  )
}

export default AdminRouter