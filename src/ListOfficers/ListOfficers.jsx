import React,{useState} from 'react'
import './ListOfficers.css';
const ListOfficers = () => {
  const [index,setIndex]=useState([1,2,3,4,5,6,7,8])
  return (
    <div className="listOfOfficer">
  <h1><b>List Of Officers</b></h1>
  <div className="tableScrollWrapper">
    <table className="tableOfficer">
      <tbody>
        {index.map((e, i) => (
          <tr key={i} className="officerRow">
            <td style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
              <img src="/assets/Women1-placeholder.png" alt="user Image"/>
              <p style={{paddingLeft:'20px',paddingTop:'10px'}}>Katty</p>
            </td>
            <td>4.5/5</td>
            <td>40/70 Solved</td>
            <td>Erode</td>
            <td>More Details</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  )
}

export default ListOfficers;
