
import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Paper, Typography, Container } from '@mui/material';

function UserForm({
  title,
  onSubmit,
  name,
  setName,
  email,
  setEmail,
  submitLabel,
  nameError = '',
  emailError = ''
}) {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <form onSubmit={onSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={Boolean(nameError)}
            helperText={nameError}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(emailError)}
            helperText={emailError}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            {submitLabel}
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

UserForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  submitLabel: PropTypes.string.isRequired,
  nameError: PropTypes.string,
  emailError: PropTypes.string,
};

export default UserForm;
