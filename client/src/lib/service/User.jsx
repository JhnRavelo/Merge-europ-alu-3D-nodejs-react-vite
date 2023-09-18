import defaultAxios from "../../api/axios";

export const addUser = async (body) => {
  return new Promise((onSucces, onFail) => {
    defaultAxios
      .post('/auth', body)
      .then((response) => {
        if (!response) {
          onFail(`Probleme de connexion au serveur`);
        } else {
          onSucces(response.data);
        }
      })
      .catch((error) => {
        if (error) {
          onFail(`Probleme de connexion au serveur`);
        }
      });
  });
};

export const getUser = async () => {
  return new Promise((onSucces, onFail) => {
    defaultAxios
      .get(`/auth`)
      .then((response) => {
        if (!response) {
          onFail(`Probleme de connexion au serveur`);
        } else {
          onSucces(response.data);
        }
      })
      .catch((error) => {
        if (error) {
          onFail(`Probleme de connexion au serveur`);
        }
      });
  });
};
