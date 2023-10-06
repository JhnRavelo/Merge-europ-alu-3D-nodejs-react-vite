import "./ProfilPage.css";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import UserProfileCard from "../../components/Profils/UserProfileCard/UserProfileCard";
import Cart from "../../components/Profils/Cart/Cart";

const ProfilPage = () => {
  const privateAxios = useAxiosPrivate();
  const [data, setData] = useState()

  useEffect(() => {
    getTraker();
  }, []);

  const getTraker = async () => {
    try {
      const res = await privateAxios.get("/traker");
      setData(res.data)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="profile__page">
        <div className="profile__box">
          <UserProfileCard data={data}/>
        </div>
        <div className="card__box">
          <Cart data={data}/>
        </div>
      </div>
    </>
  );
};

export default ProfilPage;
