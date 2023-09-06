import './Habillage.css'
import { Fragment } from 'react';
import Button from '../Button/Button';
import Gallery from '../Gallery/Gallery';
import propTypes from 'prop-types';
import Separation from '../Separation/Separation';

const Habillage = ({
  products,
  addtoRefsImg,
  addtoRefsPres,
  productsLenght,
}) => {
  return (
    <>
      <div className='panneau_composite'>
        {products.map((product, index) => {
          return (
            <Fragment key={index}>
              <div ref={addtoRefsPres} className='Habillage_presenatation'>
                <div className='pres'>
                  <img
                  ref={addtoRefsImg}
                    className='image_parallaxe '
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
              <Gallery indexCategory={index}/>
              {productsLenght > index + 1 && <Separation/>}
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

Habillage.propTypes = {
  products: propTypes.array,
  addtoRefsImg: propTypes.func,
  addtoRefsPres: propTypes.func,
  productsLenght: propTypes.number,
};

export default Habillage;
