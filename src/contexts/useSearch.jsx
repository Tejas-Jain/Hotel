import { createContext, useContext, useReducer } from "react";

const INITIAL_STATE = {
  destination: "",
  dates: [{
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ],
  options: {
    adult: 1,
    child: 0,
    room: 1
  }
};

export const SearchContext = createContext();


export function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider value={{...state, dispatch}}>
        {children}
    </SearchContext.Provider>
  );
}

function SearchReducer(state, action){
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET":
      return INITIAL_STATE;
    default:
      return state;
  }
};


export function useSearch() {
  return useContext(SearchContext);
}

