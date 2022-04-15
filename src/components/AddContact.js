/* eslint-disable no-restricted-globals */
import React from "react"
import { TasksDispatchContext } from '../TasksContext'
import { Link } from "react-router-dom"
import uuid from 'react-uuid'
import { storage } from "./firebase/app"

const TYPECONTACT = [
    "personal",
    "office"
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
                       // console.log(url)
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
        <form>
            <input name="name" type="text" onChange={updateContact} />
            <input name="phone" type="tel" onChange={updateContact} />
            <select name="type" defaultValue="personal" onClick={updateContact} >
                {TYPECONTACT.map((item, index)=> {
                    return <option key={index} value={item}>{item}</option>
                })}
            </select>
            <input name="isWhatsapp" type="checkbox" onChange={updateContact} />
            <input name="profilePicture" type="file" aria-label="profile-picture" onChange={updateImage} />
            <button onClick={uploadImage}>Upload Pic</button>
            <Link to="/" onClick={formSubmit}>Submit</Link>
        </form>
    )
}