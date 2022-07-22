import React, { useEffect, useState } from 'react';
import GetContentApiFlight from '../../Hooks/GetContentApiFlight';
import FlightSchedule from './FlightSchedule';
import { FlightType } from 'FlightType';

const index = () => {
  const { data, loading, error } = GetContentApiFlight();

  return (
    <div>
      <FlightSchedule data={data} loading={loading} error={error} />
      {/* <FlightSchedule /> */}
    </div>
  );
};

export default index;
