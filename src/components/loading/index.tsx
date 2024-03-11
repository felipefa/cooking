import { ActivityIndicator } from 'react-native';

import { theme } from '@/theme';

import { styles } from './styles';

export function Loading() {
  return (
    <ActivityIndicator
      style={styles.container}
      color={theme.colors.green_600}
    />
  );
}
