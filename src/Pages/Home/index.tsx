import React from 'react';
import Home from './Home';
import './index.scss';
import GetContentApiFlight from '../../Hooks/GetContentApiFlight';

const index = () => {
  const { data, loading, error } = GetContentApiFlight();
  // console.log(data, loading, error, 'test');
  return (
    <div>
      <Home data={data} loading={loading} error={error} />
    </div>
  );
};

export default index;
