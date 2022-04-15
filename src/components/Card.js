import React from "react";
import { TasksDispatchContext } from '../TasksContext';
import { Link } from "react-router-dom";

export default function Card(props) {
    const dispatch = React.useContext(TasksDispatchContext)

    return(
        <div>
            <h4>{props.name}</h4>
            <p>{props.phone}</p>
            <p>{props.type}</p>
            <p>Whatsapp: {props.isWhatsapp === true ? "Yes" : "No"}</p>
            <Link to={`/edit-contact/${props.id}`} >Edit</Link>
            <button onClick={()=>dispatch({type:"deleteFromMain", currentId: props.id})} >Delete</button>
        </div>
    )
}