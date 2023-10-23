import { Component, useState } from "react";

/*export default class Count extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    componentDidMount(){

        setInterval(()=>{
            this.setState(
                prevState =>{
                 return {count:prevState.count+1}
                }
             )
        },1000)
        
    }
    render(){
        return <div>
            {this.state.count}
        </div>
    }
}*/
/*export default class Coun_ter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    componentDidMount(){
       setInterval(()=> this.setState(
        prevState=> {
            return {count:prevState.count+1}
        }
    )
        ,
        1000)
        
    }
    render(){
        return <h1>il y a {this.state.count} second </h1>
    }
}*/
export default function Counter({inialeValue,step}){
    let inpu=parseInt(inialeValue)
    let stepp=parseInt(step)
    const [n,Setn]=useState(inpu)

    const plusFun=()=>{
       Setn(prevState=>{
        return prevState+Number(stepp)
       })
    }

    const MoinsFun=()=>{
        Setn(
            prevState=>{
                return prevState-stepp
            }
        )
    }
    const RestFun=()=>{
        Setn(
            prevState=>{
                return prevState=0
            }
        )
    }
    return <>
              <span> il y a {n} s  </span> <br />
               <button onClick={plusFun}>+</button>
               <button onClick={MoinsFun}>-</button>
               <button onClick={RestFun}>rest</button>
            </>
}