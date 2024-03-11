import { MaterialIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { Ingredients } from '@/components/ingredients';
import { Recipe } from '@/components/recipe';
import { services } from '@/services';

import { styles } from './styles';

export default function Recipes() {
  const params = useLocalSearchParams<{ ingredientIds: string }>();
  const ingredientIds = params.ingredientIds?.split(',');

  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);

  function goBackToPreviousScreen() {
    router.back();
  }

  React.useEffect(() => {
    services.ingredients.findByIds(ingredientIds).then(setIngredients);
  }, [ingredientIds]);

  React.useEffect(() => {
    services.recipes.findByIngredientsIds(ingredientIds).then(setRecipes);
  }, [ingredientIds]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          onPress={goBackToPreviousScreen}
          size={32}
        />

        <Text style={styles.title}>Recipes</Text>
      </View>

      <Ingredients
        contentContainerStyle={styles.ingredientListContentContainer}
        horizontal
        ingredients={ingredients}
        style={styles.ingredientList}
      />

      <FlatList
        columnWrapperStyle={{ gap: 16 }}
        contentContainerStyle={styles.recipeListContentContainer}
        data={recipes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item: recipe }) => <Recipe recipe={recipe} />}
        showsVerticalScrollIndicator={false}
        style={styles.recipeList}
      />
    </View>
  );
}
