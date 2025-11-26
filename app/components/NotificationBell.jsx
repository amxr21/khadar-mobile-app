import React from 'react'
import { Text, View } from 'react-native'
import Svg, { Path } from "react-native-svg"

function NotificationBell() {

  const icon = () => {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="white" className="size-6">
        <Path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
      </Svg>

    )
  }


  return (
    <View className='w-8 h-8 relative'>
      {icon()}
      <View className='bg-secondaryGreen w-4 h-4 flex items-center justify-center rounded-[4px] absolute -top-1 right-0 z-100'>
        <Text className='text-white text-xs'>1</Text>
      </View>
    </View>
  )
}

export default NotificationBell