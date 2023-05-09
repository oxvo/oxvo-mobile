/*
    Inspiration: https://dribbble.com/shots/15066078-Add-button
*/
import * as React from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';

import SettingsItem from '@oxvo-mobile/components/SettingsItem/SettingsItem';

import { Ionicons } from '@expo/vector-icons';
import { AnimatePresence, Image as MImage, Text as MText, View as MView } from 'moti';

import { settings } from './KebabMenu.mocks';

export default function MoreButton({ top = true }) {
  const [active, setActive] = React.useState(false);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={{ alignItems: 'center' }}>
        <AnimatePresence>
          {!!active && (
            <MView
              from={{ opacity: 0, translateY: 0 }}
              animate={{
                opacity: 1,
                translateY: settings.length * 40 + 10,
              }}
              exit={{ opacity: 0, translateY: 10 }}
              style={{
                backgroundColor: '#fff',
                borderRadius: 20,
                width: 250,
                borderColor: '#cccccc',
                borderWidth: 1,
                padding: 10,
                position: 'absolute',
                bottom: 0,
              }}
            >
              {settings.map((item, index) => {
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
            </MView>
          )}
        </AnimatePresence>
        <TouchableOpacity onPress={() => setActive((active) => !active)} activeOpacity={1}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,

              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
