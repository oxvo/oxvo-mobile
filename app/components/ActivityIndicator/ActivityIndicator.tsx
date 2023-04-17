import React from 'react';
import { ActivityIndicator as Loading, StyleSheet, View } from 'react-native';

const ActivityIndicator: React.FC = () => (
  <View style={[styles.container, styles.horizontal]}>
    <Loading />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default ActivityIndicator;
