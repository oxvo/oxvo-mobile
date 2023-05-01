import React from 'react';

type IconProps = {
  name: string;
  size: number;
  color: string;
};

type SettingsItemProps = {
  Icon?: React.ReactElement<IconProps>;
  text: string;
  idx: number;
  color: string;
  alignIcon: string;
};
export { SettingsItemProps };
