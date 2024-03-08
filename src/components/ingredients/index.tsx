import React from 'react';
import { ScrollView } from 'react-native';

import { Ingredient } from '@/components/ingredient';

import { styles } from './styles';

export function Ingredients() {
  const [selectedIngredients, setSelectedIngredients] = React.useState<
    string[]
  >([]);

  function handleToggleIngredient(ingredient: string) {
    setSelectedIngredients((state) =>
      state.includes(ingredient)
        ? state.filter((selected) => selected !== ingredient)
        : [...state, ingredient]
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      fadingEdgeLength={20}
      showsVerticalScrollIndicator={false}
    >
      {Array.from({ length: 100 }).map((_, index) => (
        <Ingredient
          key={index}
          name="Apple"
          image={require('@/assets/apple.png')}
          isSelected={selectedIngredients.includes(String(index))}
          onPress={() => handleToggleIngredient(String(index))}
        />
      ))}
    </ScrollView>
  );
}
