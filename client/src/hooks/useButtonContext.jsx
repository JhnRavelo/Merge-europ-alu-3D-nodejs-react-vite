import { useContext, useDebugValue } from "react";
import ButtonContext from "../context/ButtonProvider";

const useButtonContext = () => {
    // const { selectedProduct } = useContext(ButtonContext);
    // useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")
    return useContext(ButtonContext);
}

export default useButtonContext;