import React, {useState} from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";

function App() {

    const initTasksArr = [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'Rect', isDone: true},
        {id: 4, title: 'Redux', isDone: false}
    ]

    const [tasksArr, setTasks] = useState(initTasksArr)

    const removeTaskFromArr = (id: number) => {
        // let filteredTasksArr = tasksArr.filter(_task => id != _task.id)
        let filteredTasksArr = tasksArr.filter(_task => {
                if (id !== _task.id) {
                    return _task
                }
            }
        )
        setTasks(filteredTasksArr)
        // console.log(filteredTasksArr)
    }

    function filterTasks(buttonName: string) {
        // console.log(tasksArr)
        let filteredTasksArr
        if (buttonName === 'Active') {
            filteredTasksArr = initTasksArr.filter(_task => _task.isDone === false)
        } else if (buttonName === 'Completed') {
            filteredTasksArr = initTasksArr.filter(_task => _task.isDone === true)
        } else {
            filteredTasksArr = initTasksArr
        }
        setTasks(filteredTasksArr)
//////
    }

    return (
        <div className="App">
            <ToDoList listTitle='Tasks'
                      tasks={tasksArr}
                      removeTaskFromArr={removeTaskFromArr}
                      filterTasks={filterTasks}
            />
        </div>
    );
}

export default App;
