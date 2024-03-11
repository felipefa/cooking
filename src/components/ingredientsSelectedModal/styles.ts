import { StyleSheet } from 'react-native';

import { theme } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: theme.colors.black,
    borderRadius: theme.borderRadius.lg,
    bottom: 24,
    opacity: 0.85,
    padding: 16,
    position: 'absolute',
    width: '90%',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerText: {
    color: theme.colors.white,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.sm,
  },
});
