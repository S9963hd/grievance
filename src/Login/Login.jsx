import React,{useState} from 'react'
import './Login.css';
const Login = () => {
    const [showPassword,setShowPassword]=useState(false);
    const [onLoad,SetOnLoad]=useState(false);
  return (
    <div className="main">
        <div className="loginMain">
            <img src="/assets/logo.png" className="logo g-3" alt="logo"/>
            <div style={{width:'35vw'}}>
                <input className="inputText g-3" type="text" placeholder="Enter Name"/>
                <input className="inputText g-3" type="text" placeholder="Enter Email"/>
                <input className="inputText g-3" type={(showPassword)?"text":"password"} onClick={()=>setShowPassword(!showPassword)} placeholder='Enter Password'/>
                <span className="buttonCommon" onClick={()=>setShowPassword(!showPassword)}>Show Password</span>
                <select className="option form-select g-2">
                    <option value="citizen">Citizen</option>
                    <option value="officer">Officer</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <div>
                <input type="checkbox" className="form-check" /> <span>I agree with terms and condition of the Organization</span>
            </div>
            <br/>
            <div className="buttonBehave">
                <button className="button1 buttonCommon g-3 buttomanimate" onClick={()=>SetOnLoad(!onLoad)}>SignUp&nbsp;{(onLoad)?<i class="fa-solid fa-spinner spinner"></i>:""}</button>
                <button className="button1 buttonCommon g-3 buttomanimate" >SignIn</button>
            </div>
        </div>
    </div>  
  )
}

export default Login
