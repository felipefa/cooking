import React from 'react';
import { Alert, ScrollView } from 'react-native';

import { Ingredient } from '@/components/ingredient';
import { IngredientsSelectedModal } from '@/components/ingredientsSelectedModal';

import { styles } from './styles';

export function Ingredients() {
  const [selectedIngredients, setSelectedIngredients] = React.useState<
    string[]
  >([]);

  function handleClearSelectedIngredients() {
    Alert.alert(
      'Clear ingredients?',
      'Are you sure you want to clear the selected ingredients?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Clear',
          onPress: () => setSelectedIngredients([]),
        },
      ]
    );
  }

  function handleToggleIngredient(ingredient: string) {
    setSelectedIngredients((state) =>
      state.includes(ingredient)
        ? state.filter((selected) => selected !== ingredient)
        : [...state, ingredient]
    );
  }

  return (
    <>
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

      {selectedIngredients.length > 0 ? (
        <IngredientsSelectedModal
          onClear={handleClearSelectedIngredients}
          onSearch={() => {}}
          quantity={selectedIngredients.length}
        />
      ) : null}
    </>
  );
}
