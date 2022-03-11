// import "./register.css";
// import {useState} from "react";
// import { useNavigate } from 'react-router-dom';
// import Login from "../login/login";


//     const Register = () =>{

        
//         let navigate = useNavigate();
//         function redirect(data){
//             console.log("data",data);
//             navigate(`/login`);
//           }
      

//         const state = []

//         const [ini,setIni] = useState(
//             {
//                 name:null,
//                 email:null,
//                 password:null,
//                 rePassword:null
            
//         })

        

//         const handleChange = (e) =>{
//             const {name,value} = e.target
//             setIni({...ini,[name]:value}) 
//         }

//      const  onSubmitData = (data) =>{
      
//          console.log("data",data);
//          state.push(data)
//          localStorage.setItem('data', JSON.stringify(state));
         
//          if(data.name !== null){
//             navigate(`/login`); 
//          }else{
//             alert("input fields");
//          }
         
//      }
       
  

//     return (
//         <div className="login">
//         <h1>Register</h1>
//         <input type="text" name="name" value={ini.name} onChange={handleChange}  placeholder="Enter your Name" required/>
//         <input type="text" name="email" value={ini.email} onChange={handleChange} placeholder="Enter your Email" />
//         <input type="password" name="password" value={ini.password} onChange={handleChange} placeholder="Enter your Password" />
//         <input type="password" name="rePassword" value={ini.rePassword} onChange={handleChange} placeholder="Re-Enter Password" />
//         <div className="button"  onClick={(e)=>onSubmitData(ini)}>Register</div> 
//             <div>or</div>
//             <div className="button" onClick={()=>redirect()}>Login</div>
//         </div>
//     )
// }
// export default Register;

