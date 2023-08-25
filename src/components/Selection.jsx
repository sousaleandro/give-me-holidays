import React, { useContext } from 'react';
import { Select, Space } from 'antd';
import Context from '../context/Context';

const { Option } = Select;

function Selection() {
  const { countries, setSelectedCountries } = useContext(Context);
  const handleChange = (value) => {
    setSelectedCountries(value);
  };

  return (
    <Select
      mode="multiple"
      style={{ width: '80%' }}
      placeholder="select one country"
      defaultValue={[]}
      onChange={handleChange}
      optionLabelProp="label"
    >
      {
        countries.map((country) => (
          <Option key={country.countryCode} value={country.countryCode} label={country.name}>
            <Space>
              {`${country.name} - ${country.countryCode}`}
            </Space>
          </Option>
        ))
      }
    </Select>
  );
}

export default Selection;
