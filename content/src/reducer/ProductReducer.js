const ProductReducer = (action, state) => {
  // if(action.type === "SET_LOADING"){
  //     return {
  //         ...state,
  //         isLoading:true,
  //     }
  // }
  // if(action.type === "API_ERROR"){
  //     return {
  //         ...state,
  //   isLoading:false,
  //         isError:true,
  //     }

  // }

  switch(action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
      case "API_DATA":
      return {
        ...state,
        isLoading: false,
        isError: false,
        productsData: action.payload,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
//   return state;
};

export default ProductReducer;
