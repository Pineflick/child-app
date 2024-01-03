import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './stylesheet.css'
import {Form, Button} from 'react-bootstrap';

const ChildRegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: 'male',
    immunizations: 'BCG',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.toUpperCase(),
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate form data 
    if (!formData.firstName || !formData.lastName || !formData.age) {
      alert('Please fill in all mandatory fields.');
      return;
    }

    // Save child to local storage

    const newChild = {
      id: Date.now(),
      ...formData,
    };

    const storedChildren = JSON.parse(localStorage.getItem('children')) || [];
    localStorage.setItem('children', JSON.stringify([...storedChildren, newChild]));

    // Clear the form

    setFormData({
      firstName: '',
      lastName: '',
      age: '',
      gender: 'male',
      immunizations: 'BCG',
    });

    // Navigate to the children list page

    navigate('/children-list');
  };

  return (
    
    
<div className='form-body'>
    <h1>Register Child</h1>
        <div className='form-container'>   
        
          
    <Form className='form' onSubmit={handleFormSubmit}>
          
       <Form.Group className="mb-3" value={formData.firstName} onChange={handleInputChange}>
            <Form.Label>first Name</Form.Label>
            <Form.Control type="text" placeholder="first name" name="firstName"/>
          </Form.Group>

          <Form.Group className="mb-3"value={formData.lastname} onChange={handleInputChange}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="last name" name="lastName"/>
          </Form.Group>


          <Form.Group className="mb-3"  value={formData.age} onChange={handleInputChange}>
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" placeholder="Age" name="age" />
          </Form.Group>

          <Form.Group className="mb-3"  value={formData.gender} onChange={handleInputChange}>
            <Form.Select aria-label="Default select example">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox" value={formData.immunizations} onChange={handleInputChange}>
            <Form.Select aria-label="Default select example">
              <option value="BCG">BCG</option>
              <option value="MMR">MMR</option>
              <option value="DTaP">DTap</option>
              <option value="RV">RV</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      
    </div>  
  </div>
  );
};

export default ChildRegistrationForm;
