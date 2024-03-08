import { Text, View } from 'react-native';

import { Ingredients } from '@/components/ingredients';

import { styles } from './styles';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Choose {'\n'}
        <Text style={styles.subTitle}>the ingredients</Text>
      </Text>

      <Text style={styles.message}>
        Find recipes based on the {'\n'}ingredients you choose
      </Text>

      <Ingredients />
    </View>
  );
}
