import * as React from 'react';

import useAuthStore from '@oxvo-mobile/domains/Auth/store/useAuthStore';

import { Button, Text } from 'react-native-ui-lib';

const MyPackagesScreen: React.FC = () => {
  const { onLogout } = useAuthStore((state) => state);
  return (
    <Button onPress={onLogout}>
      <Text style={{ color: 'white' }}>Logout</Text>
    </Button>
  );
};

export default MyPackagesScreen;
