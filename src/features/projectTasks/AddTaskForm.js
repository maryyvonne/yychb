import { useState } from "react";
import { Button, Form, FormGroup, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { ErrorMessage, Formik, Field,  } from 'formik';
const AddTaskForm = ( task, onSaveTask ) => {
  return (
    <Formik
        initialValues={{
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
          <Button outline type='submit' className="button dark" color='danger'>
            Save
          </Button>
        </div>
        </Form>
      </Formik>
      
  )
}

export default AddTaskForm;