import { router } from 'expo-router';
import React from 'react';
import { Alert, Text, View } from 'react-native';

import { Ingredients } from '@/components/ingredients';
import { IngredientsSelectedModal } from '@/components/ingredientsSelectedModal';
import { services } from '@/services';

import { styles } from './styles';

export default function Index() {
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
    router.navigate('/recipes/' + selectedIngredients);
  }

  function handleToggleIngredient(ingredientId: string) {
    setSelectedIngredients((oldSelection) =>
      oldSelection.includes(ingredientId)
        ? oldSelection.filter((selected) => selected !== ingredientId)
        : [...oldSelection, ingredientId]
    );
  }

  React.useEffect(() => {
    services.ingredients.findAll().then(setIngredients);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Choose {'\n'}
        <Text style={styles.subTitle}>the ingredients</Text>
      </Text>

      <Text style={styles.message}>
        Find recipes based on the {'\n'}ingredients you choose
      </Text>

      <Ingredients
        contentContainerStyle={styles.ingredientListContentContainer}
        ingredients={ingredients}
        onToggleIngredient={handleToggleIngredient}
        selectedIngredients={selectedIngredients}
      />

      {selectedIngredients.length > 0 ? (
        <IngredientsSelectedModal
          onClear={handleClearSelectedIngredients}
          onSearch={handleSearchRecipes}
          quantity={selectedIngredients.length}
        />
      ) : null}
    </View>
  );
}
