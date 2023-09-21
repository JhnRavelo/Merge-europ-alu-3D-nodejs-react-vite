
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Admin/Home/Home'
import User from '../pages/Admin/Users/User'
import Product from '../pages/Admin/Products/Product'

const prime = import.meta.env.VITE_PRIME.split(" ");

const AdminRouter = () => {
  return (
    <>
        <Routes>
            {/* <Route element={<PrivateRoutes prime={prime[0]} />}> */}
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/product" element={<Product />} />
            {/* </Route> */} 
          </Routes>
    </>
  )
}

export default AdminRouter