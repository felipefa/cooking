import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: theme.borderRadius.lg,
    flex: 1,
    height: 192,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
  linear: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 12,
  },
  title: {
    color: theme.colors.white,
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.body.sm,
  },
  minutes: {
    color: theme.colors.yellow_500,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.xs,
  },
});
