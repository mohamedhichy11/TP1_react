/*import { Component } from "react";
export default class Fruit  extends Component{
    
    render(){
        return<>
        <h1>list Fruit :</h1>
        <ul>
            <li>melon</li>
            <li>orange</li>
            <li>pomme</li>
            <li>ananas</li>
        </ul>
        </>
    }
}*/
export default function Fruits({fruits}) {
    const print_fruit= function () {
        return fruits.map(function (frui) {
            return <li>{frui}</li>
        })
    }

    return <>
    <h1>liste fruits :</h1>
    <ul>
        {print_fruit()}
    </ul>
    </>
}
    