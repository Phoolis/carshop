import { useState } from 'react'
import './App.css'
import CarList from './components/CarList';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {

  return (
    <>
      <Container maxWidth="x1">
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Car shop
            </Typography>
          </Toolbar>
        </AppBar>
        <CarList />
      </Container>
    </>
  );
}

export default App
