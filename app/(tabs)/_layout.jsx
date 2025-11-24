import { Tabs } from 'expo-router';
import React from 'react';

import Header from '../components/Header';
import NavbarButton from '../components/NavbarButton';

const MyFarmIcon = require("../../assets/images/icons/myFarm.png");
const HomeIcon = require("../../assets/images/icons/home.png");
const controlIcon = require("../../assets/images/icons/control.png");
const InfoIcon = require("../../assets/images/icons/info.png");
const GreenPointsIcon = require("../../assets/images/icons/greenPoints.png");

const HeaderImage = require("../../assets/images/header.png");


export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white', tabBarInactiveTintColor: 'white',
        backgroundColor: 'red',
        tabBarStyle: {
          backgroundColor: '#04724D',
          position: "absolute",
          bottom: 0,
          height: 80,
          margin: 20,
          paddingStart: 14, paddingEnd: 14,
          display: 'flex', flexDirection: 'row', 
          borderBottomEndRadius: 40, borderBottomStartRadius: 40, borderTopEndRadius: 16, borderTopStartRadius: 16,
          justifyContent: "space-evenly", alignItems: "center",
        }
      }}>

        
      <Tabs.Screen
        name="index"
        options={{
          title: 'test',
          headerShown: true,
          header: () => (<Header />),
          tabBarIcon: ({ focused }) => (<NavbarButton icon={HomeIcon} focused={focused}/>),
        }}
      />

      <Tabs.Screen
        name="MyFarm"
        options={{
          headerShown: true,
          tabBarShowLabel: true,
          tabBarIcon: ({ focused }) => (<NavbarButton icon={MyFarmIcon} focused={focused}/>),          
        }}
      />

      <Tabs.Screen
        name="GreenPoints"
        options={{
          title: 'GreenPoints',
          headerShown: false,
          tabBarShowLabel: true,
          tabBarIcon: ({ focused }) => (<NavbarButton icon={GreenPointsIcon} focused={focused}/>),          
        }}
      />
      <Tabs.Screen
        name="Control"
        options={{
          title: 'Control',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (<NavbarButton icon={controlIcon} focused={focused}/>),          
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (<NavbarButton icon={InfoIcon} focused={focused}/>),          
        }}
      />
    </Tabs>
  );
}
