import { Fragment } from 'react';
import Button from '../Button/Button';
import Gallery from '../Gallery/Gallery';
import Separation from '../Separation/Separation';
import propTypes from 'prop-types';

const Template = ({
  products,
  addtoRefsImg,
  addtoRefsPres,
  productsLenght,
}) => {
  return (
    <div className='container'>
      <div className='row'>
        {products.map((product, index) => {
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
  addtoRefsImg: propTypes.func,
  addtoRefsPres: propTypes.func,
  productsLenght: propTypes.number
}

export default Template;
