import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductContext from '../../components/Pages/Products/ProductContext';
import Home from '../../components/Pages/Home/Home';
import Products from '../../components/Pages/Products/Products';
import HeaderProduct from '../../components/Pages/HeaderProduct/HeaderProduct';

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
  
  return (
    <ProductContext.Provider value={index}>
      <Home />
      <HeaderProduct />
      <Products />
    </ProductContext.Provider>
  );
};

export default Page;
