import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { HomeTabBar, LineupTabBar, RootStack } from './app/Navigator';


const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
