import React, { useContext, useEffect } from 'react';
import Context from './context/Context';
import useFetch from './hooks/useFetch';
import countriesFetch from './services/countriesFetch';
import CalendarTable from './components/CalendarTable';
import Selection from './components/Selection';

import './App.css';
import Header from './components/Header';
import holidaysFetch from './services/holidaysFetch';

function App() {
  const { setCountries, selectedCountries, setHolidays, holidays } = useContext(Context);
  const { fetchApi, loading } = useFetch();
  useEffect(() => {
    const request = async () => {
      const response = await fetchApi(countriesFetch);
      setCountries(response);
    };
    request();
  }, []);

  useEffect(() => {
    const requestHolidays = async () => {
      let arr = [];
      selectedCountries.forEach(async (country) => {
        const response = await fetchApi(holidaysFetch, country, new Date().getFullYear());
        arr.push(...response);
      },
      setHolidays(arr));
    };
    requestHolidays();
  }, [selectedCountries]);

  return (
    <>
      <Header />
      <Selection />
      { loading ? <div> Loading... </div> : <CalendarTable /> }
    </>
  );
}

export default App;
