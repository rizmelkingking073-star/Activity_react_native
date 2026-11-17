import React from 'react';
import { View, Text, Switch, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function SettingsScreen() {
  const { theme, isDark, toggleTheme, userName, setUserName } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.row, { backgroundColor: theme.card }]}>
        <Text style={[styles.label, { color: theme.text }]}>Dark Mode</Text>
        <Switch value={isDark} onValueChange={toggleTheme} />
      </View>

      <View style={[styles.box, { backgroundColor: theme.card }]}>
        <Text style={[styles.label, { color: theme.text }]}>Profile Name</Text>
        <TextInput
          value={userName}
          onChangeText={setUserName}
          placeholder="Enter your name"
          placeholderTextColor={theme.subtext}
          style={[styles.input, { color: theme.text, borderColor: theme.subtext }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  box: { padding: 16, borderRadius: 12 },
  label: { fontSize: 16, fontWeight: '600' },
  input: { borderWidth: 1, borderRadius: 8, padding: 10, marginTop: 10, fontSize: 16 },
});