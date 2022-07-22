import React from 'react';
import BuyCungBan from '../../Assets/Icons/BaycungbanLogo.svg';
import UsIcon from '../../Assets/Icons/usIcon.svg';
import VietnamIcon from '../../Assets/Icons/vietnamIcon.svg';
import { useLocation, useNavigate } from 'react-router-dom';
const NAVIGATE = [
  {
    label: 'Promotion'
  },
  {
    label: 'Flight Schedule',
    link: 'flight-schedule'
  },
  {
    label: 'About us'
  },
  {
    label: 'Payment Guide'
  }
];
type Header = {
  pageHome?: boolean;
};
interface CustomizedState {
  link: string;
}
const Header: React.FC<Header> = ({ pageHome = false }) => {
  const location = useLocation();
  const state = location.state as CustomizedState;
  const navigate = useNavigate();
  const isPage = (slug: string) => {
    if (state && state.link == slug) {
      return true;
    } else return false;
  };
  return (
    <div className={`flex items-center justify-between`}>
      <div className="flex items-center ">
        <div
          onClick={() => navigate('/')}
          className={`cursor-pointer mr-3 font-semibold text-code-m text-content-normal  ${
            pageHome ? '!text-content-normal' : '!text-white'
          }`}
        >
          Baycungban
        </div>
        <div className="border-2 border-content-primary mr-3 rounded-[100px]">
          <img src={VietnamIcon} alt="" />
        </div>
        <div className="mr-3">
          <img src={UsIcon} alt="" />
        </div>
      </div>
      <div
        className={`flex items-center  ${
          pageHome ? '!text-content-normal' : '!text-white'
        } text-code-s`}
      >
        {NAVIGATE.map((item, i) => (
          <div
            onClick={() => {
              item?.link && navigate('/' + item.link, { state: { link: item.link } });
            }}
            key={i}
            className={`py-[10px] px-[15px] rounded-[100px] ${
              isPage(item.link as string) ? 'bg-bg-hover' : ''
            } hover:bg-bg-hover cursor-pointer`}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div>
        <div
          className={`px-4 py-2  ${
            pageHome ? '!text-white !bg-content-primary' : '!text-content-primary bg-white'
          }  text-code-s font-semibold rounded-xl cursor-pointer`}
        >
          Booking now
        </div>
      </div>
    </div>
  );
};

export default Header;
