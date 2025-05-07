import React from 'react'
import './ListOfGrievance.css';
const ListOfGrievance = () => {
  return (
    <div className="listOfGrievance">
      <h1><b>List Of Grievance</b></h1>
        <table className="table">
            <thead>
                <th>UserId</th>
                <th>Status</th>
                <th>Address</th>
                <th>Subject</th>
                <th>Priority</th>
            </thead>
            <tr>
                <td>Gov123S</td>
                <td>Pending</td>
                <td>xxx,yyyy,zzzz</td>
                <td>asdddddddddddd</td>
                <td style={{color:(true)?"red":(false)?"yellow":"green"}}>High</td>
            </tr>
        </table>
    </div>
  )
}

export default ListOfGrievance
