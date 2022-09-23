import React, { useState } from 'react';
import { manageRequest } from '../../../Api/admins/requests/manageRequests';
import Modal from '../../../components/Modal';

const RequestModal = (props) => {
  const { request, setAnswered } = props;

  const [message, setMessage] = useState('');
  const [close, setClose] = useState(false);
  const [alert, setAlert] = useState('');
  const messageData = (e) => {
    setMessage(e.target.value);
  };

  const answerRequest = (e) => {
    const data = {
      reservation_id: e.target.id,
      decision: e.target.value,
      text: message,
    };
    setMessage('');
    if (message === '') {
      const alertMessage = 'Please enter a message';
      setAlert(alertMessage);
    } else {
      manageRequest({ ...data });
      setClose(true);
      setAnswered(true);
    }
  };

  return (
    <div>
      <Modal
        name={`editHall${request.id}`}
        icon=""
        buttonText="Manage"
        title=""
        close={close}
        btnClass="btn btn-outline-success btn-sm px-3"
      >
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={request.hall.image} className="img-fluid rounded-start h-100" alt={request.hall.name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  {request.user.first_name}
                  {' '}
                  {request.user.last_name}
                </h5>
                <h6>{request.user.email}</h6>
                <p className="card-text">
                  Requested reservation Date:
                  {' '}
                  {request.reserve_date}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Hall cost:
                    {' '}
                    {request.hall.cost}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <form>
          <div className="mb-3">
            <textarea className="form-control" id="message-text" value={message} onChange={(e) => messageData(e)} placeholder="Insert your message" />
            <small className="text-danger">{alert}</small>
          </div>
        </form>
        <div className="text-center d-flex justify-content-center gap-3 mb-2">
          <button type="button" className="btn btn-success" value="Confirm" id={request.id} onClick={(e) => answerRequest(e)}>Approve</button>
          <button type="button" className="btn btn-danger" value="Refuse" id={request.id} onClick={(e) => answerRequest(e)}>Reject</button>
        </div>
      </Modal>
    </div>
  );
};

export default RequestModal;
