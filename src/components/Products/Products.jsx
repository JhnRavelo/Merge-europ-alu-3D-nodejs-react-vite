import './Product.css';
// import Button from '../Button/Button';
import pages from '../../assets/json/pages.json';
import propTypes from 'prop-types';
import ProductContext from './ProductContext';
import { useContext } from 'react';
// import Gallery from '../Gallery/Gallery';
// import SimpleParallax from 'simple-parallax-js';
// import Separation from '../Separation/Separation';
import Template from '../Template/Template';
import Habillage from '../Habillage/Habillage';
// import { useLocation } from 'react-router-dom';

const Products = () => {
  // const location = useLocation()
  const indexContext = useContext(ProductContext);
  const products = pages[indexContext].products;
  const title = pages[indexContext].title;
  const productsLenght = products.length;
  // const presRefs= useRef([]);
  // const imgRefs = useRef([]);
  // console.log(presRefs);
  // console.log(title);
  // var [i,setI] = useState(-1)
  // var [j,setJ] = useState(-1)
  // useEffect(() => {
  //   // setProducts(pages[indexContext].products)
  //   // setTitle(pages[indexContext].title)
  //   imgRefs.current = []
  //   presRefs.current = []
  //   setI(-1)
  //   setJ(-1)
  //   // setProductsLenght(products.length)
  // }, [location.pathname]);

  // const addtoRefsPres = (el) => {
  //   i = i + 1;
  //   if (el && !presRefs.current.includes(el)) {
  //     presRefs.current.push(el);
  //   }
  //   // console.log(presRefs.current[1]);
  //   if (i % 2 == !0) {
  //     presRefs.current[i].classList.add('pres2');
  //   }

  // };

  // const addtoRefsImg = (el) => {
  //   j = j + 1;
  //   if (el && !imgRefs.current.includes(el)) {
  //     imgRefs.current.push(el);
  //   }
  //   if(title!=='Habillage'){
  //     new SimpleParallax(imgRefs.current[j], {
  //       overflow: true,
  //       orientation: 'up',
  //       scale: 1.8,
  //     });
  //   }else{
  //     new SimpleParallax(imgRefs.current[j], {
  //       scale: 1.5,
  //     })
  //   }

  // };

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
