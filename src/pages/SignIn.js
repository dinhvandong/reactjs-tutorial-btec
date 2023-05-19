import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn(){
    const [username, setUserName] = useState(); // Khai bao bien username
    const [password, setPassword] = useState(); // Khai bao bien password
    const navigate = useNavigate();

    const onChangeUserName = (e)=>{
        // Su kien onChange input text username
        e.preventDefault();
        console.log(e.target.value)
        setUserName(e.target.value);

    }
    const onChangePassword = (e)=>{
        // Su kien onChange input text password
        e.preventDefault();
        console.log(e.target.value)
        setPassword(e.target.value);
    }
    const onSubmit = (e)=>{
        // submit event button onClick
        e.preventDefault();
        console.log(username, password);
        // localStorage available in ReactJS 
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        navigate("/signup");
    }

    return (
    <div style={{ display:'flex',justifyContent:'center', alignItems:'center'}}>
        <form style={{  }} >
            <label style={{  }}>Enter your name:
            <input onChange={onChangeUserName}
                type="text" 
                name="username" 
            />
            </label>
            <br/>

            <label style={{ }}>Enter password:
                <input  onChange={onChangePassword}
                type="password" 
                name="age" 
                />
                </label>
                <br/>
                <input onClick={onSubmit} type="submit" />
            </form>

    </div>);
}

export default SignIn;
