import { useAuth } from "../../contexts/useAuth";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login(){

    const {user, loading, error, dispatch} = useAuth();

    const [credential, setCredential] = useState({
        username: null,
        password: null
    })


    const navigate = useNavigate();
    
    function handleChange(e){
        setCredential(prev=>{
            return {
                ...prev,
                [e.target.id]: e.target.value
            }
        })
    }

    const handleClick = async e =>{
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try{
            const res = await axios.post('/api/auth/login', credential)

            dispatch({type: "LOGIN_SUCCESS", payload: { user : res.data }});
            navigate('/');
        } catch(err) {
            dispatch({type: "LOGIN_FAILED", payload: { error: err.response.data.Message }})
        }
    }


    return <>
        <input type="text" placeholder="username" id="username" onChange={handleChange}/>
        <input type="password" placeholder="password" id="password" onChange={handleChange}/>
        <button disabled={loading} onClick={handleClick}>Submit</button>
        {error && <span>{error}</span>}
    </>
}