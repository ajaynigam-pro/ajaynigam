import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import { Button } from '@mui/material';

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Button color="inherit" onClick={()=>{
        console.log('I am Here, Ajay Nigam')
      }}>
        Ajay Nigam Pro
      </Button>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2, textAlign:'center' }}>
          Ajay Nigam
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
