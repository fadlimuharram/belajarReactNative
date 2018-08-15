/** @format */

// import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import { name as appName } from './app.json';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => (
    <View>
        <Header headerText={'Ini Header'} />
        <AlbumList />
    </View>
    
);

// Render it to the device
AppRegistry.registerComponent(appName, () => App);
