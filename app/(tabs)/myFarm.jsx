import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MyFarm () {
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor:'white' }} className='bg-red-600'>
        <Text>Test Farm</Text>
    </SafeAreaView>
  );
}
