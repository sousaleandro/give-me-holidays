import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [state, setState] = useState({});
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const store = useMemo(() => ({
    state,
    setState,
    countries,
    setCountries,
    selectedCountries,
    setSelectedCountries,
  }), [state, countries, selectedCountries]);

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
