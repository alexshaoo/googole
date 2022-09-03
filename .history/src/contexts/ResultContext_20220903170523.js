import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('cat');

  // url is continuation for baseUrl, search term
  const getResults = async (url) => {
    setLoading(true);
    const response = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      // TODO: store in environment variable 
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'CA',
        'X-RapidAPI-Key': 'd703e484f5mshe58b3de201d3feep13f3c5jsnbe2f0cc95217',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
      }
    });

    const data = await response.json();

    if (url.includes("/search")) {
      setResults(data?.results);
    } else if (data.includes("/images")) {
      setResults(data?.images_results);
    } else if (data.includes("/news")) {
      setResults(data?.entries);
    }

    setResults(data);
    setLoading(false);
    console.log(data);
  }

  return (
    <ResultContext.Provider value={{ results, loading, searchTerm, getResults, setSearchTerm }}>
      {children}
    </ResultContext.Provider>
  );  
}

export const useResults = () => useContext(ResultContext);