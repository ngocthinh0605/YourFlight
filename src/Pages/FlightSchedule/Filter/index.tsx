import React from 'react';
import { Menu, Dropdown, Space } from 'antd';
import { RiArrowDownSFill } from 'react-icons/ri';
import FilterButton from '../../../Components/FilterButton/FilterButton';
import { ArilineDropDown, PriceDropdown, TypeFilter } from '../../../Contant';
import { TimePicker } from 'antd';
import './index.scss';
import moment from 'moment';
type FilterType = {
  handleFilterDropDown: (e: any, key: string) => void;
};
const Filter: React.FC<FilterType> = ({ handleFilterDropDown }) => {
  const handleMenuClick = (e: any) => {
    // console.log('click', e);
  };
  const handleMenuClickCategory = (e: any) => {
    handleFilterDropDown(e, TypeFilter.CATEGORY);
  };
  const handleMenuClickPrice = (e: any) => {
    handleFilterDropDown(e, TypeFilter.PRICE);
  };
  const handleFilterTimePicker = (e: any) => {
    handleFilterDropDown(e, TypeFilter.TIME);
  };
  return (
    <div>
      <div className="flex items-center justify-end">
        <div className="text-code-xs font-semibold text-black pr-[14px]">FILTER</div>
        <div className="mr-[5px]">
          <FilterButton title="Transit" />
        </div>
        <div className="mr-[5px]">
          {/* <TimePicker
            className="TimePickerFilter !rounded-xl !border-0 !py-2 "
            placeholder="Time"
            format={'HH:mm'}
            onOk={handleFilterTimePicker}
            suffixIcon={<RiArrowDownSFill className="text-content-primary" />}
          /> */}
          <TimePicker.RangePicker
            className="TimePickerFilter !rounded-xl !border-0 !py-2 "
            onOk={handleFilterTimePicker}
            format={'HH:mm'}
            suffixIcon={<RiArrowDownSFill className="text-content-primary" />}
          />
          {/* <FilterButton title="Time" /> */}
        </div>
        <div className="mr-[5px]">
          <FilterButton
            title="Airline"
            items={ArilineDropDown}
            onClickMenu={handleMenuClickCategory}
          />
        </div>
        <div className="mr-[5px]">
          <FilterButton title="Price" items={PriceDropdown} onClickMenu={handleMenuClickPrice} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
