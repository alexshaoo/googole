import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useResults } from '../contexts/ResultContext';
import { Options } from './Options';

export const Search = () => {
  const [ text, setText ] = useState("catto");
  const { setSearchTerm } = useResults();

  // optimize debounce value for delay, so api doesn't get called on every keystroke
  const [ debouncedValue ] = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div>
      Search
      <Options />
    </div>
  );
}