import React from 'react';
import Bamboo from '../../../Assets/Icons/Bamboo.svg';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
import SymbolFlight from '../../../Components/SymbolFlight/SymbolFlight';
import lineHour from '../../../Assets/Icons/lineHour.svg';
import suitcase from '../../../Assets/Icons/suitcase.svg';
import cutlery from '../../../Assets/Icons/cutlery.svg';
import LineVertHour from '../../../Assets/Icons/lineVerHour.svg';
import LineVertHour1 from '../../../Assets/Icons/lineVerHour1.svg';
import ButtonSecondary from '../../../Components/Button/ButtonSecondary';
import { FlightType } from 'FlightType';
import { FormatDate, FormatHour, numberToCurrency } from '../../../Utils';
import './index.scss';
import { AirLine, PointSym } from '../../../Contant';
const obj = {};
type ObjectKey = keyof typeof obj;
const FlightDetail = ({
  flightDetail,
  setYourFlight
}: {
  flightDetail: FlightType;
  setYourFlight: (item: FlightType) => void;
}) => {
  // console.log(flightDetail, 'flightDetail');
  const onChange = (key: string) => {
    // console.log(key);
  };
  return (
    <div className="bg-white p-[15px] mt-[5px] mr-[10px] rounded-xl ">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div>{AirLine[flightDetail.AirlineCode as ObjectKey]['img']}</div>
            <div className="text-code-s font-semibold ml-3">
              {AirLine[flightDetail.AirlineCode as ObjectKey]['label']}
            </div>
          </div>
          <div className="">
            <div className="flex items-center">
              <div className="mr-4">
                <div className="text-code-s font-semibold pb-1">
                  {FormatDate(flightDetail?.StartDate).Time}
                </div>
                <div>
                  <SymbolFlight />
                </div>
              </div>
              <div className="text-center">
                <div className="text-code-s">{FormatHour(flightDetail?.Duration)}</div>
                <div className="">
                  <img src={lineHour} alt="" className="" />
                </div>
                <div className="text-code-s">Direct</div>
              </div>
              <div className="ml-4">
                <div className="text-code-s font-semibold pb-1">
                  {FormatDate(flightDetail?.EndDate).Time}
                </div>
                <div>
                  <SymbolFlight />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center">
              <div className="mr-[6px]">
                <img src={suitcase} alt="" />
              </div>
              <div>
                Baggage{' '}
                <span className="text-content-primary font-semibold">{flightDetail?.Freebag}</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-[6px]">
                <img src={cutlery} alt="" />
              </div>
              <div>
                In-flight <span className="text-content-primary font-semibold">Meal</span>
              </div>
            </div>
          </div>
          <div className="text-code-s">
            <div className="line-through opacity-50">
              {numberToCurrency(
                flightDetail.ChargeAdult + flightDetail.PriceAdult + flightDetail.TaxAdult
              )}
            </div>
            <div className="font-semibold  text-content-secondary">
              {numberToCurrency(
                flightDetail.ChargeAdult + flightDetail.PriceAdult + flightDetail.TaxAdult
              )}
            </div>
          </div>
          <div onClick={() => setYourFlight(flightDetail)} className="">
            <ButtonSecondary />
          </div>
        </div>
      </div>
      <div className="mt-4 ">
        <div>
          <Tabs className="TabFlightDetailCustom " defaultActiveKey="1" onChange={onChange}>
            <TabPane tab="FLIGHT DETAIL" key="1">
              <div className="flex  min-h-[210px] ">
                <div className="flex justify-center">
                  <div className="flex flex-col text-center ">
                    <div className="flex-1">
                      <div className="text-code-s font-semibold">
                        {FormatDate(flightDetail?.StartDate).Time}
                      </div>
                      <div className="text-code-s">
                        {FormatDate(flightDetail?.StartDate).DateSort}
                      </div>
                    </div>
                    <div className="flex-1">{FormatHour(flightDetail.Duration)}</div>
                    <div className="flex-1">
                      <div className="text-code-s font-semibold">
                        {FormatDate(flightDetail?.EndDate).Time}
                      </div>
                      <div className="text-code-s">
                        {FormatDate(flightDetail?.EndDate).DateSort}
                      </div>
                    </div>
                  </div>

                  <div>
                    <img className="mt-[6px] mx-[20px]" src={LineVertHour} alt="" />
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex-1">
                      <div className="text-code-s font-semibold">
                        {PointSym[flightDetail.StartPoint as ObjectKey]['label']}
                      </div>
                      <div className="text-code-s">
                        {PointSym[flightDetail.StartPoint as ObjectKey]['airport']}
                      </div>
                    </div>
                    <div className="flex-1 invisible"></div>
                    <div className="flex-1">
                      <div className="text-code-s font-semibold">
                        {PointSym[flightDetail.EndPoint as ObjectKey]['label']}
                      </div>
                      <div className="text-code-s">
                        {PointSym[flightDetail.EndPoint as ObjectKey]['airport']}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 ml-[100px]">
                  <div className="flex items-center">
                    <div>{AirLine[flightDetail.AirlineCode as ObjectKey]['img']}</div>
                    <div className="ml-3">
                      <div className="text-code-s font-semibold ">
                        {AirLine[flightDetail.AirlineCode as ObjectKey]['label']}
                      </div>
                      <div className="text-code-s flex items-center">
                        {flightDetail.RelatedFlights[0].FlightNumber}
                        <span className="h-[3px] w-[3px] bg-black rounded-[100%] inline-block mx-1"></span>
                        {flightDetail.GroupClass}
                      </div>
                    </div>
                  </div>
                  <div className="mt-[10px]">
                    <div className="bg-bg-secondary p-[15px] rounded-xl ">
                      <div className="flex items-center text-code-s">
                        <div className="flex-1">
                          <div>
                            Aircraft{' '}
                            <span className="font-semibold text-content-primary">Airbus A321</span>
                          </div>
                          <div className="mt-1">
                            In-flight{' '}
                            <span className="font-semibold text-content-primary">Meal</span>
                          </div>
                          <div className="mt-1">
                            In-flight{' '}
                            <span className="font-semibold text-content-primary">
                              Entertainment
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div>
                            Baggage{' '}
                            <span className="font-semibold text-content-primary">
                              {flightDetail?.Freebag}
                            </span>
                          </div>
                          <div className="mt-1">
                            Seat layout{' '}
                            <span className="font-semibold text-content-primary">3-3</span>
                          </div>
                          <div className="mt-1">
                            Seat pitch{' '}
                            <span className="font-semibold text-content-primary">
                              29 inches (standard)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab="FARE INFO" key="2">
              <div className="flex pb-[35px]">
                <div className="flex-1 ">
                  <div className="text-code-s font-semibold">CONDITIONS</div>
                  <div className="flex items-center mt-[15px]">
                    <div>{AirLine[flightDetail.AirlineCode as ObjectKey]['img']}</div>
                    <div className="ml-3">
                      <div className="text-code-s font-semibold ">
                        {AirLine[flightDetail.AirlineCode as ObjectKey]['label']}
                      </div>
                      <div className="text-code-s flex items-center">
                        {flightDetail.RelatedFlights[0].FlightNumber}
                        <span className="h-[3px] w-[3px] bg-black rounded-[100%] inline-block mx-1"></span>
                        {flightDetail.GroupClass}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-[10px]">
                    <div>
                      <div className="text-code-s ">
                        {PointSym[flightDetail.StartPoint as ObjectKey]['label']}
                      </div>
                      <div className="text-code-xs text-content-primary">
                        {flightDetail.GroupClass}
                      </div>
                    </div>
                    <div>
                      <img src={LineVertHour1} alt="" className="mx-[5px]" />
                    </div>
                    <div className="text-code-s ">
                      {PointSym[flightDetail.EndPoint as ObjectKey]['label']}
                    </div>
                  </div>
                  <div className="text-code-xs mt-[15px]">Non - Refundable</div>
                </div>
                <div className="flex-1">
                  <div className="text-code-s font-semibold">PRICE DETAILS</div>
                  <div className="text-code-s mt-[15px] border-b ">
                    <div className="flex items-center ">
                      <div className="flex-1 pb-1">Adult Basic Fare (x1)</div>
                      <div className="font-semibold flex-1 pb-1">
                        {numberToCurrency(
                          flightDetail.ChargeAdult + flightDetail.PriceAdult + flightDetail.TaxAdult
                        )}
                      </div>
                    </div>
                    <div className="flex items-center ">
                      <div className="flex-1 pb-1">Tax</div>
                      <div className="flex-1 pb-1">included</div>
                    </div>
                    <div className="flex items-center ">
                      <div className="flex-1 pb-1">Regular Total Price</div>
                      <div className="flex-1 pb-1 ">
                        {numberToCurrency(
                          flightDetail.ChargeAdult + flightDetail.PriceAdult + flightDetail.TaxAdult
                        )}
                      </div>
                    </div>
                    <div className="flex items-center ">
                      <div className="flex-1 text-content-secondary pb-1">Save</div>
                      <div className="flex-1 pb-1">0</div>
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <div className=" flex-1 ">You pay</div>
                    <div className=" flex-1 font-semibold text-content-secondary">
                      {numberToCurrency(
                        flightDetail.ChargeAdult + flightDetail.PriceAdult + flightDetail.TaxAdult
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FlightDetail;
