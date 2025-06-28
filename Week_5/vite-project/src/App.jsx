
import {useState} from 'react'; //This monitors the state.
// State, Component
// function App(){
//   const [count, setcount] = useState(0); //setcount is the function which when gets called, will update the count. useState() initialize count to 0.
 
//   function counter(){
//       setcount(count+1);
//   }

//   return (
//     <div>
//       {/* We use {} to ask jsx to evalute things under it. */}
//       <button onClick={counter}>Counter {count}</button> 
//     </div>
//   )
// }

function App(){
  const [count, setcount] = useState(0); //setcount is the function which when gets called, will update the count. useState() initialize count to 0.

  return (
    <div>
      <CustomButton count={count} setcount={setcount}></CustomButton>
    </div>
  )
}

//Component, Making own component.
function CustomButton(prop){
  function counter(){
    prop.setcount(prop.count + 1);
  }

  return( <button onClick={counter}>
    Counter {prop.count}
    </button>
  )
}

export default App;