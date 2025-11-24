import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Settings () {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'white' }} className='bg-red-600'>
        <Text>Settings</Text>
    </SafeAreaView>
  );
}
