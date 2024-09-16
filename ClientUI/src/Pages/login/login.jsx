import { useContext, useState } from "react"
import "./login.css"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios";

const Login = () => {
    const [credentials, setcredentials] = useState({
        username: undefined,
        password: undefined,
    })

    const { user,loading, error, dispatch } = useContext(AuthContext)

    const handleChange = (e) => {
        setcredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e)=>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post("http://localhost:8800/auth/login", credentials)
            dispatch({type:"LOGIN_SUCCESS", payload : res.data})
        }catch(err){
            dispatch({type:'LOGIN_FAILURE', payload : err.response.data})
        }
    };

    console.log(user)

    return (
        <div className="login">
            <div className="loginContainer">
                <input type="text" className="logininput" placeholder="username" id="username" onChange={handleChange} />
                <input type="password" className="logininput" placeholder="password" id="password" onChange={handleChange} />
                <button onClick={handleClick} className="loginBtn">Login</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}

export default Login;