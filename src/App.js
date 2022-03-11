import './App.css';
import './form.css';
import Form from './form';
import Secondform  from './Secondform';
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Homepage from './components/homepage/homepage';
// import Login from './components/login/login';
// import Postdata from './components/post/postdata';
// import Register from './components/register/register';
// import Displaydata from './components/displaydata/displaydata';
// import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/Secondform" element={<Secondform/>}   />
 
      </Routes>
    </BrowserRouter>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/postdata" element={<Postdata/>}/>
        <Route path="/displaydata" element={<Displaydata/>}/>
        
      </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
