import * as React from 'react';
import useLogout from '@oxvo-mobile/domains/Auth/hooks/useLogout';
import { Button, Text } from 'react-native-ui-lib';

const MyPackagesScreen: React.FC = () => {
  const logout = useLogout();
  return (
    <Button onPress={logout}>
      <Text style={{ color: 'white' }}>Logout</Text>
    </Button>
  );
};

export default MyPackagesScreen;
