import { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { ErrorMessage, Formik, Field,  } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { TASKITEMS } from "../../app/shared/TASKITEMS";
import { selectAllTasks } from "./tasksSlice";
const AddNewTaskForm = ( task, onSaveTask ) => {
  const [ modalOpen, setModalOpen ] = useState(false);
  const  [ tasks, setTasks ]  = useState([{TASKITEMS}]);
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [projectCategory, setProjectCategory] = useState("");
 
  const saveTask = (e) => {
    e.preventDefault();
    onSaveTask({ desc: desc, date: date, projectCategory : projectCategory, complete: false });

    setDesc("");
    setDate("");
    setProjectCategory('');
    setModalOpen(false);
  }
  return (
    <>
      <Button
        outline
        onClick={() => setModalOpen(true)}>
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Add New Task
      </Button>
        
        <Modal isOpen={modalOpen}>
          <ModalHeader toggle={() => setModalOpen(false)}>Add Task (Create New Task Form)
          </ModalHeader>

          <ModalBody>
            <Formik initialValues={{
              desc: '',
              date: undefined,
              projectCategory: ''
              }}
              onSubmit={saveTask}
        >
        <Form>
          <FormGroup>
            <Label htmlFor="desc">Description</Label>
            <Field
              type="text"
              name="desc"
              id="desc"
              placeholder='Enter a new task'
              className='form-control'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="date">Date</Label>
            <Field
              type="date"
              name="date"
              id="date"
              
              className='form-control'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="projectCategory">Project Category</Label>
            <Field
              as="select"
              name="projectCategory"
              id="projectCategory"
              placeholder='Select Project Category'
              className='form-control'
              value={projectCategory}
              onChange={(e) => setProjectCategory(e.target.value)}
            >
              <option>Select Project Category</option>
            </Field>
            
          </FormGroup>
        <div className="text-right">
          <Button outline type='submit' className="button dark" color='danger' toggle={() => setModalOpen(false)}>
            Save
          </Button>
        </div>
        </Form>
      </Formik>
              </ModalBody>
            </Modal>
    
      </>  
  )
  
            }
  
export default AddNewTaskForm;