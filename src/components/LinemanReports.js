import React, { useState, useEffect }  from "react";

import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
//import jsPDF from 'jspdf';
//import html2canvas from 'html2canvas';


import NavbarLineman from './NavbarLineman';
const LinemanReports = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/fetchlist3");
    // console.log(result);
    // console.log(result.data.reverse())
    setUser(result.data);
  };

  const deleteUser = async id => {
    
    await axios.delete(`http://localhost:8080/delete2/${id}`);
   
    loadUsers();
  };
  
//   const exportPdf = () => {
//     html2canvas(document.querySelector("#table-to-xls"), {
//       scrollX: 0,
//       scrollY: 0
//     }).then(function(canvas) {
//     //html2canvas(document.querySelector("#table-to-xls")).then(canvas => {
//       // document.body.appendChild(canvas);  // if you want see your screenshot in body.
//        const imgData = canvas.toDataURL('image/png');
//        const pdf = new jsPDF();
//        pdf.addImage(imgData,'JPEG',10,2,200,100);
//        pdf.save("download.pdf"); 
//    });

// }


  return (
    <>
   
     <NavbarLineman />
    <div className="container">
      <div className="py-4">
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}><h3>My Recommendations</h3>
        </div>
<div>  I have the following recommendations->  </div>
<table border="1" cellPadding={3} cellSpacing="10">
  <th>S.no</th>
  <th>RecommendationFrom</th>
  <th> RecommendedFor</th>
  <tr> 
  <td>1</td>
  <td>NIC</td>
  <td>c++</td>
  </tr>
  <tr>
    <td>2</td>
    <td>bmse</td>
    <td>java</td>
  </tr>
</table>


<br/><br/><br/>
    <br/>
        <span>
         {" "}
        <a href="/documents/myresume.pdf" target="_blank">
            <h1>My Resume</h1>
        </a>{" "}
         
    </span>

    
         
        
         
         <br/>
          
    

         
      </div>
    </div>
    </>
  );
};

export default LinemanReports;