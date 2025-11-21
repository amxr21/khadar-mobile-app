import ParallaxScrollView from '@/components/parallax-scroll-view';
import { Image } from 'expo-image';
import { Text } from 'react-native';

export default function GreenPoints () {
  return (
    <ParallaxScrollView headerImage={<Image/>}>
        <Text>GreenPoints</Text>
    </ParallaxScrollView>
  );
}
