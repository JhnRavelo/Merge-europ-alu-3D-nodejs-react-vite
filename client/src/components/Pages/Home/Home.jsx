import propTypes from 'prop-types'
import pages from "../../../assets/json/pages.json";
import './Home.css'
import { useContext } from 'react';
import ProductContext from '../Products/ProductContext';

const Home = () => {
  var index = useContext(ProductContext)
    const products = pages[index].home
    // console.log(products);
    console.log(index)
  return (
    <>
      
          <section id="home" key={index} style={{backgroundImage:`url(${products.src})`}}>
            <div className="overlay"></div>
            <div className="demi-overlay"></div>
            <div className="gradient-overlay"></div>

            <div className="home-content-table">
              <div className="home-content-tablecell">
                <div className="row">
                  <div className="col-twelve">
                    <h3 className="animate-intro">{products.title}</h3>
                    <h1 className="animate-intro">
                      Architecture Moderne <br />
                      et Innovante
                    </h1>

                    <div className="more animate-intro">
                      <a className="smoothscroll button stroke" href="#produit">
                        Nos produits
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="scrolldown">
              <a href="#produit" className="scroll-icon smoothscroll">
                Scroll Down
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </section>
      
    </>
  );
};

Home.propTypes = {
  index : propTypes.number
}

export default Home;
