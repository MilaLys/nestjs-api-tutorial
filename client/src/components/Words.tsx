import React, { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import { Button, Tooltip } from '@mui/material';
import _ from 'lodash';

import Word from './Word';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function Words({ words, setWords, addEmptyCard, handleOnSubmit }) {
  const handleRemoveWord = (uid: string) => {
    setWords(words.filter((word: { uid: string }) => word.uid !== uid));
  };

  const handleInputChange = (event: { target: { name: any; value: any } }, uid: any) => {
    setWords((current: any[]) =>
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
          words.map((word: any) => (
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
