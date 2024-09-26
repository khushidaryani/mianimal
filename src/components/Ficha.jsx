import { useState } from 'react';
import { Button, Avatar, Typography, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';

import '../App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={6}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={7}
            justifyContent="center"
            alignItems="center"
          >
            <Avatar 
              src="/gato.jpg" 
              sx={{ width: 300, height: 300 }} 
              className="logo" 
              alt="logo" 
            />
            <Typography variant="h2" align="center">
              Soy un gato y tengo sueño
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={6}>
          <div align='center' className="card">
            <p>
              Toca el botón para rascarme
            </p>
            <Button 
              variant='contained' 
              size='large' 
              sx={{ color: 'white', backgroundColor: '#76524a' }}
              onClick={() => setCount((count) => count + 1)}
            >
              Me has rascado {count} veces
            </Button>
          </div>
        </Grid>
      </Grid>
      <br/><br/><br/>
    </>
  )
}

export default App
