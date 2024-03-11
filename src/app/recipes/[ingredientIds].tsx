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

  function goBackToPreviousScreen() {
    router.back();
  }

  React.useEffect(() => {
    services.ingredients.findByIds(ingredientIds).then(setIngredients);
  }, []);

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
        data={['1']}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Recipe
            recipe={{
              name: 'Pasta',
              image:
                'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/658A0A74-039A-487C-A07A-CAAF61B4615D/Derivates/A230DF28-60DF-429D-ABDA-96ED64E9EE10.jpg',
              minutes: 30,
            }}
          />
        )}
      />
    </View>
  );
}
