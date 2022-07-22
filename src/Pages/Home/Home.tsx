import React, { useEffect, useState } from 'react';
import { Button, Divider } from 'antd';

import InforTicket from './InforTicket';
import Footer from '../../Components/Layout/Footer';
import Header from '../../Components/Layout/Header';
import { FlightType } from 'FlightType';
type FlightScheduleType = {
  data?: FlightType[];
  loading?: boolean;
  error?: string;
};
const Home: React.FC<FlightScheduleType> = ({ data, loading, error }) => {
  return (
    <div>
      <div className="h-[100vh] bg-white">
        <div className=" HomeContainer h-[80vh] relative">
          <div className="max-w-[1224px] mx-auto ">
            <InforTicket />
            <div className="pt-[48px] ">
              {/* header */}
              <Header pageHome={true} />
              {/* header */}
              <div>
                <div className="text-display-l font-normal pt-[120px] pb-[120px]">
                  <div>Hello!</div>
                  <div>Where are</div>
                  <div>
                    you <span className="text-content-primary font-semibold">flying</span> to ...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[1224px] mx-auto mt-[140px] ">
          {/* footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
