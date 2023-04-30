import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SettingsItem from '@oxvo-mobile/components/SettingsItem/SettingsItem';

import { Ionicons } from '@expo/vector-icons';

const settings = [
  {
    icon: <Ionicons name="md-eye-outline" size={20} color="black" />,
    text: 'can see',
    color: 'black',
  },
  {
    icon: <Ionicons name="md-eye-outline" size={20} color="black" />,
    text: 'can see',
    color: 'black',
  },
  {
    icon: <Ionicons name="md-eye-outline" size={20} color="black" />,
    text: 'can see',
    color: 'black',
  },
];
const Settings = () => (
  console.log(settings.length - 1),
  (
    <View style={{ flex: 1 }}>
      <Text style={styles.subTitle}>Account</Text>

      {settings.map((item, index) => {
        console.log(index);
        return (
          <SettingsItem
            Icon={item.icon}
            text={item.text}
            key={index}
            color={item.color}
            idx={index + 1 !== settings.length ? index + 1 : null}
          />
        );
      })}
    </View>
  )
);

export default Settings;
const styles = StyleSheet.create({
  subTitle: {
    fontSize: 12,
    color: '#cccccc',
    fontWeight: '400',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
});
