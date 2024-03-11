import { Text, View } from 'react-native';

import { styles } from './styles';

interface StepProps {
  description: string;
  step: number;
}

export function Step({ description, step }: StepProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.step}>{step}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
