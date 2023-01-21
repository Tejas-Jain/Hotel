import { useContext, useEffect, createContext, useReducer } from "react";


const AuthContext = createContext();

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null
};

export function useAuth(){
    return useContext(AuthContext);
};

function AuthReducer(state, action){
    
    switch(action.type){
        case "LOGIN_START":
            return {user: null, loading: true, error: null};
        case "LOGOUT":
            return {user: null, loading: false, error: null};
        case "LOGIN_SUCCESS":
            return {user: action.payload.user, loading: false, error: null};
        case "LOGIN_FAILED":
            return {user: null, loading: false, error: action.payload.error}
        default: 
            return state;
    }
}

export function AuthContextProvider({children}){
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user]);
    return <AuthContext.Provider value = {{...state, dispatch}}>
        {children}
    </AuthContext.Provider>
}