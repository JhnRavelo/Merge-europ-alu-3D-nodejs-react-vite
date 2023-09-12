import './Gallery.css';
import pages from '../../assets/json/pages.json';
import ProductContext from '../Products/ProductContext';
import { useContext, useEffect, useRef } from 'react';
import propTypes from 'prop-types';

const Gallery = ({ indexCategory }) => {
  const galleryRef = useRef();
  const indexContext = useContext(ProductContext);
  var images = pages[indexContext].products[indexCategory].gallery;
  const title = pages[indexContext].title;
  // console.log(images);
  useEffect(() => {
    if (title == 'Habillage') {
      galleryRef.current.classList.add('container');
    }
  },[title]);

  return (
    <>
      <div className='gallery' ref={galleryRef}>
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
