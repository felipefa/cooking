import { StyleSheet } from 'react-native';

import { theme } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingTop: 62,
  },
  title: {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.heading.lg,
    marginTop: 12,
  },
  ingredientList: {
    height: 58,
    maxHeight: 58,
  },
  ingredientListContentContainer: {
    gap: 6,
    paddingHorizontal: 12,
    minWidth: '100%',
  },
});
