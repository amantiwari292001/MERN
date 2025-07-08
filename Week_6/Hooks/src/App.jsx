import { useState } from 'react'
import { useMemo } from 'react'
import './App.css'
import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';

// function App() {
//   // If parent re-renders, every child will re-render.
//   // To minimize it use state inside component that is supposed to re-render. OR we use MEMO.

//   const [count, setCount] = useState(0)

//   function updatesCount(){
//     setCount(Math.random());
//   }

//   return (
//     //Doesn't introduce extra dom element, short hand of <Fragment>
//     <> 
//       <div>
//         <button onClick={updatesCount}>Button</button>
//         <Header title={`Now count is ${count}`} />
//         {/* <HeaderWithButton title={'This is'} /> */}
//         <Header title={'There!'} />
//     </div>
//     </>
//   )
// }

// function HeaderWithButton({title}){
//   const [count, setCount] = useState(0)

//   function updatesCount(){
//     setCount(Math.random());
//   }
//   return (
//     <div>
//       <button onClick={updatesCount}>Button</button>
//       <div>
//         {`${title} ${count}`}
//       </div>
//     </div>
//   )
// }

// memo is keeping the header not to re-render if it isn't changing
// let Header = React.memo(({title}) => {
//   return (
//     <div>
//       <div>
//         {title}
//       </div>
//     </div>
//   )
// })

// --------------------------------------------------------------------------------

// function App() {
//   return(
//     <>
//       <Cardwrapper component={<TextComponent1 />}></Cardwrapper>
//       <Cardwrapper component={<TextComponent2 />}></Cardwrapper>
//       <CardwrapperChildren>Children</CardwrapperChildren>
//     </>
//   )

// }

// function Cardwrapper({component}) {
//   return(
//     <div style={{border: '2px solid black', width: '250px'}}>
//       {component}
//     </div>
//   )
// }

// // It will take childrern 
// function CardwrapperChildren({children}) {
//   return(
//     <div style={{border: '2px solid black', width: '250px'}}>
//       {children}
//     </div>
//   )
// }

// function TextComponent1() {
//   return (
//     <div>Textcontent-1</div>
//   )
// }
// function TextComponent2() {
//   return (
//     <div>Textcontent-2</div>
//   )
// }

// -----------------------------------------------------------------------------------

// function App(){
//   const [todos, setTodo] = useState([]);
//   useEffect(() => {
//     //axios auto parse the response into json.
//     axios.get('http://localhost:3001/todos')
//     .then((res) => {
//       console.log(res.data.todos);
//       setTodo(res.data.todos);
//     })
//   },[]);
// }


// function App(){
//   let todos = getTodo();
//   const [id, setTitle] = useState('');
//   return (
//    <>
//      <div>Hi!</div>
//      <button onClick={() => {setTitle('Gym')}}>Gym</button>
//      <button onClick={() => {setTitle('Work')}}>Work</button>
//      <Todos todos={todos} title={id} />
//    </>  
//   )
// };

// function getTodo(){
//   const [todos, setTodo] = useState([]);
//   useEffect(() => {
//     axios.get('http://localhost:3001/todos')
//       .then((res) => {
//         console.log(res.data.todos);
//         setTodo(res.data.todos);
//       });
//   }, []);
//   return todos;
// }

// function Todos({todos, title}){
//   return (
//     <div>
//       {todos.map((todo) => {
//         if(todo.title == title){
//           return(
//             <div key={todo._id}>
//               <h2>Title:</h2>
//               <h3>{todo.title}</h3>
//               <h2>Description:</h2>
//               <h3>{todo.description}</h3>
//             </div>
//           )
//         }
//       })}
//     </div>
//   );
// }

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  const [sum, setSum] = useState(0);

  let sumDigi = 0;
  // useEffect doesn't return anything, but useMemo. It save one state change variable for us.
  let sums = useMemo(() => {
    console.log('Memo');
    for(let i = 0;i<=input;i++){
      sumDigi+=i;
    }
    return sumDigi;
    // setSum(sumDigi);
  },[input]);

  useEffect(() => {
    console.log()
    for(let i = 0;i<=input;i++){
      sumDigi+=i;
    }
    setSum(sumDigi);
  },[input])

  return(
    <div>
      <input type='text' onChange={(e) => setInput(e.target.value)}></input>
      <div>{`Sum of the digits of ${input} is ${sum}`
        }</div>
      <button onClick={() => setCount(count+1)}>{`Counter (${count})`}</button>
    </div>
  )
}
export default App

//Hooks,
// useState-> Keeps a variable into survelleince, change and display value.
// useEffect-> Run/Re-Render something under some conditions.
// useMemo-> Stores the work into a variable as caching, unlike useEffect it return you your result.
// useCallback-> Same as useMemo, but returns a function.
// useRef-> Used as attributes.