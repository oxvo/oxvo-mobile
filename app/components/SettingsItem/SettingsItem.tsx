import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SettingsItemProps } from './types';

const SettingsItem = ({ Icon, text, color = 'blue', idx }: SettingsItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{Icon && React.cloneElement(Icon, { color: color })}</View>

      <View style={[styles.textContainer, idx ? styles.divider : null]}>
        <Text style={[styles.textStyle, { color: color }]}>{text}</Text>
      </View>
    </View>
  );
};

export default SettingsItem;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 8,
  },
  iconContainer: {
    width: '10%',
    alignSelf: 'center',
  },
  textContainer: {
    width: '90%',
  },
  divider: {
    paddingBottom: 8,
    borderBottomColor: '#d5d5d5',
    borderBottomWidth: 1,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '500',
  },
});
