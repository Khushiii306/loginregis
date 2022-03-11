// import React from 'react';
// import {useNavigate,useLocation} from "react-router-dom";


// const displayData = [
//   {
//     id:1,
//     firstname:"kkk",
//     lastname:"hjl",
//     address:"katrgm",
//     city:"surt",
//     state:"guj",
//     zipcode:"987678",
//     gender:"female"
//   },
//   {
//     id:2,
//     firstname:"ncn",
//     lastname:"mcdnsdcm,s",
//     address:"cm,sc",
//     city:"nc,ms",
//     state:"mcds",
//     zipcode:"e937e937e",
//     gender:"male"
//   }
// ]

// export const Displaydata = () => {


//   const{state} = useLocation();

//   console.log("::::state:",state);


//   const deleteuser = (e) =>{
//     if(e){
//       console.log("data",e);
//       return state[{}]
//     }else{
//       return({data:"can't delete"})
//     }
//   } 

//     return (
//         <div>
//     <table class="table">
//   <thead class="thead-dark">
//     <tr>
//       <th scope="col">id</th>
//       <th scope="col">First Name</th>
//       <th scope="col">Last Name</th>
//       <th scope="col">Address</th>
//       <th scope="col">City</th>
//       <th scope="col">State</th>
//       <th scope="col">Zip</th>
//       <th scope="col">Gender</th>
//       <th scope="col">Delete</th>
//       <th scope="col">Update</th>
//     </tr>
//   </thead>
//   <tbody>
//   {
//         displayData.map(item=>
//          (
//            <>
//     <tr>
//       <th scope="row">{item.id}</th>
//       {/* <td>{state.data.firstname}</td>
//       <td>{state.data.lastname}</td>
//       <td>{state.data.Address}</td>
//       <td>{state.data.city}</td>
//       <td>{state.data.state}</td>
//       <td>{state.data.zip}</td> */}
//       {/* <td>{state.genderValue.gender}</td> */}
     
//       <td>{item.firstname}</td>
//       <td>{item.lastname}</td>
//       <td>{item.Address}</td>
//       <td>{item.city}</td>
//       <td>{item.state}</td>
//       <td>{item.zip}</td>
//       <td>{item.gender}</td>
     
      
       
//       <td><button type="button" class="btn btn-danger" onClick={()=>deleteuser(item)}>Delete</button></td>
//       <td><button type="button" class="btn btn-info">Update</button></td>
//     </tr>
//     </>
//     ))}
//   </tbody>
// </table>
//         </div>
//     )
// }

// export default Displaydata;