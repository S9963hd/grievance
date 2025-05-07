import React from 'react'
import './DetailOfficer.css';
const DetailOfOfficer = () => {

  return (
    <div className="detailmain">
        <h1>Officer ID:{"sakjansfasn"}</h1>
        <div className="detailsPanel">
            <div >
                <img src="data:image/jpeg;base64,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" alt="Officer Image"/>
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
        <button className="btn mx-5 btn-danger button1">Remove</button>
        <button className="btn mx-5 btn-warning button1">Next</button>
        <button className="btn mx-5 btn-success button1">Promote</button>
    </div>
  )
}

export default DetailOfOfficer
