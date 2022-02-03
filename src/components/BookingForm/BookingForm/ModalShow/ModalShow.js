import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalShow = (props) => {
    // const {from, code, to, travelClass} = props.receivedBookingData;
    return (
        <Modal animation={false}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your Submissions
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Total Passengers: {props?.passengersdetails}</p>
        <p>You place: {props.receiveddata?.from}</p>
        <p>Your Destination: {props.receiveddata?.to}</p>
        <p>Travel class: {props.receiveddata?.travelClass}</p>
        <p>Voucher code: {props.receiveddata?.code}</p>
        <p>Departure time: {new Date(props.timedetails?.departure).toString()}</p>
        {
            props.oneway === false && <p>Return Time: {new Date(props.timedetails?.return).toString()}</p>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default ModalShow;