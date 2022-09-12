import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useResults } from '../contexts/ResultContext';
import { Options } from './Options';

export const Search = () => {
  const [ text, setText ] = useState("");
  const { setSearchTerm } = useResults();

  // optimize debounce value for delay, so api doesn't get called on every keystroke
  const [ debouncedValue ] = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-24 md:ml-36 sm:-mt-10 mt-3">
      <input value={text} type="text" className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg" placeholder="Search in Googole" onChange={(e) => setText(e.target.value)}/>
      {!text && (
        <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500" onClick={() => setText("")} />
      )}
      <Options />
    </div>
  );
}