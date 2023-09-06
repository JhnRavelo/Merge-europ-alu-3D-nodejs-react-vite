import './Product.css';
import Button from '../Button/Button';
import pages from '../../assets/json/pages.json';
import propTypes from 'prop-types';
import ProductContext from './ProductContext';
import { Fragment, useContext, useRef } from 'react';
import Gallery from '../Gallery/Gallery';
import SimpleParallax from 'simple-parallax-js';

const Products = () => {
  const indexContext = useContext(ProductContext);
  const product = pages[indexContext].products;

  let presRefs = useRef([]);
  presRefs.current = [];
  let imgRefs = useRef([]);
  imgRefs.current = [];

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
    console.log(j);
    console.log(imgRefs.current[j]);
    new SimpleParallax(imgRefs.current[j], {
      overflow: true,
      orientation: 'up',
      scale: 1.8,
    });
  };

  //   console.log(product);
  return (
    <>
      <section>
        <div className='container'>
          <div className='row'>
            {product.map((product, index) => {
              return (
                <Fragment key={index}>
                  <div className='fenetre__coulissante'>
                    <div ref={addtoRefsPres} className='presentation'>
                      <div className='img__pres'>
                        <img
                          ref={addtoRefsImg}
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
