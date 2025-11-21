import ParallaxScrollView from '@/components/parallax-scroll-view';
import { Image } from 'expo-image';
import { Text } from 'react-native';

export default function Control () {
  return (
    <ParallaxScrollView headerImage={<Image/>}>
        <Text>Control</Text>
    </ParallaxScrollView>
  );
}
