import React, { useContext, useEffect, useState } from 'react';
import './PassengersTravel.css'
import { Form, Accordion, Row, Col } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { PassengerContext } from '../BookingForm/BookingForm';

const PassengersTravel = (props) => {
    const { register } = useFormContext();
    const [passengersDetails, setPassengersDetails] = useContext(PassengerContext);

    let [adultNum, setAdultNum] = useState(1);
    let incAdultNum = () => {
        if (adultNum < 9 && passengers < 9) {
            setAdultNum(Number(adultNum) + 1);
        }
    };
    let decAdultNum = () => {
        if (adultNum > 1) {
            setAdultNum(adultNum - 1);
        }
    }
    let handleAdultChange = (e) => {
        setAdultNum(e.target.value);
    };

    let [youngNum, setYoungNum] = useState(0);
    let incYoungNum = () => {
        if (youngNum < 9 && passengers < 9) {
            setYoungNum(Number(youngNum) + 1);
        }
    };
    let decYoungNum = () => {
        if (youngNum > 0) {
            setYoungNum(youngNum - 1);
        }
    }
    let handleYoungChange = (e) => {
        setYoungNum(e.target.value);
    };

    let [childNum, setChildNum] = useState(0);
    let incChildNum = () => {
        if (childNum < 9 && passengers < 9) {
            setChildNum(Number(childNum) + 1);
        }
    };
    let decChildNum = () => {
        if (childNum > 0) {
            setChildNum(childNum - 1);
        }
    }
    let handleChildChange = (e) => {
        setChildNum(e.target.value);
    };

    let [infantNum, setInfantNum] = useState(0);
    let incInfantNum = () => {
        if (infantNum < 9 && passengers < 9) {
            setInfantNum(Number(infantNum) + 1);
        }
    };
    let decInfantNum = () => {
        if (infantNum > 0) {
            setInfantNum(infantNum - 1);
        }
    }
    let handleInfantChange = (e) => {
        setInfantNum(e.target.value);
    };

    const passengers = adultNum + youngNum + childNum + infantNum;
    useEffect(() => {
        setPassengersDetails(passengers);
      }, [passengers]);
    

    const [flightClass, setFlightClass] = useState("Economy");

    return (
        <>
            <Form.Label>Passengers/travel class</Form.Label>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>{passengers} passenger, {flightClass}</Accordion.Header>
                    <Accordion.Body>
                    <h4>Travel Class</h4>
                    <Form.Select {...register("class", { onChange: e => setFlightClass(e.target.value) })} aria-label="Default select example">
                        <option value="Economy">Economy</option>
                        <option value="Premium">Premium</option>
                        <option value="Upper Class">Upper Class</option>
                    </Form.Select>

                    <hr />

                    <h4>Passengers</h4>
                    <div className="passenger-d">
                        <Row>
                            <Col>
                            <p>Adult</p>
                            <small>Age 16 and over</small>
                            </Col>
                            <Col className="passenger-bg">
                                <button style={{width: "40px", height: "40px"}} className="btn btn-outline-primary" type="button" onClick={decAdultNum}>-</button>
                                <input style={{width: "40px", height: "40px"}} type="text" value={adultNum} onChange={handleAdultChange} />
                                <button style={{width: "40px", height: "40px"}} className="btn btn-outline-primary" type="button" onClick={incAdultNum}>+</button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <p>Young Adult</p>
                            <small>Age (12-15) and over</small>
                            </Col>
                            <Col className="passenger-bg">
                                <button style={{width: "40px", height: "40px"}} className="btn btn-outline-primary" type="button" onClick={decYoungNum}>-</button>
                                <input style={{width: "40px", height: "40px"}} type="text" value={youngNum} onChange={handleYoungChange} />
                                <button style={{width: "40px", height: "40px"}} className="btn btn-outline-primary" type="button" onClick={incYoungNum}>+</button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <p>Child</p>
                            <small>Age (2-11) and over</small>
                            </Col>
                            <Col className="passenger-bg">
                                <button style={{width: "40px", height: "40px"}} className="btn btn-outline-primary" type="button" onClick={decChildNum}>-</button>
                                <input style={{width: "40px", height: "40px"}} type="text" value={childNum} onChange={handleChildChange} />
                                <button style={{width: "40px", height: "40px"}} className="btn btn-outline-primary" type="button" onClick={incChildNum}>+</button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <p>Infant</p>
                            <small>Age up to 2</small>
                            </Col>
                            <Col className="passenger-bg">
                                <button style={{width: "40px", height: "40px"}} className="btn btn-outline-primary" type="button" onClick={decInfantNum}>-</button>
                                <input style={{width: "40px", height: "40px"}} type="text" value={infantNum} onChange={handleInfantChange} />
                                <button style={{width: "40px", height: "40px"}} className="btn btn-outline-primary" type="button" onClick={incInfantNum}>+</button>
                            </Col>
                        </Row>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default PassengersTravel;