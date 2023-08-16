import React, { useContext } from 'react';
import { Calendar } from 'antd';
import Context from '../context/Context';

import '/node_modules/flag-icons/css/flag-icons.min.css';

function CalendarTable() {
  const { holidays } = useContext(Context);

  const getListData = (value) => {
    const dateString = value.format('YYYY-MM-DD');
    const listData = holidays.filter((holiday) => holiday.date === dateString);
    return listData || [];
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item, index) => (
          <li key={`${item.date} ${item.countryCode} ${index}`}>
            <span>
              { item.localName }
              { ' ' }
              <span className={`fi fi-${item.countryCode.toLowerCase()}`} />
            </span>
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    return info.originNode;
  };
  return <Calendar cellRender={cellRender} />
}

export default CalendarTable;
