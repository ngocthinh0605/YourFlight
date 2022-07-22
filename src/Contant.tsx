import VJLogo from './Assets/Icons/VJ.png';
import VnAirlines from './Assets/Icons/VNALogo.svg';
import Bamboo from './Assets/Icons/Bamboo.svg';
export const AirLine = {
  VJ: {
    label: 'VIET JECTS',
    img: (
      <div className=" border border-blackalpha-1 rounded-lg">
        <img className="h-[30px] w-[30px] rounded-lg" src={VJLogo} />
      </div>
    )
  },
  VN: {
    label: 'VIETNAME AIRLINES',
    img: (
      <div className="px-[5px] py-[9px] border border-blackalpha-1 rounded-lg">
        <img src={VnAirlines} />
      </div>
    )
  },
  QH: {
    label: 'BAMBOO AIRWAYS',
    img: <img src={Bamboo} />
  }
};
export const PointSym = {
  SGN: { label: 'HO CHI MINH (SGN)', airport: 'Tan Son Nhat Init' },
  HPH: { label: 'CAT BI (HPH)', airport: 'Cat Bi Airport' }
};
export const ArilineDropDown = [
  { label: 'Vietjet Air', key: 'VJ' },
  { label: 'Bamboo Airways', key: 'QH' },
  { label: 'Vietnam Airlines', key: 'VN' }
];

export const PriceDropdown = [
  { label: 'Ascending', key: 'ASC' },
  { label: 'Decrease', key: 'DEC' },
  { label: '0 to 1tr', key: 'F0T1' },
  { label: '1tr to 2tr', key: 'F1T2' },
  { label: 'From 2tr', key: 'F2' }
];
export enum PriceFilter {
  ASC = 'ASC',
  DEC = 'DEC',
  F0T1 = 'F0T1',
  F1T2 = 'F1T2',
  F2 = 'F2'
}
export enum TypeFilter {
  CATEGORY = 'category',
  PRICE = 'price',
  TIME = 'time'
}
