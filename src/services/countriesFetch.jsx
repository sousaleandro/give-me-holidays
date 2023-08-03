const URL = 'https://date.nager.at/api/v3/AvailableCountries';

const countriesFetch = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export default countriesFetch;
