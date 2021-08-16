import React from 'react';
import Navbar from "./containers/navbar";
import Body from "./containers/body";

function App() {
  return (
    <div className="">
        {/*navbar make after the design*/}
        <Navbar/>
        <hr/>
        <p style={{fontSize:24,textAlign:"center"}}>BODY</p>
        {/*body*/}
        <Body/>
    </div>
  );
}

export default App;
