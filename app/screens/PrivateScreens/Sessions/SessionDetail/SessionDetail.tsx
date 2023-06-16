import React from 'react';
import { Text, View } from 'react-native';

import { useRoute } from '@react-navigation/native';

// @ts-expect-error @ts-ignore
const SessionDetail = ({ route }) => {
  const routex = useRoute();
  console.log('session detail', routex);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Session Detail Screen {JSON.stringify(route?.params?.session)}</Text>
    </View>
  );
};

export default SessionDetail;
