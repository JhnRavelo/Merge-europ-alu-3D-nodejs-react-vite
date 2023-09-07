import { useLocation } from 'react-router-dom';
import ProductContext from '../Products/ProductContext'
import Home from '../Home/Home'
import Products from '../Products/Products'
import HeaderProduct from '../HeaderProduct/HeaderProduct'
import { useEffect } from 'react';
import { useState } from 'react';

const Page = () => {
  const location = useLocation();
  const handleIndex = ()=>{
    var index
    if(location.pathname =='/page/habillage'){
      index = 1
    }else if(location.pathname =='/page/fenetre'){
      index = 0
    }
    return index
  }
 const [index, setInddex] = useState(()=>{
  return handleIndex()
 })

useEffect(()=>{
  if(location.pathname =='/page/habillage'){
    setInddex(1)
  }else if(location.pathname =='/page/fenetre'){
    setInddex(0)
  }
},[location])
// const StateIndex = ()=>{
  
// }
  
  return (
    <ProductContext.Provider value={index}>
      <Home />
      <HeaderProduct />
      <Products />
    </ProductContext.Provider>
  );
};

export default Page;
