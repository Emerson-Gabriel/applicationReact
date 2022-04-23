import React from 'react';
import {CgClose, CgInfo} from "react-icons/cg"

import './Task.css';

const Task = ({task, handleTaskClick, handleTaskDelete}) => {
    return (
        <div className="task-container" style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}} >
            <div className='task-title' onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            {/* <span className={task.completed ? 'badge-success' : 'badge-danger'}>
                {task.completed ? "Completa" : "Incompleta"}
            </span> */}

            <div className='buttons-container'>
                <button className='remove-task-button' onClick={() => handleTaskDelete(task.id)}>
                    <CgClose />
                </button>
                <button className='see-task-details-button' onClick={() => handleTaskDelete(task.id)}>
                    <CgInfo />
                </button>
            </div>
        </div>
    );
}
export default Task;