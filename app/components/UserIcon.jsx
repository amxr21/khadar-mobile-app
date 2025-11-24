import React from 'react'
import { Image, View } from 'react-native'

const iconMap = {
  'private institution': require('../../assets/images/icons/priv.png'),
  'governmental firm': require('../../assets/images/icons/gov.png'),
  'private firm': require('../../assets/images/icons/pf.png'),
}

function UserIcon({ userType  }) {
  const iconSource = iconMap[userType]

  return (
    <View id='UserIcon' className='min-w-16 min-h-16 w-16 h-16 rounded-3xl bg-white items-center justify-center'>
      {iconSource && (
        <Image
          source={iconSource || iconMap['private institution']}
          className='w-10 h-10 min-h-10 min-w-10 p-1.5'
          resizeMode='contain'
        />
      )}
    </View>
  )
}

export default UserIcon