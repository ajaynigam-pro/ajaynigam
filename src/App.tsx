import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import { Button, Grid } from '@mui/material';
import Profile from './Profile';

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
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Profile />
        {/* <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Box>xs=6 md=4</Box>
          </Grid>
          <Grid item xs={6} md={8}>
            <Box>xs=6 md=8</Box>
          </Grid>
        </Grid> */}
      </Box>
    </Container>
  );
}
