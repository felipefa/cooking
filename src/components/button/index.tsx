import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

export function Button({ label, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button} {...rest}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}
