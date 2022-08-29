import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import React from 'react';
import Typography from '@mui/material/Typography';

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
