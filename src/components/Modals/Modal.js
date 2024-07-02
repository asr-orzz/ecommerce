import "./Modal.css";

function Modal({show, children}) {
  if (!show) {
    return null;
  }
  return (
    <div className="modal-container">
        <div className="children" onClick={(event)=>event.stopPropagation()}>
            {children}
        </div>
    </div>
  );
}

export default Modal;
