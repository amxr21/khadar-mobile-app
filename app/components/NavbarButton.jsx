import React from 'react';
import { Image, View } from 'react-native';

export default function NavbarButton({ focused , icon}) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        width: 52,
        height: 52,
        borderRadius: 22,
        opacity: focused ? 1 : 0.6,
        backgroundColor: focused ? "rgba(255, 255, 255, 0.1)" : "transparent",
        borderWidth: focused ? 1 : 0,
        borderColor: focused ? "rgba(255, 255, 255, 0.2)" : "transparent",
      }}
    >
      <Image
        source={icon}
        style={{
            width: '100%',
            height: '100%',
            tintColor: "white",
        }}
      />
    </View>
  );
}
