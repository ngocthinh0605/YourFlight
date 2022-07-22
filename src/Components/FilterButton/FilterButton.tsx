import { Dropdown, Menu, Space } from 'antd';
import React, { useState } from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';
type Button = {
  title?: string;
  items?: { label: string; key: string }[];
  onClickMenu?: (e: any) => void;
};
const FilterButton: React.FC<Button> = ({
  title = 'FilterButton',
  items = [
    { label: 'label', key: '1' },
    { label: 'label', key: '2' }
  ],
  onClickMenu
}) => {
  const [label, setLabel] = useState<string>(title ? title : 'label');
  const getLablel = (key: string) => items.filter((item) => item.key == key && item.label);

  const handleMenuClick = (e: any) => {
    // console.log('click', e);
    setLabel(getLablel(e.key)[0].label);
    onClickMenu && onClickMenu(e);
  };

  const menu = <Menu onClick={(e) => handleMenuClick(e)} items={items} />;
  return (
    <div>
      <Dropdown trigger={['click']} overlay={menu}>
        <Space>
          <div className="cursor-pointer pl-4 py-2 pr-[10px] min-w-[120px] text-code-xs bg-white rounded-xl flex items-center justify-between">
            <div>{label}</div>
            <RiArrowDownSFill className="text-content-primary" />
          </div>
        </Space>
      </Dropdown>
    </div>
  );
};

export default FilterButton;
