import propTypes from "prop-types";
import pages from "../../../assets/json/pages.json";
import "./Home.css";
import { useContext, useEffect, useState } from "react";
import ProductContext from "../Products/ProductContext";
import { useLocation, useParams } from "react-router-dom";
import defaultAxios from "../../../api/axios";

const Home = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const res = await defaultAxios.get(`/page/getPage/${id}`);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(id);
  // const homeFilter = home.dataPage.filter((page) => page.ID_page == id);
  // console.log(homeFilter);
  return (
    <>
      <section id="home" style={{ backgroundImage: `url(${data.home})` }}>
        <div className="overlay"></div>
        <div className="demi-overlay"></div>
        <div className="gradient-overlay"></div>

        <div className="home-content-table">
          <div className="home-content-tablecell">
            <div className="row">
              <div className="col-twelve">
                <h3 className="animate-intro">{data.page}</h3>
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
  index: propTypes.number,
};

export default Home;
