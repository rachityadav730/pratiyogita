import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, TextField, Typography, Container } from '@material-ui/core';

const SignUp = () => {
  return (
    <div><Navbar/>
        <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <Formik
        initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
        validate={values => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
          } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
          }
          if (values.password !== values.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
            <ErrorMessage name="username" component="div" />
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
            />
            <ErrorMessage name="email" component="div" />
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
            />
            <ErrorMessage name="password" component="div" />
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <ErrorMessage name="confirmPassword" component="div" />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </Container>

    </div>
  )
}

export default SignUp