import axios from 'axios';

export const addTraker = async (body) => {
  return new Promise((onSucces, onFail) => {
    axios
      .post('http://127.0.0.1:5000/traker', body)
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