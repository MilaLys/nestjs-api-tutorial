import React, { Fragment, useMemo, useState } from 'react';
import isEmpty from 'lodash.isempty';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DialogConfirmation from './DialogConfirmation';

import WordItem from './WordItem';
import WordFilters from './WordFilters';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function WordList({ words, setWords, addEmptyCard, handleOnSubmit }) {
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

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedWords = useMemo(() => {
    if (filter.sort) {
      return [...words].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }

    return words;
  }, [filter.sort, words]);

  const sortedAndSearchedWords = useMemo(() => {
    return sortedWords.filter((word: any) => word.term.toLowerCase().includes(filter.query));
  }, [filter.query, sortedWords]);

  return (
    <Fragment>

      {sortedAndSearchedWords && <WordFilters filter={filter} setFilter={setFilter} />}

      <div style={{textAlign: 'center'}}>
        {
          hasWords && sortedAndSearchedWords.map((word: any) => (
            <WordItem
              key={word.uid}
              word={{
                count: word.count,
                definition: word.definition,
                term: word.term,
                uid: word.uid
              }}
              handleRemoveWord={handleRemoveWord}
              handleInputChange={handleInputChange}
            />
          ))
        }
        {!hasWords && <p>No words available. Please add some words.</p>}

        <Tooltip title="Add a New Word">
          <IconButton onClick={addEmptyCard} aria-label="add" color="primary" size="large">
            <AddIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Fragment>
  );
}
