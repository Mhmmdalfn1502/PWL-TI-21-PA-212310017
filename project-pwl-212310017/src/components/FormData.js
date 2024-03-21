import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const FormData = () => {

  const [formData, setFormData] = useState({
    npm:'',
    firstName:'',
    middleName:'',
    lastName:'',
    birthdate:''
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.npm.length !== 10 || isNaN(formData.npm) ) {
<<<<<<< HEAD
      alert('NPM harus terdiri dari 10 digit numeri yac');
      return;
    }
    if (!formData.firstName || !formData.lastName || !formData.birthdate) {
      alert('Semua data wajib diisi kecuali Middle Name ya');
=======
      alert('NPM harus terdiri dari 10 digit numeric');
      return;
    }
    if (!formData.firstName || !formData.lastName || !formData.birthdate) {
      alert('Semua data wajib diisi kecuali Middle Name');
>>>>>>> 6841c90316465281c2302875d7c9d4d2e8477870
      return;
    }

    const dob = new Date(formData.birthdate);
    const age = Math.floor((new Date() -dob) / (365.25 * 24 * 60 * 60 * 1000));

    setShowModal(true);
  };

  const formGroup = {
    marginBottom:"10px"
  }

  const formLabel = {
    fontWeight: "500",
  }

  return (
<div className='p-5 m-5 border border-3 rounded-5'>
      <h1 className='fw-bold text-center mb-5'>Form Data</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group style={formGroup} controlId="npm">
          <Form.Label style={formLabel}>NPM</Form.Label>
          <Form.Control
            type="number"
            name="npm"
            value={formData.npm}
            onChange={handleChange}
            min={0}
          />
        </Form.Group>
        <Form.Group style={formGroup} controlId="firstName">
          <Form.Label style={formLabel}>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group style={formGroup} controlId="middleName">
          <Form.Label style={formLabel}>Middle Name</Form.Label>
          <Form.Control
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group style={formGroup} controlId="lastName">
          <Form.Label style={formLabel}>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group style={formGroup} controlId="birthdate">
          <Form.Label style={formLabel}>Birthdate</Form.Label>
          <Form.Control
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {/* Hasil Ouput atau Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Hasil Ouput</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>NPM: {formData.npm}</p>
          <p>Fullname: {formData.firstName} {formData.middleName && formData.middleName + ' '} {formData.lastName}</p>
          <p>Age: {formData.birthdate && Math.floor((new Date() - new Date(formData.birthdate)) / (365.25 * 24 * 60 * 60 * 1000))} years old</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FormData;
