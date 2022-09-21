import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import NavbarLineman from './NavbarLineman';

const LinemanPending = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/fetchlist2");
    // console.log(result);
    // console.log(result.data.reverse())
    setUser(result.data);
  };

  const deleteUser = async id=> {
    await axios.delete(`http://localhost:8080/updatework/${id}`);
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
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}><h1> I Have The following  Skills and My Experiences  ----</h1>
      <h3></h3>
       
</div>      
<table border="2" cellPadding={3} cellSpacing="5">
            <th> S.No</th>
            <th>Skills</th>
            <th> Experiences</th>
             
            <tr>
              <td>1.</td>
              <td>FrontEndDevelopment</td>
              <td>3 Years </td>
               
            </tr>
            <tr>
              <td>2.</td>
              <td>BackEndDevelopment</td>
              <td>3.5 Years </td>
               
            </tr>
          </table>


         
        
         
      </div>
    </div>
    </>
  );
};

export default LinemanPending;