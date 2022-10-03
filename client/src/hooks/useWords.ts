import { useMemo } from 'react';

export const useSortedWords = (words: any, sortBy: string) => {
  return useMemo(() => {
    if (sortBy) {
      return [...words].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }

    return words;
  }, [sortBy, words]);
};

export const useWords = (words: any, sortBy: string, query: string) => {
  const sortedWords = useSortedWords(words, sortBy);

  return useMemo(() => {
    return sortedWords.filter((word: any) => word.term.toLowerCase().includes(query));
  }, [query, sortedWords]);
};
