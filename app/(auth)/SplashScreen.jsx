import { router } from "expo-router";
import React from "react";
import { StatusBar, Text, View } from "react-native";
import AppBackground from "../components/AppBackground";
import LogoBlock from "../components/LogoBlock";
import PrimaryButton from "../components/PrimaryButton";

export default function SplashScreen({ navigation }) {
  return (
    <AppBackground opacity={1}>
      <StatusBar barStyle="light-content"   />
      <View className="flex flex-1 justify-center items-center gap-8">
        <LogoBlock title="khadar" subtitle="Green space everywhere!" />
        <View className="flex flex-col items-center gap-8">
            <View className="">
                <Text className="text-white text-center text-4xl font-semibold">khadar </Text>
                <Text className="text-white text-center text-xl font-light">Green Space Everywhere!</Text>
            </View>

            <PrimaryButton
              label=""
              onPress={() => router.push("/(auth)/SignupScreen")}
            />

        </View>
      </View>
    </AppBackground>
  );
}
