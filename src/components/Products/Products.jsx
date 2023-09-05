import './Product.css';
import Button from '../Button/Button';
// import HeaderProduct from "../HeaderProduct/HeaderProduct"
import pages from '../../assets/json/pages.json';
import propTypes from 'prop-types';
import ProductContext from './ProductContext';
import { Fragment, createRef, useContext, useRef } from 'react';
// import simpleParallax from 'simple-parallax-js'
import Gallery from '../Gallery/Gallery';

const Products = () => {
  const indexContext = useContext(ProductContext);
  const product = pages[indexContext].products;
  let presRef = useRef([]);
  presRef.current = product.map(
    (ref, index) => (presRef.current[index] = createRef())
  );
  //   console.log(product);
  return (
    <>
      <section>
        <div className='container'>
          <div className='row'>
            {product.map((product, index) => {
              if (index % 2 ==! 0) {
                presRef[index].current.classList.add('pres2')
              }
              return (
                <Fragment key={index}>
                  <div className='fenetre__coulissante'>
                    <div ref={presRef[index]} className='presentation'>
                      <div className='img__pres'>
                        <img
                          className='float_right'
                          src={product.png}
                          alt={product.title}
                        />
                      </div>
                      <div className='desc'>
                        <div className='button_intrested_start'>
                          <h1 className='title'>{product.title}</h1>
                          <p className='short__desc'>
                            Lorem, ipsum. Quam, sit obcaecati corrupti
                            accusamusui suscipit morum quis. Incidunt aliquid
                            maiores soluta mollitia eveniet?
                          </p>

                          <Button />
                        </div>
                      </div>
                    </div>
                    <Gallery indexCategory={index} />
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

Products.propTypes = {
  index: propTypes.number,
};
export default Products;
