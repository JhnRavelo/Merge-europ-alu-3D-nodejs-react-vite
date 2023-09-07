import './Product.css';
// import Button from '../Button/Button';
import pages from '../../assets/json/pages.json';
import propTypes from 'prop-types';
import ProductContext from './ProductContext';
import { useContext } from 'react';
// import Gallery from '../Gallery/Gallery';
// import SimpleParallax from 'simple-parallax-js';
// import Separation from '../Separation/Separation';
import Template from '../Template/Template';
import Habillage from '../Habillage/Habillage';
// import { useLocation } from 'react-router-dom';

const Products = () => {
  // const location = useLocation()
  const indexContext = useContext(ProductContext);
  const products = pages[indexContext].products;
  const title = pages[indexContext].title;
  const productsLenght = products.length;

  return (
    <>
      <section id='produit'>
        {title !== 'Habillage' ? (
          <Template
            products={products}
            productsLenght={productsLenght}
            title={title}
          />
        ) : (
          <Habillage
            products={products}
            productsLenght={productsLenght}
            title={title}
          />
        )}
      </section>
    </>
  );
};

Products.propTypes = {
  index: propTypes.number,
};
export default Products;
