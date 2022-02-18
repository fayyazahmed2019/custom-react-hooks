import React from 'react';
import { Link } from 'react-router-dom';


const Check =(prop) =>{

let name = "fayyaz ahmed"

const check=() =>{

let echeck = document.getElementById("echeck").value;

console.log(echeck)

if (echeck === "fayyaz"){
    alert("success")
}else{
    alert("failed")
}

}

return (
<> 
<div className='in'>
<input type="text" placeholder="type name" id="echeck"></input></div>
<br />
<button onClick={check}>click me</button>


<h1>Prop {prop.name}</h1>
<h1>Prop {prop.class}</h1>
<h1>Variable {name}</h1>


</>    

)

}


export default Check;