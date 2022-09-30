import React, { Fragment } from 'react';
import isEmpty from 'lodash.isempty';
import AddIcon from '@mui/icons-material/Add';
import { IconButton, Tooltip } from '@mui/material';

import Word from './Word';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function Words({ words, setWords, addEmptyCard, handleOnSubmit }) {
  const hasWords = !isEmpty(words);

  const handleRemoveWord = (uid: string) => {
    setWords(words.filter((word: { uid: string }) => word.uid !== uid));
  };

  const handleInputChange = (event: { target: { name: string; value: string } }, uid: string) => {
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
        {
          hasWords && words.map((word: any) => (
            /*TODO: change {...word}*/
            <Word key={word.uid} {...word} handleRemoveWord={handleRemoveWord} handleInputChange={handleInputChange} />
          ))
        }
        {!hasWords && <p style={{ marginBottom: '75px' }}>No words available. Please add some words.</p>}

        <Tooltip title="Add a New Word">
          <IconButton onClick={addEmptyCard} aria-label="add" color="primary" size="large">
            <AddIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Fragment>
  );
}
