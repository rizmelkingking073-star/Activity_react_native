import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function AppButton({ title, onPress, style }) {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: theme.primary }, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color: theme.onPrimary }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { paddingVertical: 12, paddingHorizontal: 20, borderRadius: 12, alignItems: 'center' },
  text: { fontSize: 16, fontWeight: '600' },
});