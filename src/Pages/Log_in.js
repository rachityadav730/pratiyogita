import React from 'react'
import Navbar from '../Component/Navbar'    
import Footer from '../Component/Footer'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, TextField, Typography, Container } from '@material-ui/core';

const Login = () => {
  return (
    <div>
      <Navbar/>

      <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <ErrorMessage name="email" component="div" />
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <ErrorMessage name="password" component="div" />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
</div>
  )
}

export default Login