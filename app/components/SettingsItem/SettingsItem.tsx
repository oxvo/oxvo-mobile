import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { SettingsItemProps } from './types';

const SettingsItem = ({
  Icon,
  text,
  color = 'blue',
  idx,
  alignIcon = 'left',
  onPress,
}: SettingsItemProps) => {
  return alignIcon === 'left' ? (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          {Icon && React.cloneElement(Icon, { color: color })}
        </View>

        <View style={[styles.textContainer, idx ? styles.divider : null]}>
          <Text style={[styles.textStyle, { color: color }]}>{text}</Text>
          <AntDesign name="right" size={12} color="#A2B5BB" style={{ alignSelf: 'center' }} />
        </View>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.textContainer, idx ? styles.divider : null]}>
          <AntDesign name="left" size={12} color="#A2B5BB" style={{ alignSelf: 'center' }} />
          <Text style={[styles.textStyle, { color: color }]}>{text}</Text>
        </View>
        <View style={styles.iconContainer}>
          {Icon && React.cloneElement(Icon, { color: color })}
        </View>
      </View>
    </TouchableOpacity>
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
    width: '15%',
    alignSelf: 'center',
  },
  textContainer: {
    width: '85%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
