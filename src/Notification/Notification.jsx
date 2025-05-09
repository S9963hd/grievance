import React,{useState} from 'react'
import './Notification.css';
const Notification = () => {
    const[close,setClose]=useState(true);
  return (
    <div className={(close)?"notificationMain":"notificationMain notificationClose"}>
        <i class="fa-solid fa-xmark buttonCommon" style={{float:'right'}} onClick={()=>setClose(false)}></i>
        <div className="notificationWrapper">
        <h3 class="fa-solid fa-mobile-screen buttonCommon"></h3>
        </div>
    </div>
  )
}

export default Notification;
