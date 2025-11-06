import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";

const Applayout=()=>{
    return (
        
           <div className="App">
                    <Header/>
                    <Body/>
           </div>
    );
};

const root=ReactDOM.createRoot(document.querySelector("#intro"));
root.render(<Applayout/>);