import React, { Component } from "react";
import axios from "axios";
import {Routes, Route, useNavigate} from 'react-router-dom';
 

const Prelogin = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        
        navigate('/login');
      };
      const navigate1 = useNavigate();
    const navigateHome1 = () => {
        
        navigate1('/homeLineman');
      };
      const myStyle={
         
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
      
    return (
     
        <div style={myStyle}>
        <br></br> <br></br> <br></br> <br></br> <br></br>
        <div class="center" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
<button type="button" onClick={navigateHome1} class="btn btn-secondary btn-lg">About Me And My Qualifications , Technical Details </button>
</div></div>
        
    );
    };
    
    export default Prelogin;
    