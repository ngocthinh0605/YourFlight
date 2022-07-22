import React, { useEffect, useState } from 'react';
import Header from '../../Components/Layout/Header';
import ArrowLeftRightGray from '../../Assets/Icons/ArrowLeftRightGray.svg';
import { RiSearchLine } from 'react-icons/ri';
import Filter from './Filter';
import YourFlights from './YourFlights';
import FlightDetail from './FlightDetail';
import { FlightType } from 'FlightType';
import { AirLine, PointSym, TypeFilter, PriceFilter } from '../../Contant';
import { FormatDate } from '../../Utils';
import { DefaultValueFlight } from './Constant';
type FlightScheduleType = {
  data?: FlightType[];
  loading?: boolean;
  error?: string;
};
const obj = {};
type ObjectKey = keyof typeof obj;
const FlightSchedule: React.FC<FlightScheduleType> = ({ data, loading, error }) => {
  // console.log('data ', data);
  const [YourFlight, setYourFlight] = useState<FlightType>(data ? data[0] : DefaultValueFlight);
  const [Flights, setFlights] = useState<FlightType[]>(data ? data : []);
  useEffect(() => {
    if (data) {
      setYourFlight(data[0]);
      setFlights(data);
    }
  }, [data]);

  const handleAscending = () => {
    if (data) {
      setFlights(
        [...data].sort((a: FlightType, b: FlightType) => {
          return (
            a.FeeAdult +
            a.ChargeAdult +
            a.PriceAdult +
            a.TaxAdult -
            (b.FeeAdult + b.ChargeAdult + b.PriceAdult + b.TaxAdult)
          );
        })
      );
    }
  };
  const handleDecrease = () => {
    if (data) {
      setFlights(
        [...data].sort((a: FlightType, b: FlightType) => {
          return (
            b.FeeAdult +
            b.ChargeAdult +
            b.PriceAdult +
            b.TaxAdult -
            (a.FeeAdult + a.ChargeAdult + a.PriceAdult + a.TaxAdult)
          );
        })
      );
    }
  };
  const handleFilterFromMoneyTo = (from: number, to?: number) => {
    if (data) {
      setFlights(
        [...data].filter((item) => {
          const price = item.FeeAdult + item.ChargeAdult + item.PriceAdult + item.TaxAdult;
          if (to) if (price >= from && price <= to) return item;
          if (!to) if (price >= from) return item;
        })
      );
    }
  };
  const handlePriceFilter = (e: any) => {
    console.log('handlePriceFilter', e);
    switch (e.key) {
      case PriceFilter.ASC:
        handleAscending();
        break;
      case PriceFilter.DEC:
        handleDecrease();
        break;
      case PriceFilter.F0T1:
        handleFilterFromMoneyTo(0, 1000000);
        break;
      case PriceFilter.F1T2:
        handleFilterFromMoneyTo(1000000, 2000000);
        break;
      case PriceFilter.F2:
        handleFilterFromMoneyTo(2000000);
        break;
      default:
        break;
    }
  };
  const handleTimeFilter = (e: any) => {
    if (!e.includes(null) && e[0].isBefore(e[1])) {
      const FromTime = FormatDate(e[0].toDate()).Time;
      const ToTime = FormatDate(e[1].toDate()).Time;
      if (data)
        setFlights(
          [...data].filter((item) => {
            const FromTimeFlight = FormatDate(item.StartDate).Time;
            const ToTimeFlight = FormatDate(item.EndDate).Time;
            if (FromTimeFlight > FromTime && ToTimeFlight < ToTime) return item;
          })
        );
    }
  };
  const handleFilterDropDown = (e: any, key: string) => {
    switch (key) {
      case TypeFilter.CATEGORY:
        if (data) setFlights([...data].filter((item) => e.key == item.AirlineCode && item));
        break;
      case TypeFilter.PRICE:
        handlePriceFilter(e);
        break;
      case TypeFilter.TIME:
        handleTimeFilter(e);
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-bg-primary min-h-[100vh]">
      <div className="h-[80px] box-border bg-content-primary ">
        <div className="max-w-[1230px] mx-auto pt-5">
          <Header />
        </div>
      </div>
      <div className="h-[80px] box-border bg-white ">
        <div className="max-w-[1230px] mx-auto pt-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-body-m text-content-primary">
                {YourFlight && PointSym[YourFlight.StartPoint as ObjectKey]['label']}
              </div>
              <div className="text-black text-body-xs">
                {YourFlight && FormatDate(YourFlight?.StartDate).Date}
              </div>
            </div>
            <div>
              <div>
                <img className="opacity-30" src={ArrowLeftRightGray} alt="" />
              </div>
            </div>
            <div>
              <div className="font-semibold text-body-m text-content-primary">
                {YourFlight && PointSym[YourFlight.EndPoint as ObjectKey]['label']}
              </div>
              <div className="text-black text-body-xs">
                {YourFlight && FormatDate(YourFlight?.EndDate).Date}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="pr-4 font-semibold text-black border-r text-code-s">Round-trip</div>
              <div className="flex items-center font-semibold">
                <div className="px-4 mr-1 border-r">
                  <span className="text-code-s text-content-primary ">02</span> Adult,{' '}
                  <span className="text-code-s text-content-primary ">01</span> children
                </div>
              </div>
              <div className="pl-4 font-semibold text-black text-code-s">
                {YourFlight && YourFlight.GroupClass}
              </div>
            </div>
            <div>
              <div className="px-4 py-[10px] bg-content-secondary  min-w-[156px] text-white font-semibold rounded-xl cursor-pointer">
                <div className="flex items-center">
                  <div className="flex-1 mr-2">Change Flights</div>
                  <div>
                    <RiSearchLine />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1230px] mx-auto pt-5">
        <div className="grid grid-cols-12 ">
          <div className="col-span-9">
            <div className="mr-[5px]">
              <Filter handleFilterDropDown={(e, key) => handleFilterDropDown(e, key)} />
            </div>
            <div>
              {Flights &&
                Flights.map((item: FlightType, index: number) => (
                  <FlightDetail setYourFlight={setYourFlight} flightDetail={item} />
                ))}
            </div>
          </div>
          <div className="col-span-3">{YourFlight && <YourFlights yourFlight={YourFlight} />}</div>
        </div>
      </div>
    </div>
  );
};

export default FlightSchedule;
