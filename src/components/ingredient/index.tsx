import { Image, Pressable, Text } from 'react-native';

import { styles } from './styles';

export function Ingredient() {
  return (
    <Pressable style={styles.container}>
      <Image source={require('@/assets/apple.png')} style={styles.image} />
      <Text style={styles.title}>Ingredient</Text>
    </Pressable>
  );
}
