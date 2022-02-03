import React, { useState, createContext } from 'react';
import './BookingForm.css'
import { Col, Row, Form } from 'react-bootstrap';
import { useForm, FormProvider } from "react-hook-form";
import From from '../From/From';
import Voucher from '../Voucher/Voucher';
import PassengersTravel from '../PassengersTravel/PassengersTravel';
import To from '../To/To';
import DepartureReturn from '../DepartureReturn/DepartureReturn';
import ModalShow from './ModalShow/ModalShow';

export const PassengerContext = createContext();
export const TimeContext = createContext();

const BookingForm = () => {
    const [passengersDetails, setPassengersDetails] = useState();
    const [timeDetails, setTimeDetails] = useState();
    const [receivedBookingData, setReceivedBookingData] = useState();
    const methods = useForm();
    const onSubmit = (data, e) => {
        const bookingData = {
            from: data.from,
            to: data.to,
            code: data.code,
            travelClass: data.class,
        };
        setReceivedBookingData(bookingData);
        e.preventDefault();
    };

    const [oneWay, setOneWay] = useState(false);
    const [round, setRound] = useState(false);
    const handleOneWay = () => {
        setOneWay(true);
        setRound(false);
    }
    const handleRound = () => {
        setRound(true);
        setOneWay(false);
    }

    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="booking-form">
            <h1>Flight deals with Virgin Atlantic</h1>
            <div className="trip-type">
                <div className="form-check">
                    <input onClick={handleOneWay} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">One Way</label>
                </div>
                <div className="form-check">
                    <input onClick={handleRound} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">Round Trip</label>
                </div>
            </div>
            <FormProvider {...methods} >
                <Form onSubmit={methods.handleSubmit(onSubmit)} >
                    <Row>
                        <Col sm={4}><From></From></Col>
                        <Col sm={4}><To></To></Col>
                        <Col sm={4}>
                            <TimeContext.Provider value={[timeDetails, setTimeDetails]}>
                                <DepartureReturn onSubmit={onSubmit} oneWay={oneWay} round={round}></DepartureReturn>
                            </TimeContext.Provider>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <PassengerContext.Provider value={[passengersDetails, setPassengersDetails]}>
                                <PassengersTravel></PassengersTravel>
                            </PassengerContext.Provider>
                        </Col>
                        <Col sm={4}><Voucher></Voucher></Col>
                        <Col sm={4}><input className="submit-btn" type="submit" onClick={() => setModalShow(true)} /></Col>
                    </Row>
                </Form>
            </FormProvider>

            <ModalShow
                show={modalShow}
                onHide={() => setModalShow(false)}
                receiveddata={receivedBookingData}
                passengersdetails={passengersDetails}
                timedetails={timeDetails}
                oneway={oneWay}
            ></ModalShow>
        </div>
    );
};

export default BookingForm;