import { StyleSheet } from 'react-native';

import { theme } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 22,
  },
  step: {
    color: theme.colors.black,
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.body.sm,
  },
  description: {
    color: theme.colors.gray_400,
    flex: 1,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.sm,
  },
});
