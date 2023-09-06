import './Gallery.css';
import pages from '../../assets/json/pages.json';
import ProductContext from '../Products/ProductContext';
import { useContext } from 'react';
import propTypes from 'prop-types';

const Gallery = ({ indexCategory }) => {
  const indexContext = useContext(ProductContext);
  var images = pages[indexContext].products[indexCategory].gallery;
  // console.log(images);
  return (
    <>
      <div className='gallery'>
        <section id='portfolio'>
          <div className='row portfolio-content'>
            <div id='folio-wrap' className='bricks-wrapper'>
              {images.map((url, index) => {
                return (
                  <div key={index} className='brick folio-item'>
                    <a data-fancybox={`gallery${indexCategory}`} href={url}>
                      <img src={url} alt='gallery' />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Gallery.propTypes = {
  indexCategory: propTypes.number,
};

export default Gallery;
