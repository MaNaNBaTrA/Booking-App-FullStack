import { useContext, useState} from "react"
import {useNavigate} from "react-router-dom"
import "./login.css"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios";

const Login = () => {
    const [credentials, setcredentials] = useState({
        username: undefined,
        password: undefined,
    })

    const navigate = useNavigate()
    const {loading, error, dispatch } = useContext(AuthContext)

    const handleChange = (e) => {
        setcredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e)=>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post("http://localhost:8800/auth/login", credentials)
            dispatch({type:"LOGIN_SUCCESS", payload : res.data});
            navigate("/")
        }catch(err){
            dispatch({type:'LOGIN_FAILURE', payload : err.response.data})
        }
    };


    return (
        <div className="login">
            <div className="loginContainer">
                <input type="text" className="logininput" placeholder="username" id="username" onChange={handleChange} />
                <input type="password" className="logininput" placeholder="password" id="password" onChange={handleChange} />
                <button disabled={loading} onClick={handleClick} className="loginBtn">Login</button>
                {error && <span className="ErrorMsg">{error.message}</span>}
            </div>
        </div>
    )
}

export default Login;