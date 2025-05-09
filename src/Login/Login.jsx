import React,{useState,useRef,useEffect} from 'react'
import './Login.css';
const Login = () => {
    const [showPassword,setShowPassword]=useState(false);
    const [onLoad,SetOnLoad]=useState(false);
     const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.THREE) {
      setVantaEffect(
        window.VANTA.NET({
          el: vantaRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xfca738,
          backgroundColor: 0xfcf8fc
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className="main" ref={vantaRef}>
        <div className="loginMain" style={{backgroundColor:'white'}}>
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
