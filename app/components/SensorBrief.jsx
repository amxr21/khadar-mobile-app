import React from 'react';
import { Text, View } from 'react-native';
import SensorBriefIcon from './SensorBriefIcon';

const SensorBrief = ({ sensorType, latestM, latestChange  }) => {
  return (
    <View className='flex flex-col gap-3'>
      <View className="flex flex-row flex-1 h-16 gap-1 overflow-hidden">
        <SensorBriefIcon icon={ sensorType || 'soil'} />

        <View className="flex-1 justify-center ">
          <Text className="text-white text-lg font-medium">{latestM || "51"}</Text>
          <View>
              <Text className="text-white font-thin">{latestChange || "0"}</Text>

          </View>
        </View>
      </View>

      <Text className='text-base'>{sensorType == 'temp' ? "Temprature" : sensorType == 'water' ? "Humidity" : sensorType == 'soil' ? "Soil" : '' }</Text>

    </View>
  )
}

export default SensorBrief;
