import { Image, Pressable, PressableProps, Text } from 'react-native';

import { styles } from './styles';

interface IngredientProps extends PressableProps {
  name: string;
  image: string;
  isSelected?: boolean;
}

export function Ingredient({
  name,
  image,
  isSelected = false,
  ...pressableProps
}: IngredientProps) {
  const imageSource = {
    uri: image,
  };

  return (
    <Pressable
      style={[styles.container, isSelected && styles.containerSelected]}
      {...pressableProps}
    >
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  );
}
