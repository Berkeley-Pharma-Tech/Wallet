import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';

const WarningMessage = ({ header, message }) => {
    
    return (
        <Alert variant="warning">
            <Alert.Heading>{header}</Alert.Heading>
            <hr />
            <p className="mb-0">
                {message}
            </p>
        </Alert>
    )
    
    }


export default WarningMessage
