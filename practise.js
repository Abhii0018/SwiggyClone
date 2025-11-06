import React from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement("h1",{id:"heading"},"I m inside H1 👌");
// const root=ReactDOM.createRoot(document.querySelector("#intro"));            //  without jsx
// root.render(heading);

//   

// const root=ReactDOM.createRoot(document.querySelector("#intro"));             //using jsx

// root.render(heading);


// ....,....,.,.,.,.,.,..,.,.,,.,.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


// const Close=()=>{
//     return <p>I m using Functional Component</p>    //first type
// };

// function Close(){
//     return <h1>I m inside H1😒</h1>   //2nd type of declare functional componnet in react

// }

// const Close= ()=>(<div>
//      <h1>Hello Abhi ✌️</h1>
//     <h1>Hello 2nd Abhi ✌️</h1>
// </div>);

// const Close = ({ name }) => <h1>Hello {name}</h1>;    // shortcut for props

// const Close=(props)=>{
//     return <h2>i m using props {props.name}</h2>   // another way by using props always keep in mind whwnver react object takes argumnet then it will only take inside curly braces.
// }

// const Intro=({name,roll,section})=>{
//     return (
//         <div>
//             <h1>{name}</h1>
//             <p>{roll}</p>
//             <p>{section}</p>
//             <hr/>
//         </div>
//     );
// };

// const Card=()=>{
//     return (
//         <div>
//              <Intro name="Abhi"  section="DW" roll="1"/>
//              <Intro name="Abhishek"   roll="21" section="DW"/>
//              <Intro name="Abhiiman"  section="KW" roll="11"/>
//         </div>
           
//     );
// };

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


const root=ReactDOM.createRoot(document.querySelector("#intro"));
root.render(<Card/>);
