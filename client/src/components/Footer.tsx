import React from 'react';
import { Box, Container, Link, Typography } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="#ffffff">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#2e1a45'
      }}>
      <Container maxWidth="xl">
        <Copyright />
      </Container>
    </Box>
  );
}
