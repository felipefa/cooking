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
  containerSelected: {
    backgroundColor: theme.colors.green_100,
    borderWidth: 2,
    borderColor: theme.colors.green_600,
  },
  image: {
    height: 16,
    width: 16,
  },
  title: {
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.body.sm,
  },
});