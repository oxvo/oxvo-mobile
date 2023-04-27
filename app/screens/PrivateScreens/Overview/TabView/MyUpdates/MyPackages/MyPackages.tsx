import * as React from 'react';
import { Button, Text } from 'react-native-ui-lib';

import useAuthStore from '@oxvo-mobile/domains/Auth/store/useAuthStore';

const MyPackagesScreen: React.FC = () => {
  const onLogout = useAuthStore((state) => state.onLogout);
  return (
    <Button onPress={onLogout}>
      <Text style={{ color: 'white' }}>Logout</Text>
    </Button>
  );
};

export default MyPackagesScreen;
