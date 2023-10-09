import './Habillage.css';
import { Fragment } from 'react';
import Button from '../Button/Button';
import Gallery from '../Gallery/Gallery';
import propTypes from 'prop-types';
import Separation from '../Separation/Separation';
import { useEffect, useRef } from 'react';
import SimpleParallax from 'simple-parallax-js';

const Habillage = ({ products, productslenght, title }) => {
  const presRefs = useRef([]);
  const imgRefs = useRef([]);
  useEffect(() => {
    imgRefs.current = [];
    presRefs.current = [];
  }, []);

  return (
    <>
      <div className='panneau_composite'>
        {products.map((product, index) => {
          const addtoRefsPres = (el) => {
            if (el && !presRefs.current.includes(el)) {
              presRefs.current.push(el);
            }
            // console.log(presRefs.current[index]);
            if (index % 2 !== 0 && presRefs.current[index]) {
              presRefs.current[index].classList.add('pres2');
            }
          };
          const addtoRefsImg = (el) => {
            if (el && !imgRefs.current.includes(el)) {
              imgRefs.current.push(el);
            }
            
            if (title !== 7 && imgRefs.current[index]) {
              console.log(imgRefs.current[index].className)
              new SimpleParallax(imgRefs.current[index], {
                overflow: true,
                orientation: 'up',
                scale: 1.8,
              });
            } else if (
              title == 7 &&
              imgRefs.current[index] &&
              imgRefs.current[index].className !==
                'image_parallaxe simple-parallax-initialized'
            ) {
              new SimpleParallax(imgRefs.current[index], {
                scale: 1.5,
              });
            }
          };
          return (
            <Fragment key={index}>
              <div ref={addtoRefsPres} className='Habillage_presenatation'>
                <div className='pres'>
                  <img
                    ref={addtoRefsImg}
                    className='image_parallaxe'
                    src={product.png}
                    alt={product.title}
                  />
                </div>
                <div className='description'>
                  <div className='desc_box'>
                    <div className='button_intrested_start'>
                      <h1 className='title'>{product.title}</h1>
                      <p className='short__desc'>
                        Lorem, ipsum. Quam, sit obcaecati corrupti accusamusui
                        suscipit morum quis. Incidunt aliquid maiores soluta
                        mollitia eveniet?
                      </p>
                      <Button />
                    </div>
                  </div>
                </div>
              </div>
              <div className='separation'>
                <div className='grid-overlay'>
                  <div></div>
                </div>
              </div>
              <Gallery gallery={product.gallery.split(",")} indexCategory={index} />
              {productslenght > index + 1 && <Separation />}
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

Habillage.propTypes = {
  products: propTypes.array,
  title: propTypes.string,
  productslenght: propTypes.number,
};

export default Habillage;
