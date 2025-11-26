import React, { useState } from "react";
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import AppBackground from "../components/AppBackground";
import LogoBlock from "../components/LogoBlock";
import TextField from "../components/TextField";

import { router } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all required fields");
      return;
    }
    console.log({ email, password });
  };

  return (
    <AppBackground>
      <StatusBar barStyle="light-content" />

      <View className="flex flex-1 justify-center items-center ">
        <LogoBlock title="khadar" subtitle="Green space everywhere!" />

      <View className=" w-full h-[36rem]">

              <Text className="text-white text-3xl font-bold text-center mb-2 mt-4">
                Login
              </Text>
              <Text className="text-white/70 text-center mb-6 text-sm">
                & access your green urban system account
              </Text>

              <ScrollView
                className="w-full px-6 flex-1 h-[24rem]"
                contentContainerStyle={{ paddingBottom: 20 }}
                keyboardShouldPersistTaps="handled"
              >
                {/* Email */}
                <TextField
                  label="Email"
                  value={email}
                  onChangeText={setEmail}
                  placeholder="user@gmail.com"
                  type="email"
                  required
                />

                {/* Password */}
                <TextField
                  label="Password"
                  value={password}
                  onChangeText={setPassword}
                  placeholder="********"
                  type="password"
                  required
                  minLength={6}
                />

                {/* Buttons */}
                <View className="flex flex-col gap-4 mt-4">
                  <TouchableOpacity
                    className="bg-green-600 rounded-xl flex justify-center items-center h-12"
                    onPress={handleLogin}
                  >
                    <Text className="text-white font-semibold text-lg">Login →</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    className="bg-white/70 rounded-xl flex justify-center items-center flex-row h-12"
                  >
                    <Text className="text-black/70 mr-2">UAE PASS</Text>
                  </TouchableOpacity>
                </View>
                {/* Already don't have an account? */}
                <View className="flex-row justify-center mt-4 mb-2">
                  <Text className="text-white/70 text-sm">
                    Don't have an account?{" "}
                  </Text>
                  <TouchableOpacity onPress={() => router.push("/(auth)/SignupScreen")}>
                    <Text className="text-white font-semibold text-sm underline">
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>

              </ScrollView>
              
      </View>
      </View>
    </AppBackground>
  );
}
