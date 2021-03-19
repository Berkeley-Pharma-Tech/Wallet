import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';

const MetamaskNotification = ({ metamaskInstalled }) => {
    const [show, setShow] = useState(true);
    
    if (metamaskInstalled) {
        if (show) {
            return (
              <Alert variant="success" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Seems like you have MetaMask installed and ready to go!</Alert.Heading>
              </Alert>
            );
          }
          //return <Button onClick={() => setShow(true)}>Show Message</Button>;
          return <></>
        } else {
            return (
                <Alert variant="warning">
                    <Alert.Heading>Please install MetaMask first.</Alert.Heading>
                        <Alert.Link href="https://metamask.io/" target="_blank">MetaMask</Alert.Link> is a crypto wallet and gateway to blockchain apps.
                    <hr />
                    <p className="mb-0">
                        Please refresh this page after installing MetaMask. 
                    </p>
                </Alert>
            )
            
        }
        
        
    }


export default MetamaskNotification
