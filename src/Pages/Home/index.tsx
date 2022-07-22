import React from 'react';
import Home from './Home';
import './index.scss';
import GetContentApiFlight from '../../Hooks/GetContentApiFlight';
import { Space, Spin } from 'antd';

const index = () => {
  const { data, loading, error } = GetContentApiFlight();
  // console.log(data, loading, error, 'test');
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
          <Home data={data} loading={loading} error={error} />
        </div>
      )}
    </>
  );
};

export default index;
