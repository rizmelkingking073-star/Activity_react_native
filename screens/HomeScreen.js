import React from 'react';
import { Text, View, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import MenuCard from '../components/MenuCard';

export default function HomeScreen({ navigation }) {
  const { theme, userName, isDark } = useTheme();
  const { width } = useWindowDimensions();

  const columns = width > 600 ? 3 : 2;
  const gap = 12;
  const padding = 16;
  const cardWidth = (width - padding * 2 - gap * (columns - 1)) / columns;

  return (
    <ScrollView
      style={{ backgroundColor: theme.background }}
      contentContainerStyle={{ padding }}
    >
      <Text style={[styles.greeting, { color: theme.text }]}>Hello, {userName} 👋</Text>
      <Text style={[styles.mode, { color: theme.subtext }]}>
        Current mode: {isDark ? 'Dark' : 'Light'}
      </Text>

      <View style={styles.grid}>
        <MenuCard
          width={cardWidth}
          icon="🔢"
          title="Lab 1"
          subtitle="Counter & Timer"
          onPress={() => navigation.navigate('Counter')}
        />
        <MenuCard
          width={cardWidth}
          icon="⚙️"
          title="Settings"
          subtitle="Theme & Profile"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  greeting: { fontSize: 24, fontWeight: '800' },
  mode: { fontSize: 14, marginBottom: 20, marginTop: 4 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
});