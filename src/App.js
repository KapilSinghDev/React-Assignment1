// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import { useState } from 'react';
import './App.css'



function App(){
  const[data,setData] = useState(null)
  const[print,setPrint] = useState(false)

  function getData(val){
    console.warn(val.target.value)
    setData(val.target.value) 
    setPrint(false)
    
  }
  return (
   <>
  
    <div className="App">
    <p>Enter your name <input type="text" onChange={getData}/> </p>
    <button onClick={() => setPrint(true)}>Login</button>
   
    {
    
     print? <h1><h2>Hey! {data}</h2><p>Welcome to college</p></h1>  :null
      
     
    }
    <h3><p>Assigment done by <u>KAPIL SINGH</u> (12012215)</p> </h3>
   
   </div>
    </>
  );
}

export default App;
