import React from 'react';

import Bamboo from '../../Assets/Icons/Bamboo.svg';
import SymbolFlight from '../../Components/SymbolFlight/SymbolFlight';
import lineHour from '../../Assets/Icons/lineHour.svg';
import Button from '../../Components/Button';
import { FlightType } from 'FlightType';
import { FormatDate, FormatHour, numberToCurrency } from '../../Utils';
import { AirLine, PointSym } from '../../Contant';
const obj = {};
type ObjectKey = keyof typeof obj;
const YourFlights = ({ yourFlight }: { yourFlight: FlightType }) => {
  return (
    <div>
      <div className="min-w-[270px] bg-white rounded-xl">
        <div className="px-[15px]  py-[15px] border-b font-semibold">YOUR FLIGHT</div>
        <div className="px-[15px]  py-[15px]">
          <div className="flex items-center">
            <div className="mr-3">
              <div className=" rounded-[100%] text-code-s font-semibold bg-[#979797] text-white px-[6px] py-[4px]">
                01
              </div>
            </div>
            <div>
              <div className="text-code-s">{FormatDate(yourFlight?.StartDate).Date}</div>
              <div className="font-semibold text-code-s">
                {(PointSym[yourFlight.StartPoint as ObjectKey]['label'] as string).slice(0, -5)} -{' '}
                {(PointSym[yourFlight.EndPoint as ObjectKey]['label'] as string).slice(0, -5)}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <div className="mr-3">
                <div>
                  <div>{AirLine[yourFlight.AirlineCode as ObjectKey]['img']}</div>
                </div>
              </div>
              <div>
                <div className="text-code-s">
                  {AirLine[yourFlight.AirlineCode as ObjectKey]['label']}
                </div>
                <a className="font-semibold text-body-s text-content-primary" href="#">
                  Details
                </a>
              </div>
            </div>
          </div>
          <div className="mt-[10px]">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="pb-1 font-semibold text-code-s">
                    {FormatDate(yourFlight?.StartDate).Time}
                  </div>
                  <div>
                    <SymbolFlight />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-code-s">{FormatHour(yourFlight?.Duration)}</div>
                  <div>
                    <img src={lineHour} alt="" />
                  </div>
                  <div className="text-code-s">Direct</div>
                </div>
                <div>
                  <div className="pb-1 font-semibold text-code-s">
                    {FormatDate(yourFlight?.EndDate).Time}
                  </div>
                  <div>
                    <SymbolFlight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[20px] mb-[15px]">
            <Button title="Change departure flight" />
          </div>
          <div className="pt-[14px]  border-t">
            <div className="flex items-center">
              <div className="mr-3">
                <div className="rounded-[100%] text-code-s font-semibold bg-content-primary text-white px-[6px] py-[4px]">
                  02
                </div>
              </div>
              <div>
                <div className="text-code-s">{FormatDate(yourFlight?.EndDate).Date}</div>
                <div className="font-semibold text-code-s">
                  {(PointSym[yourFlight.EndPoint as ObjectKey]['label'] as string).slice(0, -5)} -{' '}
                  {(PointSym[yourFlight.StartPoint as ObjectKey]['label'] as string).slice(0, -5)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F8F8] p-[15px]">
          <div className="text-code-s">Subtotal</div>
          <div className="font-semibold text-content-secondary">
            {numberToCurrency(yourFlight.ChargeAdult + yourFlight.PriceAdult + yourFlight.TaxAdult)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourFlights;
