import { useState } from "react"

export default function Form() {
    const [nom,Setnom]=useState('')
    const [age,Setage]=useState('')

    const handleInputChange=()=>{
        const nominput=document.getElementById("nom").value
        Setnom(nominput)
        const ageinput=document.getElementById("age").value
        Setage(ageinput)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({
            nom:nom,
            age:age
        })
    }
    return <form >
        <br />
        <label >name :</label>
        <input type="text" id="nom" onChange={handleInputChange} /><br /><br />
        <label htmlFor="">age :</label>
        <input type="number" id="age" onChange={handleInputChange}/><br /><br />
        <input type="button" value="submit"  onClick={handleSubmit}/>
    </form>
}