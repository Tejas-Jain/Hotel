import { createContext, useContext, useReducer } from "react";

const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  }
};

export const SearchContext = createContext();

export function useSearch() {
  return useContext(SearchContext);
}

const SearchReducer = (action, state) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider value={{...state, dispatch}}>
        {children}
    </SearchContext.Provider>
  );
}
