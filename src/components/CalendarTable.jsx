import React, { useContext, useEffect } from 'react';
import { Badge, Calendar } from 'antd';
import './CalendarTable.css';
import Context from '../context/Context';
import useFetch from '../hooks/useFetch';
import holidaysFetch from '../services/holidaysFetch';

function CalendarTable() {
  const { selectedCountries, holidays, setHolidays } = useContext(Context);
  const { fetchApi } = useFetch();
  useEffect(() => {
    const requestHolidays = async () => {
      selectedCountries.forEach(async (country) => {
        const response = await fetchApi(holidaysFetch, country, new Date().getFullYear());
        setHolidays(...holidays, response);
      });
    };
    requestHolidays();
  });

  const getListData = (value) => {
    const dateString = value.format('YYYY-MM-DD');
    const listData = holidays.filter((holiday) => holiday.date === dateString);
    return listData || [];
  };
  // const getMonthData = (value) => {
  //   if (value.month() === 8) {
  //     return 1394;
  //   }
  //   return null;
  // };
  // const monthCellRender = (value) => {
  //   const num = getMonthData(value);
  //   return num ? (
  //     <div className="notes-month">
  //       <section>{num}</section>
  //       <span>Backlog number</span>
  //     </div>
  //   ) : null;
  // };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    // if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };
  return <Calendar cellRender={cellRender} />;
}

export default CalendarTable;
