import ParallaxScrollView from '@/components/parallax-scroll-view';
import { Image } from 'expo-image';
import { Text } from 'react-native';

export default function Settings () {
  return (
    <ParallaxScrollView headerImage={<Image/>}>
        <Text>Settings</Text>
    </ParallaxScrollView>
  );
}
