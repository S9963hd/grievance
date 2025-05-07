import React,{useReducer,useRef} from 'react'
import './MainPage.css';
import {useNavigate} from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { loginDetails,LoginStateController } from '../Login/LoginState';
import Modal from '../TemplateModal/Modal'; 
import Multicharts from '../HighCharts/multicharts';
import LiveStatusGraph from '../HighCharts/LiveStatusGraph';
const MainPage = () => {
    const [state,dispatch]=useReducer(LoginStateController,loginDetails);
    const ref=useRef();
    const navigate=useNavigate();
  return (
    <div className="mainpanel">
        <div className="mainPage">
            <img className="logo" src="/assets/logo.png" alt="Logo" />
            <div className="mainPage1">
                <h4 className="buttonCommon" onClick={()=>navigate('/login')}>SignIn/SignUp</h4>
            </div>
        </div>
        <div className="mainPage mainPageMob">
            <div>
                <h1 style={{display:'inline'}}>A Grievance  Platform For the Citizens,<Typewriter
                style={{display:'inline'}}
                options={{
                    strings: ['Of the Citizens ...', 'By the Citizens ...'],
                    autoStart: true,
                    loop: true,
                }}
                /></h1>
                <Modal ref={ref}/>
                <div className="buttonGroup g-3" >
                    <button className="buttonCommon button1 button1-mainpage" onClick={()=>navigate('/login')}>Get Started</button>
                    <button className="buttonCommon button1 button1-mainpage" onClick={()=>(loginDetails.name=="")?ref.current.showModal():navigate('/complains')}>Start Grievance</button>
                </div>
                <br/>
            </div>
            <img src="/assets/Women2-placeholder.png" alt="women1" className="women1"/>
        </div>
        <div>
        <h1 style={{textAlign:'center',padding:'2vh',fontWeight:'700'}}>Total accountable Grievances</h1>
        <div className="mainPage" style={{height:'85vh',alignItems:'center'}}>
            <div className="visualize1">
                <Multicharts/>
            </div>
            <div className="visualize2">
                <LiveStatusGraph />
            </div>
        </div>
        </div>
    </div>
  )
}

export default MainPage
