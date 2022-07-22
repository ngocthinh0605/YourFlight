import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FlightType } from 'FlightType';

const GetContentApiFlight = () => {
  const [data, setData] = useState<FlightType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const getData = async () => {
    try {
      setError('');
      setLoading(true);
      const data = await axios('https://mocki.io/v1/ff3207e0-f250-4a1d-9240-b3dbffa8386a');
      setData(data.data.Flights);
      setLoading(false);
      // console.log('Data loaded successfully ', data);
    } catch (error) {
      setError(error as string);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log('Data loaded successfully ', data, loading, error);

  return { data, loading, error };
};

export default GetContentApiFlight;
