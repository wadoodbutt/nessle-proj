import React, { useState, useEffect } from 'react'

const TaskList = () => {

    const [tasks, setTasks] = useState([
        'Create a Task',
    ])

    const [newTask, setNewTask] = useState('')

    const [addVisible, setAddVisible] = useState(false)

    const handleDeleteTask = (idx) => {
        setTasks((tasks) => tasks.filter((_, index) => index !== idx))
    }

    const handleAddMenu = () => {
        setAddVisible(true)
    }

    const handleAddTask = () => {
        setTasks([...tasks, newTask])
        setAddVisible(false)
    }

    const handleClearTasks = () => {
        setTasks([
            'Create a Task',
        ])
    }

    return (
        <div>
            <div className='task-container'>
                {tasks.map((item, index) => (
                    <div className='paper-list'>
                        <input className='check-button' type='checkbox' />
                        <h1 className='task-text'>{item}</h1>
                        <button className='delete-button' onClick={() => handleDeleteTask(index)}>X</button>
                    </div>
                ))}
            </div>

            <div className='edit-container'>
                <button className='add-button' onClick={handleAddMenu}>Add New Task</button>
                <button className='clear-button' onClick={handleClearTasks}>Clear All</button>
            </div>

            {addVisible && (
                <div className='add-task-menu'>
                    <h1>Add Task</h1>
                    <input type='text' value={newTask} onChange={(event) => setNewTask(event.target.value)}/>
                    <button onClick={handleAddTask}>Add Task!</button>
                </div>
            )}
        </div>
    )
}

export default TaskList