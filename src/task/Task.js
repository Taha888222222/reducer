import React from 'react'
import { useDispatch } from 'react-redux'
import Edit from './Edit'
import { Button } from 'react-bootstrap'
import { deletetask, donetask } from '../JS/Action'

const Task = ({task}) => {
    const dispatch = useDispatch()
  return (
    <div>
        <span className={task.isDone ? "done" : null}>{task.text}</span>
        <Edit task={task}/>
        <Button variant="primary" onClick={()=>dispatch(deletetask(task.id))}> DELETE</Button>
        <Button variant="primary" onClick={()=>dispatch(donetask(task.id))}>{task.isDone ? "unDone" : "Done"}</Button>
    </div>
  )
}

export default Task