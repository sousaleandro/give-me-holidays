const URL = 'https://date.nager.at/api/v3/PublicHolidays/';

const holidaysFetch = async (countryCode, year) => {
  const response = await fetch(`${URL}${year}/${countryCode}`);
  const data = await response.json();
  return data;
};

export default holidaysFetch;
