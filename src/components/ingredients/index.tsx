import React from 'react';
import { Alert, ScrollView, ScrollViewProps } from 'react-native';

import { Ingredient } from '@/components/ingredient';
import { services } from '@/services';

interface IngredientsProps extends ScrollViewProps {
  ingredients?: Ingredient[];
  onToggleIngredient?: (ingredientId: string) => void;
  selectedIngredients?: string[];
}

export function Ingredients({
  fadingEdgeLength = 20,
  ingredients = [],
  onToggleIngredient,
  selectedIngredients,
  ...props
}: IngredientsProps) {
  return (
    <ScrollView
      fadingEdgeLength={fadingEdgeLength}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...props}
    >
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.id}
          name={ingredient.name}
          image={services.storage.getImagePath(ingredient.image)}
          isSelected={selectedIngredients?.includes(ingredient.id)}
          onPress={() => onToggleIngredient?.(ingredient.id)}
        />
      ))}
    </ScrollView>
  );
}
