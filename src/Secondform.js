import React from 'react';
import './Secondform.css';
import { useState } from 'react';




 const Secondform = () => {

  

    


        const state=[];

        const[init, setInit] = useState(
            {
                    id:"",
                    name:"",
                    email:"",
                    password:""
            })


        const handleChange= (e) =>{
            const {name,value} = e.target 
            setInit({...init,[name]:value})
        }



        const submit = (data) =>{
            console.log("data",data)
                state.push(data);
                localStorage.setItem("data",JSON.stringify(state));

        }
    

    return (
        <div className="input">
            <input type="text" name="id"  placeholder="enter id" value={init.id} onChange={handleChange} />
           <br/>
           <br/>
           <input type="text" name="name"  placeholder="enter username" value={init.name} onChange={handleChange} />
           <br/>
           <br/>
           <input type="text" name="email" placeholder="enter mailId" value={init.email} onChange={handleChange} /> 
           <br/>
           <br/>
           <input type="password" name="password" placeholder="enter password" value={init.password} onChange={handleChange}/> 
           <br/>
           <br/>
           <button onClick={(e)=>submit(init)}> submit </button>

           <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody>


    {/* <tr>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.password}</td>
    </tr> */}

   
  </tbody>
</table>
</div>
    )
}
export default Secondform;