import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { FlatList, Text, View } from 'react-native';

import { Recipe } from '@/components/recipe';

import { styles } from './styles';

export default function Recipes() {
  function goBackToPreviousScreen() {
    router.back();
  }

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
