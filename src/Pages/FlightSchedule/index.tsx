import React, { useEffect, useState } from 'react';
import GetContentApiFlight from '../../Hooks/GetContentApiFlight';
import FlightSchedule from './FlightSchedule';
import { Space, Spin } from 'antd';

const index = () => {
  const { data, loading, error } = GetContentApiFlight();

  return (
    <>
      {loading ? (
        <div className="h-[100vh] flex">
          <div className="m-auto">
            <Space size="middle">
              <Spin size="small" />
              <Spin />
              <Spin size="large" />
            </Space>
          </div>
        </div>
      ) : (
        <div>
          <FlightSchedule data={data} loading={loading} error={error} />
          {/* <FlightSchedule /> */}
        </div>
      )}
    </>
  );
};

export default index;
