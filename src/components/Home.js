import React from "react"
import { TasksContext } from '../TasksContext';
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Home() {
    const currentState = React.useContext(TasksContext)

    // const contactList = currentState.map((item,index) => {
    //     return(
    //         <Card key={index} id={item.id} name={item.name} phone={item.phone} type={item.type} isWhatsapp={item.isWhatsapp} />
    //     )
    // })

    return(
        <div>
            <h1>Home</h1>
            {(Array.isArray(currentState) && currentState.length) ? currentState.map((item,index) => {
                return(
                    <Card key={index} id={item.id} name={item.name} phone={item.phone} type={item.type} isWhatsapp={item.isWhatsapp} profilePicture={item.profilePicture} />
                )
            }) : <p>No Contacts Saved</p>}
            
            <Link to="/add-contact">Add Contact</Link>
        </div>
    )
}