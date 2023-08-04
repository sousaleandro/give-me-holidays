import React, { useContext } from 'react';
import {
  Select, Space, Button,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Context from '../context/Context';

const { Option } = Select;

function Selection() {
  const { setSelectedCountries, countries, selectedCountries } = useContext(Context);
  const handleChange = (value) => {
    setSelectedCountries(value);
  };
  const handleSearch = () => {
    window.location.href = '/calendar';
  };
  return (
    <>
      <Select
        mode="multiple"
        style={{ width: '100%' }}
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
      <Button
        block
        shape="round"
        disabled={selectedCountries.length === 0}
        icon={<SearchOutlined />}
        onClick={handleSearch}
      >
        Search
      </Button>
    </>
  );
}

export default Selection;
