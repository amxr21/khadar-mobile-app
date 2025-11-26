import { Tabs } from 'expo-router';
import React from 'react';

const BoardingBg = require("../../assets/images/bbg-1.jpg");


export default function TabLayout() {

  return (
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarStyle: { display: 'none' }
        }}>
        <Tabs.Screen
            name="SplashScreen"
            options={{
            title: 'test',
            headerShown: false,
            }}
        />

        </Tabs>
  );
}
