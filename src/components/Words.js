import { Button, Tooltip } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { Fragment } from 'react';
import _ from 'lodash';

import Word from 'src/components/Word';

export default function Words({ words, setWords, addEmptyCard }) {
  const handleRemoveWord = uid => {
    setWords(words.filter(word => word.uid !== uid));
  };

  const handleInputChange = (event, uid) => {
    setWords(current =>
      current.map(obj => {
        if (obj.uid === uid) {
          return { ...obj, [event.target.name]: event.target.value };
        }

        return obj;
      })
    );
  };

  return (
    <Fragment>
      <div>
        {!_.isEmpty(words) ? (
          words.map(word => (
            <Word key={word.uid} {...word} handleRemoveWord={handleRemoveWord} handleInputChange={handleInputChange} />
          ))
        ) : (
          <p style={{ marginBottom: '75px' }}>No words available. Please add some words.</p>
        )}

        <Tooltip title="Add a New Word">
          <Button
            onClick={addEmptyCard}
            variant="outlined"
            sx={{
              background: 'white',
              position: 'absolute',
              bottom: '-5px',
              height: '40px',
              width: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: 0,
              ':hover': { bgcolor: 'white' }
            }}>
            <Typography variant="h4" color="primary.light">
              +
            </Typography>
          </Button>
        </Tooltip>
      </div>
    </Fragment>
  );
}
