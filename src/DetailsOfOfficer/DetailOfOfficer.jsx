import React from 'react'
import './DetailOfficer.css';
const DetailOfOfficer = () => {

  return (
    <div className="detailmain">
        <h1>Officer ID:{"sakjansfasn"}</h1>
        <div className="detailsPanel">
            <div >
                <img src="/assets/Women1-placeholder.png" alt="Officer Image"/>
            </div>
            <div style={{alignSelf:'center'}}>
                <h3>Name:katty</h3>
                <h3>Age :27</h3>
                <h3>Sex:Female</h3>
                <h3>Address:xxxx,yyyyyyy,xxxxzzzzz,zzzzzzzzzz</h3>
                <h3>Sector Area: Erode</h3>
                <h3>Rating : 4.5/5</h3>
                <h3>Problem Solved : 40/70</h3>
            </div>
        </div>
        <button className="btn mx-5 btn-danger button1">Remove&nbsp;<i class="fa-solid fa-xmark"></i></button>
        <button className="btn mx-5 btn-warning button1">Next&nbsp;<i class="fa-solid fa-right-long"></i></button>
        <button className="btn mx-5 btn-success button1">Promote&nbsp;<i class="fa-solid fa-up-long"></i></button>
    </div>
  )
}

export default DetailOfOfficer
