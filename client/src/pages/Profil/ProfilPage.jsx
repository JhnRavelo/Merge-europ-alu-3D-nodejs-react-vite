import "./ProfilPage.css";
import { useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import UserProfileCard from "../../components/Profils/UserProfileCard/UserProfileCard";
import Cart from "../../components/Profils/Cart/Cart";

const ProfilPage = () => {
  const privateAxios = useAxiosPrivate();

  useEffect(() => {
    getTraker();
  }, []);

  const getTraker = async () => {
    try {
      const res = await privateAxios.get("/traker");

      console.log(res.data[0].page);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="profile__page">
        <div className="profile__box">
          <UserProfileCard />
        </div>
        <div className="card__box">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default ProfilPage;
