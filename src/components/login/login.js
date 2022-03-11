// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import register from '../register/register';
// import "./login.css";


// export const Login = () => {

//     let navigate = useNavigate();
//     function redirect(data){
//         console.log("data",data);
//         navigate(`/register`);
//       }


//       const state = []

//       const [ini,setIni] = useState(
//           {
//               email:"",
//               password:"",
//       })

//       const handleChange = (e) =>{
//         const {name,value} = e.target
//         setIni({...ini,[name]:value}) 
//     }

//     const  onSubmitData = (data) =>{
      
//         console.log("data",data);
//         state.push(data)
//         localStorage.setItem('data', JSON.stringify(state));
//         debugger
//         if(data.email === "khushbu@gmail.com" && data.password  === "khushbu306"){
//             navigate(`/homepage`); 
//          }else{
//             alert("input fields");
//          }
//     }
   
    
//     return (
//         <div className="login">
//         <h1>Login</h1>
//         <input type="text" name="email" value={ini.email} onChange={handleChange} placeholder="Enter your Email" />
//         <input type="password" name="password" value={ini.password} onChange={handleChange} placeholder="Enter your Password" />
//         <div className="button" onClick={(e)=>onSubmitData(ini)}>Login</div>
//             <div>or</div>
//             <div className="button" onClick={()=>redirect()} >Register</div>
//         </div>
//     )
// }
// export default Login;



