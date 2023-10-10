import Img from "../img/img.png";
import Send from "../img/envoyer-le-message.png";
import { Field, Form, Formik } from "formik";
import { validationMessage } from "../../../lib/utils/validationSchema";
import { useLocation } from "react-router-dom";
import useButtonContext from "../../../hooks/useButtonContext";
import propTypes from "prop-types";
import defaultAxios from "../../../api/axios";

const initialValues = {
  message: "",
  file: null,
};

const Input = () => {
  const location = useLocation();
  const { commercialChat, dataPage } = useButtonContext();

  const handleSendMessage = async(values, errors) => {
    if (!errors.message && commercialChat?.ID_user) {
      try {
        const formData = new FormData();
        formData.append("text", values.message);
        if (values?.file) {
          formData.append("file", values.file);
        }
        formData.append("sender", dataPage.userRead[0].ID_user);
        if (location.pathname.includes("page")) {
          formData.append("receiver", commercialChat.ID_user);
        }
        const res = await defaultAxios.post("/message", formData);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Formik initialValues={initialValues} validationSchema={validationMessage}>
      {({ values, setFieldValue, errors }) => (
        <Form>
          <div className="input">
            <Field
              name="message"
              type="text"
              placeholder="Envoyer un message ..."
            />
            <div className="send">
              <input
                type="file"
                style={{ display: "none" }}
                id="file"
                accept="image/png, .svg, .jpeg, .jpg, .webp"
                onChange={(e) => {
                  if (e.target.files) {
                    setFieldValue("file", e.target.files[0]);
                  }
                }}
              />
              <label htmlFor="file">
                <img src={Img} alt="" />
              </label>
              <button
                type="button"
                onClick={() => {
                  handleSendMessage(values, errors);
                }}
              >
                <img src={Send} alt="" />
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

Input.propTypes = {
  sender: propTypes.array,
};

export default Input;

// import { useContext, useState } from "react";
// import Img from "../img/img.png";
// import Send from "../img/envoyer-le-message.png";
// import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";
// import {
//   Timestamp,
//   arrayUnion,
//   doc,
//   serverTimestamp,
//   updateDoc,
// } from "firebase/firestore";
// import { db, storage } from "../firebase";
// import { v4 as uuid } from "uuid";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

// const Input = () => {
//   const [text, setText] = useState("");
//   const [img, setImg] = useState(null);

//   const { currentUser } = useContext(AuthContext);
//   const { data } = useContext(ChatContext);

//   const handleSend = async () => {
//     if (img) {
//       const storageRef = ref(storage, uuid());

//       const uploadTask = uploadBytesResumable(storageRef, img);

//       uploadTask.on(
//         (error) => {
//           // setErr(true);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
//             await updateDoc(doc(db, "chats", data.chatId), {
//               messages: arrayUnion({
//                 id: uuid(),
//                 text,
//                 senderId: currentUser.uid,
//                 data: Timestamp.now(),
//                 img: downloadURL,
//               }),
//             });
//           });
//         }
//       );
//     } else {
//       await updateDoc(doc(db, "chats", data.chatId), {
//         messages: arrayUnion({
//           id: uuid(),
//           text,
//           senderId: currentUser.uid,
//           data: Timestamp.now(),
//         }),
//       });
//     }

//     await updateDoc(doc(db, "userChats", currentUser.uid), {
//       [data.chatId + ".lastMessage"]: {
//         text,
//       },
//       [data.chatId + ".date"]: serverTimestamp(),
//     });

//     await updateDoc(doc(db, "userChats", data.user.uid), {
//       [data.chatId + ".lastMessage"]: {
//         text,
//       },
//       [data.chatId + ".date"]: serverTimestamp(),
//     });

//     setText("");
//     setImg(null);
//   };

//   const handleKey = (e) => {
//     e.code === "Enter" && handleSend();
//   };

//   return (
//     <div className="input">
//       <input
//         type="text"
//         placeholder="Envoyer un message ..."
//         onChange={(e) => setText(e.target.value)}
//         value={text}
//         onKeyDown={handleKey}
//       />
//       <div className="send">
//         <input
//           type="file"
//           style={{ display: "none" }}
//           id="file"
//           onChange={(e) => setImg(e.target.files[0])}
//         />
//         <label htmlFor="file">
//           <img src={Img} alt="" />
//         </label>
//         <button onClick={handleSend}>
//           <img src={Send} alt="" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Input;
