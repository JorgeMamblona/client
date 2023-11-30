import taskService from '../../../services/tasks.services'

import TaskCard from '../../TaskComponents/TaskCard'

import { useEffect, useState } from 'react'

import './ToDoState.css'

const ToDoState = ({ project_id }) => {

    const [taskList, setTaskList] = useState()

    const loadTask = () => {

        taskService
            .getProjectTasksByState(project_id, 'TODO')
            .then(({ data }) => {
                setTaskList(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {

        loadTask()

    }, [project_id])

    return (
        !taskList
            ?
            <></>
            :
            <>
                <div className="task-col to-do text-center">
                    <div className="title">
                        <h2>TO DO</h2>

                    </div>
                    <div className="tasks-scroll">
                        {
                            taskList.map(elm => <TaskCard key={elm._id} {...elm} />)
                        }
                    </div>
                </div>
            </>
    )
}

export default ToDoState