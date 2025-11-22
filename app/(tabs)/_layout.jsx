import { Tabs } from 'expo-router';
import React from 'react';


export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'green',
        tabBarShowLabel: false, 
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          
        }}
      />

      <Tabs.Screen
        name="MyFarm"
        options={{
          title: 'MyFarm',
          
        }}
      />

      <Tabs.Screen
        name="GreenPoints"
        options={{
          title: 'GreenPoints',
          
        }}
      />
      <Tabs.Screen
        name="Control"
        options={{
          title: 'Control',
          
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: 'Settings',
          
        }}
      />
    </Tabs>
  );
}
