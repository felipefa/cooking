import { StyleSheet } from 'react-native';

import { theme } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.heading.xl,
    lineHeight: 44,
    marginTop: 42,
  },
  subTitle: {
    fontFamily: theme.fonts.family.regular,
  },
  message: {
    color: theme.colors.gray_400,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.md,
    lineHeight: 24,
    marginBottom: 38,
    marginTop: 12,
  },
  ingredientListContentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 150,
    gap: 6,
  }
});