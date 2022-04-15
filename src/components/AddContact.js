/* eslint-disable no-restricted-globals */
import React from "react"
import { TasksDispatchContext } from '../TasksContext'
import uuid from 'react-uuid'
import { storage } from "./firebase/app"
import GlobalStyles from "./styles/Global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileImage, faCloudArrowUp, faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { HeadLine, FormStyle, ForCenter, CustomFileSelect, UploadSpace, SubmitBtn, CheckBoxDiv, CloseBtn } from "./styles/AddContact.styled"


const TYPECONTACT = [
    "Personal",
    "Office"
] //enum

export default function AddContact() {
    const unique_id = uuid();
    const small_id = unique_id.slice(0,10)

    const [singleContact, setSingleContact] = React.useState({
        id: small_id,
        name: "",
        phone: "",
        type: "personal",
        isWhatsapp: Boolean,
        profilePicture: ""
    })

    function updateContact(event) {
        setSingleContact(prevContact => {
            return {
                ...prevContact,
                [event.target.name] : (event.target.name==="isWhatsapp") ? event.target.checked : event.target.value
            }
        })
    }

    const dispatch = React.useContext(TasksDispatchContext)

    function formSubmit() {
        event.preventDefault()
        dispatch({type:"inputToMain", addContact: singleContact})
    }
    //console.log(singleContact)
    const [image, setImage] = React.useState("")

    function updateImage(event) {
        if(event.target.files[0]){
            setImage(event.target.files[0])
        }
    }

    function uploadImage() {
        event.preventDefault()
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error)
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url)
                        setSingleContact(prevContact => {
                            return {
                                ...prevContact,
                                profilePicture: url
                            }
                        })
                    })
            }
        )
    }

    return(
        <ForCenter>
            <GlobalStyles />
            <HeadLine>
                <h1><b>Add</b> <br/>Contact</h1>
            </HeadLine>
            <FormStyle>
                <CloseBtn to="/" ><FontAwesomeIcon icon={faCircleXmark} /></CloseBtn>
                <label htmlFor="name">Name:</label>
                <input name="name" type="text" onChange={updateContact} placeholder="Jane Doe" />
                <label htmlFor="phone">Phone No.:</label>
                <input name="phone" type="tel" onChange={updateContact} placeholder="9767456839" />
                <label htmlFor="type">Type:</label>
                <select name="type" defaultValue="personal" onClick={updateContact} >
                    {TYPECONTACT.map((item, index)=> {
                        return <option key={index} value={item}>{item}</option>
                    })}
                </select>
                <CheckBoxDiv>
                    <label htmlFor="isWhatsapp">Whatsapp</label>
                    <input name="isWhatsapp" type="checkbox" onChange={updateContact} />
                </CheckBoxDiv>
                <UploadSpace>
                    <CustomFileSelect htmlFor="profilePicture"><FontAwesomeIcon icon={faFileImage} /> | Select Pic</CustomFileSelect>
                    <input id="profilePicture" name="profilePicture" type="file" aria-label="profile-picture" onChange={updateImage} />
                    <button onClick={uploadImage}><FontAwesomeIcon icon={faCloudArrowUp} /> | Upload</button> 
                </UploadSpace>
                <SubmitBtn to="/" onClick={formSubmit}>Submit</SubmitBtn>
            </FormStyle>
        </ForCenter>
    )
}