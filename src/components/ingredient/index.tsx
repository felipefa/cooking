import {
  Image,
  ImageProps,
  Pressable,
  PressableProps,
  Text,
} from 'react-native';

import { styles } from './styles';

interface IngredientProps extends PressableProps {
  name: string;
  image: ImageProps['source'];
  isSelected?: boolean;
}

export function Ingredient({
  name,
  image,
  isSelected = false,
  ...pressableProps
}: IngredientProps) {
  return (
    <Pressable
      style={[styles.container, isSelected && styles.containerSelected]}
      {...pressableProps}
    >
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  );
}
