import './Product.css';
import Button from '../Button/Button';
import pages from '../../assets/json/pages.json';
import propTypes from 'prop-types';
import ProductContext from './ProductContext';
import { Fragment, useContext, useRef } from 'react';
import Gallery from '../Gallery/Gallery';
import SimpleParallax from 'simple-parallax-js';
// import Separation from '../Separation/Separation';
import Template from '../Template/Template';
import Habillage from '../Habillage/Habillage';

const Products = () => {
  const indexContext = useContext(ProductContext);
  const products = pages[indexContext].products;
  const title = pages[indexContext].title;
  let presRefs = useRef([]);
  presRefs.current = [];
  let imgRefs = useRef([]);
  imgRefs.current = [];
  console.log(title);
  var i = -1,
    j = -1;

  const addtoRefsPres = (el) => {
    i = i + 1;
    if (el && !presRefs.current.includes(el)) {
      presRefs.current.push(el);
    }
    if (i % 2 == !0) {
      presRefs.current[i].classList.add('pres2');
    }
  };

  const addtoRefsImg = (el) => {
    j = j + 1;
    if (el && !imgRefs.current.includes(el)) {
      imgRefs.current.push(el);
    }
    new SimpleParallax(imgRefs.current[j], {
      overflow: true,
      orientation: 'up',
      scale: 1.8,
    });
  };

  const productsLenght = products.length;
  return (
    <>
      <section id='produit'>
        {title !== 'Habillage' ? (
          <Template
            products={products}
            addtoRefsImg={addtoRefsImg}
            addtoRefsPres={addtoRefsPres}
            productsLenght={productsLenght}
          />
        ) : (
          <Habillage
            products={products}
            addtoRefsImg={addtoRefsImg}
            addtoRefsPres={addtoRefsPres}
            productsLenght={productsLenght}
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
