import React from 'react';

import Search from './Search';
import Select from './Select';


const options = [
  { id: 1, label: 'Sort by word', value: 'term' },
  { id: 2, label: 'Sort by description', value: 'definition' }
];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const WordFilters = ({ filter, setFilter }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Search value={filter.query} onChange={(e: any) => setFilter({ ...filter, query: e.target.value })} />
        <Select value={filter.sort} onChange={(selected: string) => setFilter({ ...filter, sort: selected })} options={options} defaultValue="Sort by" />
      </div>
    </div>
  );
};

export default WordFilters;
