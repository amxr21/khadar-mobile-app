import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Control () {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'white' }} className='bg-red-600'>
        <Text>Control</Text>
    </SafeAreaView>
  );
}
