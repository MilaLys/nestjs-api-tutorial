import React, { Fragment } from 'react';
import _ from 'lodash';

import Word from 'src/components/Word';

export default function Words({ words, setWords, onCardChange }) {
  const handleRemoveWord = uid => {
    setWords(words.filter(word => word.uid !== uid));
  };

  const handleCardChange = event => {
    onCardChange(event);
  };

  return (
    <Fragment>
      <div>
        {!_.isEmpty(words) ? (
          words.map(word => (
            <Word key={word.uid} {...word} handleRemoveWord={handleRemoveWord} onCardChange={handleCardChange} />
          ))
        ) : (
          <p style={{ marginBottom: '75px' }}>No words available. Please add some words.</p>
        )}
      </div>
    </Fragment>
  );
}
