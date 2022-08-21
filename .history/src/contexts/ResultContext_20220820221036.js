import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1/';

export const ResultProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (searchTerm) => {
    setLoading(true);
    const response = await fetch(`${baseUrl}?q=${searchTerm}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': 'd8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8',
      },
    });
    const data = await response.json();
    setResults(data.results);
    setLoading(false);
  }
}