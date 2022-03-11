// import React from 'react';
// import './post.css';
// import { useState } from 'react';
//  import { useNavigate } from 'react-router-dom';

//  const Postdata = () => {

//   const [gender,setGender] = useState({
//     gender:"male"
//   })

//   let navigate = useNavigate();

//   const state = []

//   const[user,setInit] = useState({

//     firstname:null,
//     lastname:null,
//     Address:null,
//     city:null,
//     state:null,
//     zip:null,
//   })


//   const handleChange = (e) =>{
//     const {name,value} = e.target
//     setInit({...user,[name]:value}) 
// }

// const radioChange = (e) =>{
//   debugger
//   setGender({ gender:e.target.value})
// }

// const  onSubmitData = (data,genderValue) =>{

//   const result = {
//     data,
//     genderValue
//   }
      
//   state.push(data)
//   localStorage.setItem('data', JSON.stringify(state));
  
//   if(data.firstname !== null){
//      navigate(`/displaydata`,{state:result}); 
//   }else{
//      alert("input fields");
//   }
  
// }

//     return (
//       <div className="login">
//         <h1>Post Page</h1>
//         <input type="text" name="firstname" value={user.firstname} onChange={handleChange}  placeholder="Enter your Name" required/>
//         <input type="text" name="lastname" value={user.lastname} onChange={handleChange} placeholder="Enter your Email" required/>
//         <input type="text" name="Address" value={user.Address} onChange={handleChange} placeholder="Enter your Address" />
//         <input type="text" name="city" value={user.city} onChange={handleChange} placeholder="Enter your City" />
//         <input type="text" name="state" value={user.state} onChange={handleChange} placeholder="Enter your State" />
//         <input type="text" name="zip" value={user.zip} onChange={handleChange} placeholder="Enter your Zip" />  
//         <div className="form-check">
//           <input class="form-check-input" type="radio" value="male" onChange={radioChange}    checked={gender.gender === "male"} />
//           <label class="form-check-label" for="gridRadios1" style={{marginRight:"200px"}}>
//             Male
//           </label>  
//           <br />
//           <input class="form-check-input" type="radio" value="female" onChange={radioChange}   checked={gender.gender === "female"} />
//           <label class="form-check-label" for="gridRadios1" style={{marginRight:"180px"}}>
//             Female
//           </label>
//         </div>
//             <div className="button" onClick={(e)=>onSubmitData(user,gender)}>Post Data</div>
//         </div>    
//     )
// }

// export  default Postdata;