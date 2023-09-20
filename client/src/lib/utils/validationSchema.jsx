import * as Yup from "yup";
import axios from "axios";

const phoneRegEx =
  /^((\+\d{1,3}(-|)?\(?\d\)?(-|)?\d{1,3})|(\(?\d{2,3}\)?))(-|)?(\d{3,4})(-|)?(\d{4})((x|ext)\d{1,5}){0,1}$/;

const validate = Yup.object({
  name: Yup.string()
    .required("Vous devez mettre votre nom")
    .matches(/^[A-Za-z]+$/, "Votre doit seulement contenir des lettres"),
  email: Yup.string()
    .required("Vous devez mettre votre adresse email")
    .email(`l'adresse email est invalide`)
    .test({
      message: () => `L'utilisateur existe déjà`,
      test: async function (value) {
        // const body = JSON.stringify(value);
        const res = await axios.post("http://127.0.0.1:5000/auth", {
          email: value,
        });
        // addUser({ email: value });
        if (res.data == `L'utilisateur existe déjà`) {
          return false;
        } else {
          return true;
        }
      },
    }),
  password: Yup.string()
    .min(8, "Le mot de passe doit avoir au moins 8 caractères")
    .matches(
      /[A-Z]/,
      "Le mot de passe doit contenir au moins une lettre majuscule"
    )
    .matches(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
    .required("Le mot de passe est requis"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Le mot de passe doit être le même")
    .required("Le mot de passe doit être confirmer"),
  phone: Yup.string()
    .matches(phoneRegEx, "Numéro de téléphone invalide")
    .required("Le numéro de téléphone est requis"),
  checked: Yup.array()
    .of(Yup.string())
    .min(1, "Vous devez selectionner au moins un produit"),
  checkbox: Yup.boolean()
    .oneOf([true], "Veillez accepter la création de compte")
    .required("Veillez accepter la création de compte"),
  loginMail: Yup.string()
    .required("Vous devez mettre votre adresse email")
    .email(`l'adresse email est invalide`),

  loginPassword: Yup.string()
    .min(8, "Le mot de passe doit avoir au moins 8 caractères")
    .matches(
      /[A-Z]/,
      "Le mot de passe doit contenir au moins une lettre majuscule"
    )
    .matches(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
    .required("Le mot de passe est requis")
    .test({
      message: () => `Connexion invalide`,
      test: async function (value) {
        const res = await axios.post("http://127.0.0.1:5000/auth/login", {
          loginPassword: value,
          loginMail: this.parent.loginMail,
        });
        if (res.data == `Connexion invalide`) {
          return false;
        } else {
          return true;
        }
        // console.log(value);
        // console.log(this.parent.loginPassword);
      },
    }),
});

export { validate };
