import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button, Grid, Stack, TextField } from '@mui/material';
import Words from 'src/components/Words';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Footer from 'src/components/Footer';

function App() {
  let cardData = { count: 1, definition: '', image: '', term: '', uid: uuidv4() };
  const listData = {
    title: '',
    description: '',
    words: [cardData],
    uid: uuidv4()
  };
  const [words, setWords] = useState([]);
  const [list, setList] = useState(listData);

  function addEmptyCard() {
    setWords(prevCards => [...prevCards, { ...cardData, count: words.length + 1 }]);
  }

  function handleListChange(event) {
    setList(prevList => ({
      ...prevList,
      [event.target.name]: event.target.value
    }));
  }

  function saveList() {
    console.log('saveList', words);
    event.preventDefault();
  }

  return (
    <Box sx={{ marginTop: '100px' }}>
      <main>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '82.3vh' }}>
          <Container component="main" maxWidth="md">
            <Typography variant="h4" component="h4" gutterBottom>
              Create a New List
            </Typography>

            <Box component="form" noValidate autoComplete="off">
              <div>
                <Grid container spacing={3} sx={{ mb: 5 }}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="title"
                      name="title"
                      label="Enter a title"
                      fullWidth
                      variant="standard"
                      value={list.title}
                      onChange={handleListChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="description"
                      name="description"
                      label="Add a description"
                      fullWidth
                      variant="standard"
                      value={list.description}
                      onChange={handleListChange}
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ position: 'relative' }}>
                    <Words words={words} setWords={setWords} handleOnSubmit={saveList} addEmptyCard={addEmptyCard} />
                  </Grid>
                </Grid>

                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  sx={{ marginBottom: '64px' }}>
                  <Button onClick={saveList} variant="contained">
                    Save List
                  </Button>
                </Stack>
              </div>
            </Box>
          </Container>
        </Box>
      </main>

      <Footer />
    </Box>
  );
}

export default App;