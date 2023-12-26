import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import Contests from './Contests'
import { useState } from 'react'

export const Modall = () => {
 const [show,setShow]=useState(false)
  const handleShow=()=>{setShow(!show)}

  
  return (
    <div>
     <Button onClick={()=>{handleShow()}}>Open Modal</Button>
     <Modal show={show} >
    <Modal.Header>CONTEST LIST:
    <Button onClick={()=>{handleShow()}}>
       &times;
      </Button>
    </Modal.Header>
    <Modal.Body>
      <Contests></Contests>
    </Modal.Body>
    <Modal.Footer>
      
    </Modal.Footer>
    </Modal> 
    </div>
  )
}
