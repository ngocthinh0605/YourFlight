import React from 'react';

const index = ({
  title = 'Title',
  bg = 'bg-bg-secondary',
  textColor = 'text-content-primary',
  type = 'primary'
}: {
  title?: string;
  bg?: string;
  textColor?: string;
  type?: string;
}) => {
  if (type === 'primary') {
    return (
      <div>
        <div
          className={`py-[10px] ${
            bg + ' ' + textColor
          }  text-center rounded-xl font-semibold cursor-pointer`}
        >
          {title}
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default index;
