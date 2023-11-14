import React from 'react';
import Nav from "../components/Nav"
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';


function Home() {
 

  return (
    <>
      <Nav />
      <div className='stack'>
     <Stack direction="row" spacing={2}>
     <Button variant="text" color="primary" size='small'>Text</Button>
     <Button variant="contained" color="secondary" size='large' endIcon={<SendIcon />}>Contained</Button>
     <Button variant="outlined" color="success"size='medium'startIcon={<DeleteIcon />}>Outlinde</Button>
     </Stack>
     </div>
    </>
  )
}

export default Home
