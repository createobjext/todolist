import React from "react";
import {debuglog, log} from "util";
import {equal} from "assert";

type tasksArr = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    listTitle: String
    tasks: Array<tasksArr>
    // function delete
    // removeTaskFromArr: void
    removeTaskFromArr: (id: number) => void
    filterTasks: (buttonName: string) => void
}

export function ToDoList(props: PropsType) {

    return (
        <div>
            {/*<h3>What to learn</h3>*/}
            <h3>{props.listTitle}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>

                {
                    props.tasks.map(_task => <li key={_task.id}>
                        <input type='checkbox' checked={_task.isDone}></input><span>{_task.title}</span>
                        {/*<button onClick={() => alert(_task.id)}>X</button>*/}
                        <button onClick={() => props.removeTaskFromArr(_task.id)}>X</button>
                    </li>
                    )
                }

            </ul>
            <div>
                <button onClick={() => props.filterTasks('All')}>All</button>
                <button onClick={() => props.filterTasks('Active')}>Active</button>
                <button onClick={() => props.filterTasks('Completed')}>Completed</button>
            </div>
        </div>
    )
}