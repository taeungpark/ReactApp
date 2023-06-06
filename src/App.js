import { useState, useEffect } from "react";

function Hello(){
  // useEffect(function(){
  //   console.log("Hi :)");
  //   return function (){
  //     console.log("Bye :(")
  //   } 
  // }, []); //same function with below but little longer:

  // useEffect(()=>{
  //   console.log("Hi :)");
  //   return () => console.log("Bye :(")
  // }, []); //same function with below:
  
  function byeFn(){
    console.log("Bye :(")
  }
  function hiFn(){
    console.log("Hi :)");
    return byeFn;
  }
  useEffect(hiFn, []);
  return <h1>hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
