import React, {useState, useEffect} from "react";
import Modal from './Modal.js';

function View(props) {
    const [isModal, setModal] = useState(false);

    return (
        <>
            <button className="button" onClick={() => setModal(true)}>View</button>
            <Modal
                isVisible={isModal}
                title={<h3 className="modal-title">{props.title}</h3>}
                content={props.content}
                footer={<button>Cancel</button>}
                onClose={() => setModal(false)}
            />
        </>
    )
}

export default View;