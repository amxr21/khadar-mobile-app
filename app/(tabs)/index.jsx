import { Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';


export default function Dashboard () {
  return (
    <>
      {/* <StatusBar style="light" translucent backgroundColor="transparent" /> */}

      <SafeAreaView style={{ flex: 1 }}>
          <Text className="text-xl font-bold">Test Home</Text>
      </SafeAreaView>
    </>
  );
}
