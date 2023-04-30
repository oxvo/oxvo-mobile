import React from 'react';

type IconProps = {
  name: string;
  size: number;
  color: string;
};

type SettingsItemProps = {
  Icon?: React.ReactElement<IconProps>;
  text: any;
  idx: number;
  color: string;
};
export { SettingsItemProps };
