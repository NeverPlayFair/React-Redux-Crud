import React from 'react';
import { TextField, Button, Paper, Typography, Container } from '@mui/material';

function UserForm({ title, onSubmit, name, setName, email, setEmail, submitLabel }) {
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
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

export default UserForm;
