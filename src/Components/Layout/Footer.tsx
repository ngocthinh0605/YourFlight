import React from 'react';
import Phone from '../../Assets/Icons/Phone.svg';
import Email from '../../Assets/Icons/Email.svg';
import Fb from '../../Assets/Icons/Fb.svg';
import Ins from '../../Assets/Icons/Ins.svg';
const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-8">
        <div className="flex items-center">
          <div className="flex items-center mr-[30px] ">
            <div>
              <img src={Phone} alt="" />
            </div>
            <div className="text-code-s text-content-normal pl-1">Call us: +84 908 02 02 58</div>
          </div>
          <div className="flex items-center">
            <div>
              <img src={Email} alt="" />
            </div>
            <div className="text-code-s text-content-normal pl-1">Email: chucinog@gmail.com</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <div>Folow us</div>
            <hr className="min-w-[40px] text-content-normal border-content-normal mx-[10px]" />
            <div className="mr-[10px]">
              <img src={Fb} alt="" />
            </div>
            <div>
              <img src={Ins} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
