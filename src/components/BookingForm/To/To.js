import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const To = () => {
    const { register } = useFormContext();
    return (
        <div className="font-destination">
            <Form.Label>To</Form.Label>
            <Form.Control className="from-to" {...register("to")} type="text" placeholder="Select destination" />
            <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
        </div>
    );
};

export default To;