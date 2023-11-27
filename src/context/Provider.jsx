import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [holidays, setHolidays] = useState([]);

  const store = useMemo(() => ({
    countries,
    setCountries,
    selectedCountries,
    setSelectedCountries,
    holidays,
    setHolidays,
  }), [countries, selectedCountries, holidays]);

  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
