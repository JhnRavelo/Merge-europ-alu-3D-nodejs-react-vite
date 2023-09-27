
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Admin/Home/Home'
import Product from '../pages/Admin/Products/Product'
import Users from '../pages/Admin/Users/Users';
import Pages from '../pages/Admin/Pages/Pages';

const prime = import.meta.env.VITE_PRIME.split(" ");

const AdminRouter = () => {
  return (
    <>
        <Routes>
            {/* <Route element={<PrivateRoutes prime={prime[0]} />}> */}
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<Users />} />
            <Route path="/product" element={<Product />} />
            <Route path='/page' element={<Pages/> }/>
            {/* </Route> */} 
          </Routes>
    </>
  )
}

export default AdminRouter