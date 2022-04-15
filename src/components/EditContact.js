/* eslint-disable no-restricted-globals */
import React from "react"
import { TasksContext, TasksDispatchContext } from '../TasksContext'
import { Link, useParams } from "react-router-dom"
import { storage } from "./firebase/app"

const TYPECONTACT = [
    "personal",
    "office"
] //enum

export default function EditContact() {
    const { id } = useParams()
    const mainState = React.useContext(TasksContext)
    let findId = mainState.findIndex(element => (element.id === id))
    const dispatch = React.useContext(TasksDispatchContext)

    const [newState, setNewState] = React.useState(mainState[findId])

    function updateNewState(event) {
        setNewState(prevState => {
            return {
                ...prevState,
                [event.target.name] : (event.target.name==="isWhatsapp") ? event.target.checked : event.target.value
            }
        })
    }

    function formSubmit() {
        event.preventDefault()
        dispatch({type:"editTheMain", updatedState: newState, currId: id})
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
                        setNewState(prevState => {
                            return {
                                ...prevState,
                                profilePicture: url
                            }
                        })
                    })
            }
        )
    }
    return(
        <form>
            <input name="name" type="text" onChange={updateNewState} value={newState.name} />
            <input name="phone" type="tel" onChange={updateNewState} value={newState.phone} />
            <select name="type" onChange={updateNewState} value={newState.type} >
                {TYPECONTACT.map((item, index)=> {
                    return <option key={index} value={item}>{item}</option>
                })}
            </select>
            <input name="isWhatsapp" type="checkbox" onChange={updateNewState} checked={newState.isWhatsapp} />
            <input name="profilePicture" type="file" aria-label="profile-picture" onChange={updateImage} />
            <button onClick={uploadImage}>Upload Pic</button>
            <Link to="/" onClick={formSubmit}>Submit</Link>
        </form>
    )
}