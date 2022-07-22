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
                <RiCheckboxBlankCircleFill size={24} className="text-content-rectangle mr-1" />
              </div>
              <div className="text-code-s font-semibold">One way / Round-trip</div>
            </div>
            <div className="flex items-center ml-5">
              <div>
                <RiRecordCircleFill size={24} className="text-content-primary mr-1" />
              </div>
              <div className="text-code-s font-semibold">Multi-city</div>
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
                <div className="pt-4 pb-3 pl-5 cursor-pointer TicketContentRight hover:before:border-content-primary hover:before:border-2 hover:border-content-primary hover:border-2 rounded-xl min-w-[300px]">
                  <div className="text-body-xs font-semibold opacity-50">FROM</div>
                  <div className="text-heading-l text-content-primary font-semibold">DA NANG</div>
                  <div className="text-code-s font-semibold">Quang Nam, Viet Nam</div>
                </div>
                <div className="cursor-pointer z-10">
                  <img src={ArrowLeftRight} alt="" />
                </div>
                <div className="pt-4 pb-3 cursor-pointer TicketContentLeft hover:before:border-content-primary hover:before:border-2 hover:border-content-primary hover:border-2 rounded-xl min-w-[300px] pl-[40px]">
                  <div className="text-body-xs font-semibold opacity-50">TO</div>
                  <div className="text-heading-l text-content-primary font-semibold">
                    Ho Chi Minh
                  </div>
                  <div className="text-code-s font-semibold">Viet Nam</div>
                </div>
                <div className="px-5 py-4 border flex-1 box-border ml-5 rounded-xl">
                  <div className="flex items-center">
                    <div className="flex-1">
                      <div className="text-body-xs font-semibold opacity-50">DEPARTURE</div>
                      <div className="text-heading-l text-content-primary font-semibold">
                        <div className="flex items-center">
                          <div className="mr-2">Fri, 22 Mar, 2022</div>
                          <img src={Calendar} alt="" />
                        </div>
                      </div>
                      <div className="text-code-s ">
                        <div className="flex items-center">
                          <div className="mr-4 Departure active font-semibold">
                            <div>Prev</div>
                          </div>
                          <div className="mr-4 Departure font-semibold">
                            <div>Next</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-body-xs font-semibold opacity-50">RETURN</div>
                      <div className="text-heading-l text-content-primary font-semibold">
                        <div className="flex items-center">
                          <div className="mr-2">Fri, 22 Mar, 2022</div>
                          <img src={Calendar} alt="" />
                        </div>
                      </div>
                      <div className="text-code-s ">
                        <div className="flex items-center">
                          {/* <div className="mr-4 Departure active font-semibold"> */}
                          <div className="mr-4 Departure font-semibold">
                            <div>Prev</div>
                          </div>
                          <div className="mr-4 Departure font-semibold">
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
