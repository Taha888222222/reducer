import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtask } from '../JS/Action'
import { Button, Form } from 'react-bootstrap'

const Addtask = () => {
    const [text,setText] = useState("")
    const dispatch = useDispatch()

    const handleAdd =(e) =>{
        e.preventDefault()
        if (text) {
            dispatch(addtask({id : Math.random() ,text , isDone : false}))
        }
        else {
            alert("can not addan emty task")
        }
    }
  return (
    <div>
        <Form  onSubmit={handleAdd}>
            <Form.Control placeholder="Enter Task Title" onChange={(e)=> setText(e.target.value)} value={text}/>
            <Button variant="primary" type="submit" onClick={handleAdd}>
                §ADD§
            </Button>
        </Form>
    </div>
  )
}

export default Addtask