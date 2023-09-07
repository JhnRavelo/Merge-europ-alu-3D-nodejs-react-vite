import { Fragment } from 'react';
import Button from '../Button/Button';
import Gallery from '../Gallery/Gallery';
import Separation from '../Separation/Separation';
import propTypes from 'prop-types';
import { useEffect, useRef } from 'react';
// import Gallery from '../Gallery/Gallery';
import SimpleParallax from 'simple-parallax-js';

const Template = ({ products, productsLenght, title }) => {
  const presRefs = useRef([]);
  const imgRefs = useRef([]);
  // var i = useRef();
  // var j = useRef();
  useEffect(() => {
    imgRefs.current = [];
    presRefs.current = [];
    // i.current = -1;
    // j.current = -1;
  }, []);
  // const addtoRefsPres = (el) => {
  //   if (el && !presRefs.current.includes(el)) {
  //     presRefs.current.push(el);
  //     i.current = i.current + 1;
  //   }
  //   console.log(presRefs.current[i.current]);
  //   if (i.current % 2 == !0 && presRefs.current[i.current]) {
  //     presRefs.current[i.current].classList.add('pres2');
  //   }
  // };

  // const addtoRefsImg = (el) => {
  //   if (el && !imgRefs.current.includes(el)) {
  //     imgRefs.current.push(el);
  //     j.current = j.current + 1;
  //   }
  //   console.log(imgRefs.current[j.current]);
  //   if (title !== 'Habillage' && imgRefs.current[j.current]) {
  //     new SimpleParallax(imgRefs.current[j.current], {
  //       overflow: true,
  //       orientation: 'up',
  //       scale: 1.8,
  //     });
  //   } else if (title == 'Habillage' && imgRefs.current[j.current]) {
  //     new SimpleParallax(imgRefs.current[j.current], {
  //       scale: 1.5,
  //     });
  //   }
  // };
  return (
    <div className='container'>
      <div className='row'>
        {products.map((product, index) => {
          const addtoRefsPres = (el) => {
            if (el && !presRefs.current.includes(el)) {
              presRefs.current.push(el);
            }
            // console.log(presRefs.current[index]);
            if (index % 2 == !0 && presRefs.current[index]) {
              presRefs.current[index].classList.add('pres2');
            }
          };
          const addtoRefsImg = (el) => {
            if (el && !imgRefs.current.includes(el)) {
              imgRefs.current.push(el);
              
            }
            console.log(imgRefs.current[index]);
            if (title !== 'Habillage' && imgRefs.current[index]) {
              new SimpleParallax(imgRefs.current[index], {
                overflow: true,
                orientation: 'up',
                scale: 1.8,
              });
            } else if (title == 'Habillage' && imgRefs.current[index]) {
              new SimpleParallax(imgRefs.current[index], {
                scale: 1.5,
              });
            }
          };
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
                        Lorem, ipsum. Quam, sit obcaecati corrupti accusamusui
                        suscipit morum quis. Incidunt aliquid maiores soluta
                        mollitia eveniet?
                      </p>

                      <Button />
                    </div>
                  </div>
                </div>
                <Gallery indexCategory={index} />
              </div>
              {productsLenght > index + 1 && <Separation />}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

Template.propTypes = {
  products: propTypes.array,
  // addtoRefsImg: propTypes.func,
  // addtoRefsPres: propTypes.func,
  productsLenght: propTypes.number,
  title: propTypes.string,
};

export default Template;
