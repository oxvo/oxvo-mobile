import React, { memo } from 'react';

import { FontAwesome } from '@expo/vector-icons';

const RoundedImageComponent = () => {
  return <FontAwesome name="user-circle-o" size={24} color="black" />;
};

export default memo(RoundedImageComponent);
