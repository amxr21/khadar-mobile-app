import React from "react";
import { ImageBackground, Text, View } from "react-native";

export default function AppBackground({ children, opacity=1 }) {
  return (
    <ImageBackground
      source={opacity == 1 ? require("../../assets/images/bbg-1.jpg") : require("../../assets/images/bbg-2.jpg")}
      style={{ flex: 1 }}
      imageStyle={{ resizeMode: "cover" }}
    >
      {/* Dark overlay */}
      <View
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      />

      {children}

      <Text className="absolute bottom-5 self-center text-[#e3ecef] text-[13px]">
        Powered by <Text className="font-semibold">Neuma</Text>
      </Text>
    </ImageBackground>
  );
}

// import React from "react";
// import { ImageBackground, Text, View } from "react-native";
// import styles from "../Style";

// export default function AppBackground({ children }) {
//   return (
//     <ImageBackground
//       source={require("../../assets/images/bbg-1.jpg")}
//       style={styles.bg}
//       imageStyle={styles.bgImage}
//     >
//       <View style={styles.overlay} />
//       {children}
//       <Text style={styles.poweredBy}>
//         Powered by <Text style={{ fontWeight: "600" }}>Neuma</Text>
//       </Text>
//     </ImageBackground>
//   );
// }
