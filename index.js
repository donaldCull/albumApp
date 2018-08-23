// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import AlbumList from './src/components/AlbumList';
import Header from './src/components/Header';

// Create a Component
const App = () => (
  <View style={{ flex: 1 }}>
  <Header headerText={'Albums'} />
  <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
