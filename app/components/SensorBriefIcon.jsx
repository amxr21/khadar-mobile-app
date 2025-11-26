import React from 'react';
import { View } from 'react-native';

import { Image } from 'react-native';

const soil = require("@/assets/images/icons/soil.png")
const water = require("@/assets/images/icons/water.png")
const sunlight = require("@/assets/images/icons/sunlight.png")
const temp = require("@/assets/images/icons/temp.png")

export default function SensorBriefIcon({ color = 'white', icon }) {

    const getIcon = () => {
        switch (icon){
            case 'soil': return soil;
            case 'water': return water;
            case 'sunlight': return sunlight;
            case 'temp': return temp;
            default: return water
        }    

    }
    
    return (
        <View className='h-full w-7 flex items-center justify-center'>
            <Image
                source={getIcon()}
                // style={{ width: size, height: size }}
                resizeMode="contain"
                className={`mx-auto h-full ${icon == 'temp' ? 'w-5': icon == 'water' || icon == 'soil' ? 'w-7' : ' w-7'}`}
            />    
        </View>
);



}
