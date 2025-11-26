import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import AppBackground from "../components/AppBackground";
import LogoBlock from "../components/LogoBlock";
import TextField from "../components/TextField";


export default function SignupScreen() {
  // State for all input fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emiratesId, setEmiratesId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [addressArea, setAddressArea] = useState("");

  const handleSubmit = () => {
    // Simple validation
    if (!firstName || !lastName || !email || !password) {
      alert("Please fill all required fields");
      return;
    }
    console.log({
      firstName,
      lastName,
      emiratesId,
      email,
      password,
      city,
      addressArea,
    });
    router.push('/(tabs)')
  };

  return (
    <AppBackground>
      <StatusBar barStyle="light-content" />

      

        <View className="flex-1 items-center justify-center ">
            <LogoBlock size={2}/>
            <View className="w-full flex gap-3 px-6">
                    {/* Title */}
                    <Text className="text-white text-3xl font-bold text-center mb-2">
                    Sign Up
                    </Text>
                    <Text className="text-white/70 text-center mb-6 text-sm">
                    & be part of our green urban system
                    </Text>
                    <ScrollView className="h-[25rem]">
                        {/* First / Last Name Row */}
                        <View className="flex-row gap-4 space-x-3">
                        <View className="flex-1">
                            <TextField
                            label="First Name"
                            value={firstName}
                            onChangeText={setFirstName}
                            placeholder="First Name"
                            required
                            />
                        </View>
                        <View className="flex-1">
                            <TextField
                            label="Last Name"
                            value={lastName}
                            onChangeText={setLastName}
                            placeholder="Last Name"
                            required
                            />
                        </View>
                        </View>

                        {/* Emirates ID */}
                        <TextField
                        label="Emirates ID (for UAE Residents)"
                        value={emiratesId}
                        onChangeText={setEmiratesId}
                        placeholder="784-XXXX-XXXXXXX-X"
                        type="emiratesId"
                        />

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

                        {/* City / Address Row */}
                        <View className="flex-row space-x-3 gap-4">
                        <View className="flex-1">
                            <TextField
                            label="City"
                            value={city}
                            onChangeText={setCity}
                            placeholder="City"
                            />
                        </View>
                        <View className="flex-1">
                            <TextField
                            label="Address Area"
                            value={addressArea}
                            onChangeText={setAddressArea}
                            placeholder="University City"
                            />
                        </View>
                        </View>
                    </ScrollView>


                <View className="flex flex-col gap-4">
                    <TouchableOpacity
                        className="bg-green-600 rounded-xl flex justify-center items-center h-12"
                        onPress={handleSubmit}
                    >
                        <Text className="text-white font-semibold text-lg">Submit →</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="bg-white/70 rounded-xl flex justify-center items-center flex-row h-12"
                    >
                        <Text className="text-black/70 mr-2">UAE PASS</Text>
                    </TouchableOpacity>
                    {/* Already have an account */}
                    <View className="flex-row justify-center mt-4 mb-2">
                      <Text className="text-white/70 text-sm">
                        Already have an account?{" "}
                      </Text>
                      <TouchableOpacity onPress={() => router.push("/(auth)/LoginScreen")}>
                        <Text className="text-white font-semibold text-sm underline">
                          Login
                        </Text>
                      </TouchableOpacity>
                    </View>


                </View>

            </View>

        </View>
    </AppBackground>
  );
}
