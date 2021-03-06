import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';

import './App.css';

const App = () => {
  //variavel normal usando const não é atualizada ao clicar
  // let msg = 'Hello world!!!';
  //porém usando o state é possivel atualizar clicando
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false,
    },
    {
      id: '2', 
      title: 'Prova de Cálculo 2',
      completed: false,
    },
  ]);

  /* função que realiza a conclusão de uma tarefa */
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) 
        return { ...task, completed: !task.completed}

        return task;
      });

    setTasks(newTasks);
  }

  /* função que exclui uma tarefa */
  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  /* função que adiciona uma nova tarefa */
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      }
    ];

    setTasks(newTasks);
  }

  return (
		<Router>
			<div className="container">
				<Header />
				<Route
					path="/"
					exact
					render={() => (
						<>
							<AddTask handleTaskAddition={handleTaskAddition} />
							<Tasks
								tasks={tasks}
								handleTaskClick={handleTaskClick}
								handleTaskDeletion={handleTaskDelete}
							/>
						</>
					)}
				/>
				<Route path="/:taskTitle" exact component={TaskDetails} />
			</div>
		</Router>
	);
}
export default App;