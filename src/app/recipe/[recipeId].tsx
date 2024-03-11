import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Redirect, router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';

import { Ingredients } from '@/components/ingredients';
import { Loading } from '@/components/loading';
import { Step } from '@/components/step';
import { services } from '@/services';

import { styles } from './styles';

export default function Recipes() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [recipe, setRecipe] = React.useState<Recipe | null>(null);
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [preparations, setPreparations] = React.useState<Preparation[]>([]);

  const { recipeId } = useLocalSearchParams<{ recipeId: string }>();

  React.useEffect(() => {
    services.recipes
      .show(recipeId)
      .then(setRecipe)
      .finally(() => setIsLoading(false));
  }, []);

  React.useEffect(() => {
    services.ingredients.findByRecipeId(recipeId).then(setIngredients);
  }, []);

  React.useEffect(() => {
    services.preparations.findByRecipeId(recipeId).then(setPreparations);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!recipeId || !recipe) {
    return <Redirect href="/" />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />

      <View style={styles.body}>
        <View style={styles.header}>
          <MaterialIcons size={32} name="arrow-back" onPress={router.back} />

          <Text style={styles.name}>{recipe.name}</Text>
          <Text style={styles.time}>{recipe.minutes} minutes to prepare</Text>
        </View>

        <Ingredients
          contentContainerStyle={styles.ingredientListContentContainer}
          horizontal
          ingredients={ingredients}
          style={styles.ingredientList}
        />

        <View style={styles.content}>
          <Text style={styles.preparation}>How to prepare</Text>

          <View style={styles.preparationsContainer}>
            {preparations.length
              ? preparations.map((preparation) => (
                  <Step
                    key={preparation.id}
                    description={preparation.description}
                    step={preparation.step}
                  />
                ))
              : null}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
