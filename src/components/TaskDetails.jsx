import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from './Button';

import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory;

    const handleBackButtonClick = () => {
        history.goBack();
    };

    return (
        <>
            <div className='back-button-container'>
                <Button onClick={handleBackButtonClick}>
                    Voltar
                </Button>
                <div className="task-details-container">
                    <h3>Detalhes</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, modi ipsa. Commodi perspiciatis cumque sapiente!</p>
                </div>
            </div>
        </>
    );
}
 
export default TaskDetails;