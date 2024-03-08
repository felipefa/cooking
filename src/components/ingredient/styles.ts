import { StyleSheet } from 'react-native';

import { theme } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    borderColor: theme.colors.gray_200,
    borderRadius: theme.borderRadius.full,
    borderWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
    height: 42,
    paddingHorizontal: 16,
  },
  image: {},
  title: {},
});