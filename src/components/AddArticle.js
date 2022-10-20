import React, {useState, useEffect, useReducer, useContext} from "react";
import Modal from './Modal.js';
import reducerPosts from "../components/reducers/reducerPosts.js";
import reducerUsers from "./reducers/reducerUsers.js";
import reducerPhotos from "./reducers/reducerPhotos.js";
import {Context} from './context'

function AddArticle({updateData, content, typeOfContent}) {
    const [isModal, setModal] = useState(false);
    const [titleValue, setTitleValue] = useState('')
    const [contentValue, setContentValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')


    const [state, setState] = useState([])
    const [statePosts, dispatchPosts] = useReducer(reducerPosts, [])
    const [stateUsers, dispatchUsers] = useReducer(reducerUsers, [])
    const [statePhotos, dispatchPhotos] = useReducer(reducerPhotos, [])

    const AddArticles = () => {
        switch(typeOfContent) {
            case "posts":
                dispatchPosts({
                    type: 'add',
                    title: titleValue,
                    body: contentValue,
                });
            case "users":
                dispatchUsers({
                    type: 'add',
                    title: titleValue,
                    email: emailValue,
                    phone: phoneValue,
                }) 
            case "photos":
                dispatchPhotos({
                    type: 'add',
                    title: titleValue,
                    body: contentValue,
                })     
        }
    }

    useEffect(() => {
        switch(typeOfContent) {
            case "posts":
                setState(statePosts);
                break;
            case "users":
                setState(stateUsers);
                break;
            case "photos":
                setState(statePhotos);
            break;
    
        }
    }, [state, stateUsers, statePhotos])

    useEffect(() => {
        handleTitleChange()
    }, [state])

    function handleTitleChange() {
        updateData(state)
    }


    return (
        <>
            <button className="button" onClick={() => setModal(true)}>Add Article</button>
            <Modal
                isVisible={isModal}

                title= {<textarea className="addModal-title" onChange={(e) => {
                    setTitleValue(e.target.value)
                }} placeholder="Your Title"></textarea>}

                content = {
                    <div onChange={(e) => {
                     setContentValue(e.target.value)
                     setEmailValue(e.target.parentNode.firstChild.value)
                     setPhoneValue(e.target.parentNode.lastChild.value)
                 }}>
                    {content}
                    </div>
                    }

                onClose={() => setModal(false)}

                create = {<button className="button" onClick={AddArticles}>Create</button>}
            />

        </>
    )
}

export default AddArticle;