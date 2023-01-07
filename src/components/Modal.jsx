import { useEffect, useRef } from 'react';

const Modal = ({
  name, buttonText, icon, title, children, close, btnClass,
}) => {
  const closeRef = useRef(null);

  useEffect(() => {
    if (close) {
      closeRef.current?.click();
    }
  }, [close]);
  return (
    <div className={name}>
      <button
        type="button"
        className={`btn ${btnClass}`}
        data-bs-toggle="modal"
        data-bs-target={`#${name}`}
      >
        <div className="d-flex justify-content-between align-items-center">
          <span className="pb-1">{icon}</span>
          <span className="ms-1">
            {buttonText}
          </span>
        </div>
      </button>
      <div
        className="modal fade modal-lg"
        id={name}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                ref={closeRef}
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
