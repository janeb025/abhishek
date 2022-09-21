import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import NavbarLineman from './NavbarLineman';

const LinemanCompleted = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/fetchlist1");
    // console.log(result);
    // console.log(result.data.reverse())
    setUser(result.data);
  };

  const deleteUser = async id=> {
    await axios.delete(`http://localhost:8080/updatework1/${id}`);
//     try {
//       const st="Completed";
//       const response = await axios({
//         method: "get",
//         url: "http://localhost:8080/updatework",
//         params: { st },
//       });
//       setUser(response.data);
//     }
    

// catch{

// }
    //loadUsers();
  };
  

  return (
    <>
     <NavbarLineman />
    <div className="container">
      <div className="py-4">
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}><h3>About Me and contact Me</h3>

        </div>
        <div>
          <table border="2" cellPadding={3} cellSpacing="5">
            <th> Name</th>
            <th>Emaild Id</th>
            <th> Phone No</th>
            <th>Address</th>
            <tr>
              <td>ABHISHEK KUMAR</td>
              <td>abhishekkaushik025@gmail</td>
              <td>9113415249</td>
              <td>lucknow</td>
            </tr>
          </table>
      

        </div>
         
         
      </div>
    </div>
    </>
  );
};

export default LinemanCompleted;