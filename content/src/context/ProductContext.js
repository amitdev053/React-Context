import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initinalState = {
    isLoading: false,
    isError: false,
    productsData: [],
  };
  const [dispatch, state] = useReducer(reducer, initinalState);
  const baseApiUrl = "https://dummyjson.com/";
  async function getProducts() {
    dispatch({type:"SET_LOADING"})
    try {
      const reqUrl = await axios.get(baseApiUrl + "products");
      const productsData = await reqUrl.data;
      console.log(productsData);

      dispatch({type:"API_DATA", payload: productsData})
    } catch (err) {
      console.log(err);
      dispatch({type: "API_ERROR"})
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
export { AppProvider, AppContext };
