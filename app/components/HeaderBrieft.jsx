import React from 'react';
import { View } from 'react-native';
import SensorBrief from "./SensorBrief";

function HeaderBrieft() {
  return (
    <View className="flex flex-row gap-2 overflow-hidden">
      <SensorBrief 
        sensorType="temp" 
        latestChange="+1.2°C" 
        latestM="26.4°C" 
      />

      <SensorBrief 
        sensorType="water" 
        latestChange="-3%" 
        latestM="58%" 
      />

      <SensorBrief 
        sensorType="sunlight" 
        latestChange="+12 lx" 
        latestM="340 lx" 
      />

      <SensorBrief 
        sensorType="soil" 
        latestChange="+0.4%" 
        latestM="29%" 
      />
    </View>
  );
}

export default HeaderBrieft;
