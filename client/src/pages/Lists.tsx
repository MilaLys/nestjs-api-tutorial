import React, { useEffect, useState } from 'react';

import ListsService from '../api/ListsService';
import Loader from '../components/Loader/Loader';
import { useFetching } from '../hooks/useFetching';


const Lists = () => {
  const [lists, setLists] = useState([]);
  const [fetchLists, isListsLoading, listsError]: any = useFetching(async () => {
    const lists = await ListsService.getLists();
    setLists(lists);
  });

  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <div>
      <h1>Your Lists</h1>

      {listsError && <h1>Error ${listsError}</h1>}

      {
        isListsLoading
          ? <div style={{ display: 'flex', justifyContent: 'center' }}><Loader /></div>
          : <h1>Lists</h1>
      }
    </div>
  );
};

export default Lists;
