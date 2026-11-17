import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import AppButton from '../components/AppButton';

export default function CounterScreen() {
  const { theme } = useTheme();
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.big, { color: theme.text }]}>{count}</Text>
      <Text style={{ color: theme.subtext, marginBottom: 20 }}>
        Time on screen: {seconds}s
      </Text>

      <View style={styles.buttons}>
        <AppButton title="−" onPress={() => setCount(count - 1)} style={styles.btn} />
        <AppButton title="+" onPress={() => setCount(count + 1)} style={styles.btn} />
      </View>
      <AppButton title="Reset" onPress={() => setCount(0)} style={{ marginTop: 12 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  big: { fontSize: 64, fontWeight: '800' },
  buttons: { flexDirection: 'row', gap: 12 },
  btn: { minWidth: 80 },
});