import { useState } from "react";
import SearchIcon from "../img/loupe-arrondie.png";
import useButtonContext from "../../../hooks/useButtonContext";

const Search = () => {
  const [username, setUsername] = useState();
  const { commercials, setCommercials, search, setSearch } = useButtonContext();

  // const handleKey = (e) => {
  //   e.code === "Enter" && handleSearch();
  // };

  // const handleSearch = () => {
  //   console.log("Search");
  //   const filteredItems = commercials.filter((item) => {
  //     console.log(item);
  //     return item.name.toLowerCase().includes(username.toLowerCase());
  //   });
  //   setCommercials(filteredItems);
  // };

  return (
    <div className="search">
      <div className="searchForm">
        <div className="input">
          <input
            type="text"
            placeholder="Rechercher client"
            // onKeyDown={handleKey}
            onChange={(e) => {
              setUsername(e.target.value);
              const filteredItems = commercials.filter((item) =>
                item.name.toLowerCase().includes(e.target.value.toLowerCase())
              );
              setCommercials(filteredItems);
              console.log(commercials);
              if (e.target.value == "") {
                console.log("search");
                if (search) {
                  setSearch(false);
                } else {
                  setSearch(true);
                }
              }
            }}
            value={username}
          />
          <div className="iconRecherche">
            <img src={SearchIcon} alt="" />
          </div>
        </div>
        {commercials.length == 0 && (
          <span className="errorMessage">Client introuvable !!</span>
        )}
      </div>
    </div>
  );
};

export default Search;

// import React, { useContext, useState } from "react";
// import SearchIcon from "../img/loupe-arrondie.png";
// import { db } from "../firebase";
// import {
//   collection,
//   query,
//   where,
//   getDocs,
//   setDoc,
//   doc,
//   updateDoc,
//   serverTimestamp,
//   getDoc,
// } from "firebase/firestore";
// import { AuthContext } from "../context/AuthContext";

// const Search = () => {
//   const [username, setUsername] = useState("");
//   const [user, setUser] = useState(null);
//   const [err, setErr] = useState(false);

//   const { currentUser } = useContext(AuthContext);

//   const handleSearch = async () => {
//     const q = query(
//       collection(db, "users"),
//       where("displayName", "==", username)
//     );

//     try {
//       const querySnapshot = await getDocs(q);
//       if (querySnapshot.empty) {
//         setErr(true);
//       } else {
//         querySnapshot.forEach((doc) => {
//           setUser(doc.data());
//         });
//         setErr(false);
//       }

//     } catch (err) {
//       setErr(true)
//       console.log("utilisateur introuvable");
//     }

//   };

//   const handleKey = (e) => {
//     e.code === "Enter" && handleSearch();
//   };

//   const handleSelect = async (u) => {

//     const combinedId =
//       currentUser.uid > user.uid
//         ? currentUser.uid + user.uid
//         : user.uid + currentUser.uid;

//     try {
//       const res = await getDoc(doc(db, "chats", combinedId));

//       if (!res.exists()) {
//         await setDoc(doc(db, "chats", combinedId), { messages: [] });

//         await updateDoc(doc(db, "useChats", currentUser.uid), {
//           [combinedId + ".userInfo"]: {
//             uid: user.uid,
//             displayName: user.displayName,
//             photoURL: user.photoURL,
//           },
//           [combinedId + ".date"]: serverTimestamp(),
//         });

//         await updateDoc(doc(db, "useChats", user.uid), {
//           [combinedId + ".userInfo"]: {
//             uid: currentUser.uid,
//             displayName: currentUser.displayName,
//             photoURL: currentUser.photoURL,
//           },
//           [combinedId + ".date"]: serverTimestamp(),
//         });
//       }
//     } catch (err) {}

//     setUser(null);
//     setUsername("");

//   };

//   return (
//     <div className="search">
//       <div className="searchForm">
//         <div className="input">
//           <input
//             type="text"
//             placeholder="Rechercher client"
//             onKeyDown={handleKey}
//             onChange={(e) => setUsername(e.target.value)}
//             value={username}
//           />
//           <div className="iconRecherche">
//             <img src={SearchIcon} alt="" onClick={handleSearch} />
//           </div>
//         </div>
//       {err && <span className="errorMessage">Client introuvable !!</span>}
//       </div>
//       {user && (
//         <div className="userChat" onClick={handleSelect}>
//           <img src={user.photoURL} alt="" />
//           <div className="userChatInfo">
//             <span>{user.displayName}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;
