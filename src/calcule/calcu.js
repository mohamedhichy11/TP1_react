import { useState } from "react"
import './calc.css';
export default function Calculator(){
    const [exp,Setexp]=useState("")
  const value_input =(e)=>{
    let oldval=exp
     let v=e
     oldval=oldval+v
     Setexp(oldval)
  }
  const clear=()=>{
    Setexp("")
  }
  const calcu =()=>{

    try {
      Setexp(eval(exp))
      
    } catch (error) {
      Setexp("error !")
    }
      
    
  }


  return <div className="container">
        <input type="text" value={exp} />
        <div className="line1"></div>
       <div className="btns">
       <button value={1} onClick={(e) => value_input(e.target.value)} >1</button>
        <button value={2} onClick={(e)=> value_input(e.target.value)}>2</button>
        <button value={3} onClick={(e)=> value_input(e.target.value)}>3</button>
        <button value={"+"} onClick={(e)=> value_input(e.target.value)}>+</button><br />
        <button value={4} onClick={(e)=> value_input(e.target.value)}>4</button>
        <button value={5} onClick={(e)=> value_input(e.target.value)}>5</button>
        <button value={6} onClick={(e)=> value_input(e.target.value)}>6</button>
        <button value={"-"} onClick={(e)=> value_input(e.target.value)}>-</button><br />
        <button value={7} onClick={(e)=> value_input(e.target.value)}>7</button>
        <button value={8} onClick={(e)=> value_input(e.target.value)}>8</button>
        <button value={9} onClick={(e)=> value_input(e.target.value)}>9</button>
        <button value={"*"} onClick={(e)=> value_input(e.target.value)}>*</button>
        <br />
        <button value={"="}  onClick={calcu} id="ress">=</button>
        <button value={0} onClick={(e)=> value_input(e.target.value)}>0</button>
        <button value={"/"} onClick={(e)=> value_input(e.target.value)}>/</button>
        <button value={"c"} onClick={clear} id="clearbtn">c</button>
       </div>

  </div>
}