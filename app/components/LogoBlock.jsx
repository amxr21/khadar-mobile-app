import React from "react";
import { View } from "react-native";

import { Image } from "react-native";

const KhadarLogo = require("@/assets/images/logo-white.png");

export default function LogoBlock({ size = 1 }) {
  return (
    <View>
      <Image source={KhadarLogo} className={`${ size == 1 ? 'w-36 h-36' : 'w-28 h-28' }`} resizeMode="contain" />
    </View>
  );
}
