import { Button, Container, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import SubHeader from '../components/SubHeader'
import TasksList from '../features/tasks/TasksList'
import { useState } from 'react';
import AddNewTaskForm from '../features/tasks/AddNewTaskForm';

const TasklistPage = () => {
  
  return (
    <div style={{
      padding: '50px 0px 0px 370px'
    }}>
      <Sidebar />
      <Container>
        <Row>
          <Outlet />
          <SubHeader current='Tasklist' />
        </Row>
        
        <Row>
          <AddNewTaskForm />
        </Row>
        <Row>This area should always show task list<TasksList /></Row>
      </Container>

    </div>
  )
}

export default TasklistPage