import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1/';

export const ResultProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // url is continuation for baseUrl, search term
  const getResults = async (url) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${url}`);
  }
}