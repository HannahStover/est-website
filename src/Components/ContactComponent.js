import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Checkbox } from '@material-ui/core';

function Contact() {
  const methods = useForm();
  const { handleSubmit, control, reset } = methods;
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        as={TextField}
        name='TextField'
        control={control}
        defaultValue=''
      />

      <Controller
        as={<Checkbox name='SomeName' />}
        name='Checkbox'
        value='test'
        control={control}
        defaultValue={false}
      />

      <button>Submit</button>
    </form>
  );
}

// import React, { Component } from 'react';
// import { Button, Label, Row, Col } from 'reactstrap';
// import { Control, Form, Errors } from 'react-redux-form';
// import { Fade } from 'react-animation-components';

// const required = val => val && val.length;
// const maxLength = len => val => !val || val.length <= len;
// const minLength = len => val => val && val.length >= len;
// const isNumber = val => !isNaN(Number(val));
// const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

// class Contact extends Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(values) {
//     console.log('Current State is: ' + JSON.stringify(values));
//     this.props.postFeedback(values);
//     this.props.resetFeedbackForm();
//   }

//   render() {
//     return (
//       <Fade in>
//         <div>
//           <div className='row row-content'>
//             <div className='col-12'>
//               <h2>Contact</h2>
//             </div>
//             <div className='col-12 col-md-9 mb-4 pb-4'>
//               <Form
//                 model='feedback'
//                 onSubmit={values => this.handleSubmit(values)}
//               >
//                 <Row className='form-group'>
//                   <Label htmlFor='firstname' md={2}>
//                     First Name
//                   </Label>
//                   <Col md={10}>
//                     <Control.text
//                       model='.firstname'
//                       id='firstname'
//                       name='firstname'
//                       placeholder='First Name'
//                       className='form-control'
//                       validators={{
//                         required,
//                         minLength: minLength(3),
//                         maxLength: maxLength(15)
//                       }}
//                     />
//                     <Errors
//                       className='text-danger'
//                       model='.firstname'
//                       show='touched'
//                       messages={{
//                         required: 'Required',
//                         minLength: 'Must be greater than 2 characters',
//                         maxLength: 'Must be 15 characters or less'
//                       }}
//                     />
//                   </Col>
//                 </Row>
//                 <Row className='form-group'>
//                   <Label htmlFor='lastname' md={2}>
//                     Last Name
//                   </Label>
//                   <Col md={10}>
//                     <Control.text
//                       model='.lastname'
//                       id='lastname'
//                       name='lastname'
//                       placeholder='Last Name'
//                       className='form-control'
//                       validators={{
//                         required,
//                         minLength: minLength(3),
//                         maxLength: maxLength(15)
//                       }}
//                     />
//                     <Errors
//                       className='text-danger'
//                       model='.lastname'
//                       show='touched'
//                       messages={{
//                         required: 'Required',
//                         minLength: 'Must be greater than 2 characters',
//                         maxLength: 'Must be 15 characters or less'
//                       }}
//                     />
//                   </Col>
//                 </Row>
//                 <Row className='form-group'>
//                   <Label htmlFor='telnum' md={2}>
//                     Contact Tel.
//                   </Label>
//                   <Col md={10}>
//                     <Control.text
//                       model='.telnum'
//                       id='telnum'
//                       name='telnum'
//                       placeholder='Tel. Number'
//                       className='form-control'
//                       validators={{
//                         required,
//                         minLength: minLength(3),
//                         maxLength: maxLength(15),
//                         isNumber
//                       }}
//                     />
//                     <Errors
//                       className='text-danger'
//                       model='.telnum'
//                       show='touched'
//                       messages={{
//                         required: 'Required',
//                         minLength: 'Must be greater than 2 numbers',
//                         maxLength: 'Must be 15 numbers or less',
//                         isNumber: 'Must be a number'
//                       }}
//                     />
//                   </Col>
//                 </Row>
//                 <Row className='form-group'>
//                   <Label htmlFor='email' md={2}>
//                     Email
//                   </Label>
//                   <Col md={10}>
//                     <Control.text
//                       model='.email'
//                       id='email'
//                       name='email'
//                       placeholder='Email'
//                       className='form-control'
//                       validators={{
//                         required,
//                         validEmail
//                       }}
//                     />
//                     <Errors
//                       className='text-danger'
//                       model='.email'
//                       show='touched'
//                       messages={{
//                         required: 'Required',
//                         validEmail: 'Invalid Email Address'
//                       }}
//                     />
//                   </Col>
//                 </Row>
//                 <Row className='form-group'>
//                   <Col md={{ size: 6, offset: 2 }}>
//                     <div className='form-check'>
//                       <Label check>
//                         <Control.checkbox
//                           model='.agree'
//                           name='agree'
//                           className='form-check-input'
//                         />{' '}
//                         <strong>How may I contact you?</strong>
//                       </Label>
//                     </div>
//                   </Col>
//                   <Col md={{ size: 3, offset: 1 }}>
//                     <Control.select
//                       model='.contactType'
//                       name='contactType'
//                       className='form-control'
//                     >
//                       <option>Tel.</option>
//                       <option>Email</option>
//                     </Control.select>
//                   </Col>
//                 </Row>
//                 <Row className='form-group'>
//                   <Label htmlFor='message' md={2}>
//                     Your Feedback
//                   </Label>
//                   <Col md={10}>
//                     <Control.textarea
//                       model='.message'
//                       id='message'
//                       name='message'
//                       rows='12'
//                       className='form-control'
//                     />
//                   </Col>
//                 </Row>
//                 <Row className='form-group mb-4 pb-4'>
//                   <Col md={{ size: 10, offset: 2 }}>
//                     <Button type='submit' color='primary'>
//                       Send
//                     </Button>
//                   </Col>
//                 </Row>
//               </Form>
//             </div>
//           </div>
//         </div>
//       </Fade>
//     );
//   }
// }

export default Contact;
