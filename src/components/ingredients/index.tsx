import { router } from 'expo-router';
import React from 'react';
import { Alert, ScrollView } from 'react-native';

import { Ingredient } from '@/components/ingredient';
import { IngredientsSelectedModal } from '@/components/ingredientsSelectedModal';
import { services } from '@/services';

import { styles } from './styles';

export function Ingredients() {
  const [ingredients, setIngredients] = React.useState<
    Ingredient[] | undefined
  >();
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

  function handleSearchRecipes() {
    router.push('/recipes/');
  }

  function handleToggleIngredient(ingredient: string) {
    setSelectedIngredients((state) =>
      state.includes(ingredient)
        ? state.filter((selected) => selected !== ingredient)
        : [...state, ingredient]
    );
  }

  React.useEffect(() => {
    async function getIngredients() {
      const ingredients = await services.ingredients.findAll();

      setIngredients(ingredients);
    }

    getIngredients();
  }, []);

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        fadingEdgeLength={20}
        showsVerticalScrollIndicator={false}
      >
        {ingredients?.map((ingredient) => (
          <Ingredient
            key={ingredient.id}
            name={ingredient.name}
            image={services.storage.getImagePath(ingredient.image)}
            isSelected={selectedIngredients.includes(ingredient.id)}
            onPress={() => handleToggleIngredient(ingredient.id)}
          />
        ))}
      </ScrollView>

      {selectedIngredients.length > 0 ? (
        <IngredientsSelectedModal
          onClear={handleClearSelectedIngredients}
          onSearch={handleSearchRecipes}
          quantity={selectedIngredients.length}
        />
      ) : null}
    </>
  );
}
