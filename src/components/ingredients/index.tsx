import { ScrollView } from 'react-native';

import { Ingredient } from '@/components/ingredient';

import { styles } from './styles';

export function Ingredients() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {Array.from({ length: 100 }).map((_, index) => (
        <Ingredient key={index} />
      ))}
    </ScrollView>
  );
}
