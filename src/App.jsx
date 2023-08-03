import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import './App.css';
import Context from './context/Context';
import useFetch from './hooks/useFetch';
import countriesFetch from './services/countriesFetch';

function App() {
  const { setCountries } = useContext(Context);
  const { fetchApi } = useFetch();
  useEffect(() => {
    const request = async () => {
      const response = await fetchApi(countriesFetch);
      setCountries(response);
    };
    request();
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
}

export default App;
