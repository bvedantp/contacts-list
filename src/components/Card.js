import React from "react";
import { TasksDispatchContext } from '../TasksContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { CardArea, ProfilePic, NameStyle, PhoneStyle, Icon, TypeStyle, WhatsStyle, TagsArea, CRUDArea, LinkStyled } from "./styles/Card.styled";

export default function Card(props) {
    const dispatch = React.useContext(TasksDispatchContext)

    return(
        <CardArea>
            <ProfilePic src={props.profilePicture} alt="fire" />
            <NameStyle>{props.name}</NameStyle>
            <PhoneStyle><Icon icon={faMobileScreenButton} /> +91 {props.phone}</PhoneStyle>
            <TagsArea>
                <TypeStyle>{props.type}</TypeStyle>
                <WhatsStyle style={props.isWhatsapp === true ? {color: "#FFD42F"} : {color:"#b4b3b3"}} ><FontAwesomeIcon icon={faWhatsapp} /></WhatsStyle>    
            </TagsArea>
            <CRUDArea>
                <LinkStyled to={`/edit-contact/${props.id}`} >Edit</LinkStyled>
                <button onClick={()=>dispatch({type:"deleteFromMain", currentId: props.id})} ><Icon icon={faTrash} /></button>
            </CRUDArea>
        </CardArea>
    )
}