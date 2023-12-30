// import React from "react";
// import { useState } from "react";
// import './App.css';

// const App=()=>{

//   const [numbers, setnumbers]=useState(0)
// const incre=()=>{
//   setnumbers(numbers + 1);
// }

// const dec=()=>{
//   if(numbers>0){
//   setnumbers(numbers - 1)
//   }else{
//     alert("zero is the limit")
//   }
// }
//   return(
//     <div className="inc">

// <h1>{numbers}</h1>
// <button onClick={incre}>incress</button>
// <button onClick={dec}>decress</button>
//     </div>
//   )
// }
// export default App





// import React from 'react';

// class App extends React.Component {
//   handleClick = (param) => {
//     console.log('Button Clicked!', param);
//   }

//   render() {
//     return (
//       <button onClick={(e) => this.handleClick('Hello', e)}>Click me</button>
//     );
//   }
// }

// export default App;





///////button Click ///////////


// import React from "react";
// import { useState } from "react";


// const App=()=>{
// const [setvalue,setNewvalue]=useState(false)
// const haldeSub=()=>{
//   setNewvalue(!setvalue)
// }

// return(

//   <div>
// <button onClick={haldeSub}>click me</button>
// {setvalue && <h1>Hello Anjali mam </h1>}
//   </div>
// )

// }
// export default App                  
 


// import React, { useState } from 'react';

// const MyComponent = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = async (e) => {
//     setInputValue(e.target.value);

//   };

//   return (
//     <div>
//       <label htmlFor="inputField">Type something:</label>
//       <input
//         type="text"
//         id="inputField"
//         value={inputValue}
//         onChange={handleInputChange}
//       />

//       {/* Show UI elements based on the input value */}
//       {inputValue && 
//         <div>
//           <h2>Display While Typing</h2>
//           <p>{`You are typing: ${inputValue}`}</p>
//         </div>
//       }
//     </div>
//   );
// };


// export default MyComponent;




import React from "react";
import { useState } from "react";

const funs=()=>{

    const [setValue,updateValue]=useState(false)
const res=()=>{
    updateValue(!setValue)
}

    return(
        <div>
<button type="Sucess" onClick={res}>click</button>
{setValue && <p>hello vidthya</p>}
        </div>
    )
}
export default funs