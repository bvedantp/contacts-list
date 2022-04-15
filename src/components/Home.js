import React from "react"
import { TasksContext } from '../TasksContext';
import Card from "./Card";
import GlobalStyles from "./styles/Global";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { HeadLine, Hero, NoContact, AddContactBtn } from "./styles/Home.styled";

export default function Home() {
    const currentState = React.useContext(TasksContext)

    return(
        <div>
            <GlobalStyles />
            <HeadLine>
                <h1><b>List of</b> <br/>Contacts</h1>
            </HeadLine>
            <Hero>
                {(Array.isArray(currentState) && currentState.length) ? currentState.sort((a, b) => a.name.localeCompare(b.name))
                .map((item,index) => {
                    return(
                        <Card key={index} id={item.id} name={item.name} phone={item.phone} type={item.type} isWhatsapp={item.isWhatsapp} profilePicture={item.profilePicture} />
                    )
                }) : <NoContact to="/add-contact" >No Contacts</NoContact>}
                
                <AddContactBtn to="/add-contact"><FontAwesomeIcon icon={faCirclePlus} /></AddContactBtn>
            </Hero>
        </div>
    )
}