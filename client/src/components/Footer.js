import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react';

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

export default class Footer extends React.Component {
  render() {
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
}
