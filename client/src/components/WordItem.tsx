import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import DialogConfirmation from './DialogConfirmation';

import classes from './ImagePlaceholder.module.css';


// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
// @ts-ignore
export default function WordItem({ word, ...props }) {
  const [modal, setModal] = useState(false);

  const handleDelete = () => {
    props.handleRemoveWord(word.uid);
  };

  return (
    <Box sx={{ width: '100%', marginBottom: '15px' }}>
      <DialogConfirmation visible={modal} setVisible={setModal} onConfirm={handleDelete}>
        Are you sure you want to delete this word?
      </DialogConfirmation>

      <Paper>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#7b519d',
              borderRadius: '3px 3px 0 0',
              padding: '8px 16px'
            }}>
            <Box component="div">
              <Typography variant="button" color="warning.light">
                {word.count}
              </Typography>
            </Box>

            <Tooltip title="Delete the Word">
              <IconButton
                onClick={() => setModal(true)}
                edge="end"
                aria-label="delete"
                color="warning">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>

        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={5}>
                <TextField
                  fullWidth
                  multiline
                  helperText="TERM"
                  id="title"
                  label="Enter term"
                  name="term"
                  variant="standard"
                  value={props.term}
                  onChange={(e) => props.handleInputChange(e, word.uid)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  multiline
                  helperText="DEFINITION"
                  id="definition"
                  label="Enter definition"
                  name="definition"
                  variant="standard"
                  value={props.definition}
                  onChange={(e) => props.handleInputChange(e, word.uid)}
                />
              </Grid>

              <Grid item xs={12} sm={1}>
                <Tooltip title="Add an Image">
                  <Box
                    component="span"
                    className={classes.photo}>
                    <Button sx={{ textTransform: 'uppercase', fontSize: '10px' }}>image</Button>
                  </Box>
                </Tooltip>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
}
