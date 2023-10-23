/*export default function Les_Donnes(props) {
         let age=20;
         return <>
         <h1>{props.nameUse} {age>=18 ? "is adult":"is minor"}</h1>
         </>
}*/

import { Component } from "react";

export default class Personne extends Component{ 
print_empl=function () {
    return  this.props.table_per.map(
        function (per) {
            return <li>{per}</li>
        }
    )
}
    render(){
     
        return  <>
        <h1 className="h1">employer :</h1>
        <ul>
              {this.print_empl()}
        </ul>
        </>
    }
    }
