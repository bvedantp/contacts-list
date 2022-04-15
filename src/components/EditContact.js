/* eslint-disable no-restricted-globals */
import React from "react"
import { TasksContext, TasksDispatchContext } from '../TasksContext'
import { useParams } from "react-router-dom"
import { storage } from "./firebase/app"
import GlobalStyles from "./styles/Global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileImage, faCloudArrowUp, faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { HeadLine, FormStyle, ForCenter, CustomFileSelect, UploadSpace, SubmitBtn, CheckBoxDiv, CloseBtn } from "./styles/AddContact.styled"


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
        <ForCenter>
            <GlobalStyles />
            <HeadLine>
                <h1><b>Edit</b> <br/>Contact</h1>
            </HeadLine>
            <FormStyle>
                <CloseBtn to="/" ><FontAwesomeIcon icon={faCircleXmark} /></CloseBtn>
                <label htmlFor="name">Name:</label>
                <input name="name" type="text" onChange={updateNewState} value={newState.name} />
                <label htmlFor="phone">Phone No.:</label>
                <input name="phone" type="tel" onChange={updateNewState} value={newState.phone} />
                <label htmlFor="type">Type:</label>
                <select name="type" onChange={updateNewState} value={newState.type} >
                    {TYPECONTACT.map((item, index)=> {
                        return <option key={index} value={item}>{item}</option>
                    })}
                </select>
                <CheckBoxDiv>
                    <label htmlFor="isWhatsapp">Whatsapp</label>
                    <input name="isWhatsapp" type="checkbox" onChange={updateNewState} checked={newState.isWhatsapp} />
                </CheckBoxDiv>
                <UploadSpace>
                    <CustomFileSelect htmlFor="profilePicture"><FontAwesomeIcon icon={faFileImage} /> | Update Pic</CustomFileSelect>    
                    <input id="profilePicture" name="profilePicture" type="file" aria-label="profile-picture" onChange={updateImage} />
                    <button onClick={uploadImage}><FontAwesomeIcon icon={faCloudArrowUp} /> | Upload</button>
                </UploadSpace>
                <SubmitBtn to="/" onClick={formSubmit}>Submit</SubmitBtn>
            </FormStyle>
        </ForCenter>
    )
}