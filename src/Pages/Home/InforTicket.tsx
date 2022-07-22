import React from 'react';
import { Dropdown, Menu, Space } from 'antd';
import Calendar from '../../Assets/Icons/calendar.svg';
import ArrowRightIcon from '../../Assets/Icons/arrowRight.svg';
import ArrowLeftRight from '../../Assets/Icons/ArrowLeftRight.svg';
import { RiCheckboxBlankCircleFill, RiRecordCircleFill, RiArrowDownSFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
const menu = (
  <Menu
    items={[
      {
        label: '1st menu item',
        key: '0'
      },
      {
        label: '2nd menu item',
        key: '1'
      },
      {
        type: 'divider'
      },
      {
        label: '3rd menu item',
        key: '3'
      }
    ]}
  />
);
const InforTicket = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{ boxShadow: '0px 4px 30px rgba(77, 70, 250, 0.1)' }}
        className="bg-white rounded-xl p-[30px] absolute min-w-[1230px] pb-[50px] bottom-[-60px]"
      >
        <div>
          <div className="flex items-center">
            <div className="flex items-center">
              <div>
                <RiCheckboxBlankCircleFill size={24} className="mr-1 text-content-rectangle" />
              </div>
              <div className="font-semibold text-code-s">One way / Round-trip</div>
            </div>
            <div className="flex items-center ml-5">
              <div>
                <RiRecordCircleFill size={24} className="mr-1 text-content-primary" />
              </div>
              <div className="font-semibold text-code-s">Multi-city</div>
            </div>
            <div>
              <div className="font-semibold ml-[50px]">
                <Dropdown overlay={menu} trigger={['click']}>
                  <div className="cursor-pointer" onClick={(e) => e.preventDefault()}>
                    <Space>
                      <div className="flex items-center">
                        <div className="mr-1">
                          <span className="text-code-s text-content-primary ">02</span> Adult,{' '}
                          <span className="text-code-s text-content-primary ">01</span> children
                        </div>
                        <RiArrowDownSFill className="text-content-primary" />
                      </div>
                    </Space>
                  </div>
                </Dropdown>
              </div>
            </div>
            <div>
              <div className="font-semibold ml-[50px]">
                <Dropdown overlay={menu} trigger={['click']}>
                  <div className="cursor-pointer" onClick={(e) => e.preventDefault()}>
                    <Space>
                      <div className="flex items-center">
                        <div className="mr-1">
                          <div>Business Class</div>
                        </div>
                        <RiArrowDownSFill className="text-content-primary" />
                      </div>
                    </Space>
                  </div>
                </Dropdown>
              </div>
            </div>
          </div>
          <div>
            <div className="pt-5">
              <div className="flex items-center">
                <div className="box-border pt-4 pb-3 pl-5 cursor-pointer TicketContentRight hover:before:border-content-primary hover:before:border-2 hover:border-content-primary hover:border-2 rounded-xl min-w-[300px]">
                  <div className="font-semibold opacity-50 text-body-xs">FROM</div>
                  <div className="font-semibold text-heading-l text-content-primary">DA NANG</div>
                  <div className="font-semibold text-code-s">Quang Nam, Viet Nam</div>
                </div>
                <div className="z-10 cursor-pointer">
                  <img src={ArrowLeftRight} alt="" />
                </div>
                <div className="box-border pt-4 pb-3 cursor-pointer TicketContentLeft hover:before:border-content-primary hover:before:border-2 hover:border-content-primary hover:border-2 rounded-xl min-w-[300px] pl-[40px]">
                  <div className="font-semibold opacity-50 text-body-xs">TO</div>
                  <div className="font-semibold text-heading-l text-content-primary">
                    Ho Chi Minh
                  </div>
                  <div className="font-semibold text-code-s">Viet Nam</div>
                </div>
                <div className="box-border flex-1 px-5 py-4 ml-5 border rounded-xl">
                  <div className="flex items-center">
                    <div className="flex-1">
                      <div className="font-semibold opacity-50 text-body-xs">DEPARTURE</div>
                      <div className="font-semibold text-heading-l text-content-primary">
                        <div className="flex items-center">
                          <div className="mr-2">Fri, 22 Mar, 2022</div>
                          <img src={Calendar} alt="" />
                        </div>
                      </div>
                      <div className="text-code-s ">
                        <div className="flex items-center">
                          <div className="mr-4 font-semibold Departure active">
                            <div>Prev</div>
                          </div>
                          <div className="mr-4 font-semibold Departure">
                            <div>Next</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold opacity-50 text-body-xs">RETURN</div>
                      <div className="font-semibold text-heading-l text-content-primary">
                        <div className="flex items-center">
                          <div className="mr-2">Fri, 22 Mar, 2022</div>
                          <img src={Calendar} alt="" />
                        </div>
                      </div>
                      <div className="text-code-s ">
                        <div className="flex items-center">
                          {/* <div className="mr-4 font-semibold Departure active"> */}
                          <div className="mr-4 font-semibold Departure">
                            <div>Prev</div>
                          </div>
                          <div className="mr-4 font-semibold Departure">
                            <div>Next</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate('/flight-schedule', { state: { link: 'flight-schedule' } })}
          className="px-5 py-4 bg-content-primary SearchFlights min-w-[245px] absolute text-white font-semibold rounded-xl cursor-pointer"
        >
          <div className="flex items-center">
            <div className="flex-1">Search Flights</div>
            <img src={ArrowRightIcon} />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default InforTicket;
