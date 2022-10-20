import React, {useState, useEffect, useReducer} from "react";
import Modal from './Modal.js';
import reducerPosts from "./reducers/reducerPosts.js";
import reducerUsers from "./reducers/reducerUsers.js";
import reducerPhotos from "./reducers/reducerPhotos.js";


function Delete({id, typeOfContent, updateData}) {
    const [isModal, setModal] = useState(false);

    const [state, setState] = useState([])
    const [statePosts, dispatchPosts] = useReducer(reducerPosts, [])
    const [stateUsers, dispatchUsers] = useReducer(reducerUsers, [])
    const [statePhotos, dispatchPhotos] = useReducer(reducerPhotos, [])

    const [permission, setPermission] = useState(false)



    const DeleteArticles = () => {
        setPermission(true);
        switch(typeOfContent) {
            case "posts":
                dispatchPosts({
                    type: 'delete',
                    articleId: id,
                });
            case "users":
                dispatchUsers({
                    type: 'delete',
                    articleId: id,
                }) 
            case "photos":
                dispatchPhotos({
                    type: 'delete',
                    articleId: id,
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
    }, [statePosts, stateUsers, statePhotos])

    useEffect(() => {
        Change()
    }, [state])

    function Change() {
        updateData(state, permission)
    }


    return (
        <>
            <button className="button" onClick={() => setModal(true)}>Delete</button>
            <Modal
                isVisible={isModal}
                title={<h3 className="modal-title">Do you really want to delete this card?</h3>}
                footer={
                    <div className="modal-footer">
                <button className="button" onClick={DeleteArticles}>Yes</button>
                <button className="button" onClick={() => setModal(false)}>No</button>
                    </div>            
                }   
                onClose={() => setModal(false)}
            />
        </>
    )
}

export default Delete;