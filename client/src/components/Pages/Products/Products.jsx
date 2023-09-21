import './Product.css';
import pages from '../../../assets/json/pages.json';
import propTypes from 'prop-types';
import ProductContext from './ProductContext';
import { useContext } from 'react';
import Template from '../Template/Template';
import Habillage from '../Habillage/Habillage';

const Products = () => {
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
