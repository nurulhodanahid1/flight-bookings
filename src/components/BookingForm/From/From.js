import React from 'react';
import './From.css';
import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const From = () => {
    const { register } = useFormContext();
    return (
        <div className="font-destination">
            <Form.Label>From</Form.Label>
            <Form.Control className="from-to" {...register("from")} type="text" placeholder='Select Departure' />
            <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
        </div>
    );
};

export default From;