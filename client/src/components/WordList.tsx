import React, { Fragment, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import isEmpty from 'lodash.isempty';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import WordFilters from './WordFilters';
import WordItem from './WordItem';
import { useWords } from '../hooks/useWords';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function WordList({ words, setWords, addEmptyCard, handleOnSubmit }) {
  const hasWords = !isEmpty(words);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedAndSearchedWords = useWords(words, filter.sort, filter.query);

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

      {hasWords && <WordFilters filter={filter} setFilter={setFilter} />}

      <div style={{ textAlign: 'center' }}>
        <TransitionGroup>
          {
            hasWords && sortedAndSearchedWords.map((word: any) => (
              <CSSTransition key={word.uid} timeout={500} classNames="word">
                <WordItem
                  word={{
                    count: word.count,
                    definition: word.definition,
                    term: word.term,
                    uid: word.uid
                  }}
                  handleRemoveWord={handleRemoveWord}
                  handleInputChange={handleInputChange}
                />
              </CSSTransition>
            ))
          }
        </TransitionGroup>
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
