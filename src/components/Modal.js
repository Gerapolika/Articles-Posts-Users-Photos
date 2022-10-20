import React from "react";
import '../Modal.css';

function Modal ({ isVisible = false, title, content, email, phone, onClose, create, footer }) {
    const keydownHandler = ({ key }) => {
        switch (key) {
          case 'Escape':
            onClose();
            break;
          default:
        }
      };
    
      React.useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
      });
    
    
    return !isVisible ? null : (
      <div className="modal" onClick={onClose}>
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            {title}
            <span className="modal-close" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            {content}
            {email}
            {phone}
            {create}
          </div>
          <>
             {footer}
          </>
        </div>
      </div>
    );
  };

export default Modal;