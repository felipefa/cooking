import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import Animated, { BounceOutDown, SlideInDown } from 'react-native-reanimated';

import { Button } from '@/components/button';
import { theme } from '@/theme';

import { styles } from './styles';

interface IngredientsSelectedModalProps {
  onClear: () => void;
  onSearch: () => void;
  quantity: number;
}

export function IngredientsSelectedModal({
  onClear,
  onSearch,
  quantity,
}: IngredientsSelectedModalProps) {
  return (
    <Animated.View
      entering={SlideInDown}
      exiting={BounceOutDown}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {quantity} ingredient{quantity === 1 ? '' : 's'} selected
        </Text>
        <MaterialIcons
          color={theme.colors.gray_400}
          name="close"
          onPress={onClear}
          size={24}
        />
      </View>

      <Button label="Search recipes" onPress={onSearch} />
    </Animated.View>
  );
}
