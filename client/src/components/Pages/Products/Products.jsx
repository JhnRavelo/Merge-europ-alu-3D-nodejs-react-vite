import './Product.css';
import pages from '../../../assets/json/pages.json';
import propTypes from 'prop-types';
import ProductContext from './ProductContext';
import { useContext, useEffect, useState } from 'react';
import Template from '../Template/Template';
import Habillage from '../Habillage/Habillage';
import { useParams } from 'react-router-dom';
import defaultAxios from '../../../api/axios';

const Products = () => {

  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const res = await defaultAxios.get(`/product/getProduct/${id}`);
      console.log(res.data);
      console.log(Object.keys(res.data).length);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
 
  console.log(id != 7);

  return (
    <>
      <section id='produit'>
        {id != 7 ? (
          <Template
            products={data}
            productsLenght={Object.keys(data).length}
            title={id}
          />
        ) : (
          <Habillage
            products={data}
            productsLenght={Object.keys(data).length}
            title={id}
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
