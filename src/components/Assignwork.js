import React from 'react'
import { useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';
import Navbar from './Navbar';
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';


const Assignwork = () => {
  
  const navigate = useNavigate();
    const [excelData, setExcelData] = useState(null);

    const [excelFile, setExcelFile] = useState(null);
  
  
    const [row, setRow] = useState(null)
    const [name, setName] = useState(null)
    const [Consumerid, setNumber] = useState(null)
    const [adress, setAdress] = useState(null)
    const filetype = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
  
    const handlefile = (e) => {
      let selectedfile = e.target.files[0];
      console.log(selectedfile);
      console.log(selectedfile.type);
      if (selectedfile && filetype.includes(selectedfile.type)) {
        console.log("ok")
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedfile);
        reader.onload = (e) => {
          setExcelFile(e.target.result)
        }
      }
  
    }
    const submit = (e) => {
      e.preventDefault();
      if (excelFile !== null) {
  
        const workbook = XLSX.read(excelFile, { type: 'buffer' });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);
  
        setExcelData(data);
        console.log(typeof (data))
  
  
  
  
      }
    }
    const submitarray =()=>{
      navigate("/reports")
      // axios.post("http://localhost:8080/consumerinfo",lineman )
      // .then( res => {
      //     console.log(res.data);
          
      // })
    }
    const [lineman, setLineman] = useState([{}])
    const handleonclick = (e) => {
  
    }
    const handleDropdown = (e) => {
      let Consumerid=e.target.name;
      let Assignedlineman=e.target.value;

      // console.log("key", key);
      // console.log("exceldata", excelData);

      const temp = (excelData.filter((val) => val.Consumerid == Consumerid))[0];

      // let number=e.target.number;
      // let address=e.target.address;
      console.log("temp", temp);
      setLineman(()=>{
        return[
          ...lineman,
          {
            Consumerid,
            Consumername : temp.Consumername,
            Mobnumber : temp.Mobnumber,
            Address : temp.Address,
            Assignedlineman,
            Workstatus : temp.Workstatus
          }
         // ,number:number,address:address
        ]
      })
      
    }
    console.log("lineman", lineman);
  
    

  return (
    <>
    <Navbar />
    <div className="App"><br />
    <div>
      <h3 > Please Upload Disconnection sheet in Excel Format</h3>
      <input type="file" onChange={handlefile} />
      <button onClick={submit}>Submit</button>
      </div>
      <br />
      <div className="table">
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Customer Number</th>
          <th>Consumer Name</th>
          <th>Phone number</th>
          <th>Address</th>
          <th>Assign to Lineman</th>
          <th>Work Status</th>
        </tr>
        </thead>
        <tbody>
        {excelData &&
          excelData.map((person) => {
            return (
              <tr>
                <td>{person.Consumerid}</td>
                <td>{person.Consumername}</td>
                <td>{person.Mobnumber}</td>
                <td>{person.Address}</td>
                
                <td>
                  <select id="cars" name={person.Consumerid} onChange={handleDropdown}>
                    <option value="0">Assign Later</option>
                    <option value="lineman2">lineman1</option>
                    <option value="lineman3">lineman2</option>
                    <option value="lineman3">lineman3</option>
                    <option value="lineman4">lineman4</option>
                   
                  </select>
                </td>
                <td>{person.Workstatus}</td>

              </tr>




            )
          })
        }
        </tbody>
      </Table></div>
      <button type='submit' onClick={submitarray}>submit</button>
    </div>
    </>
  );
}

export default Assignwork
