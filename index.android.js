// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default class Noter extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.headerText}>- Noter -</Text>
        </View>

        <ScrollView style={styles.scrollContainer}></ScrollView>

        <View style={styles.footer}>
          
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>

          <TextInput style={styles.textInput} 
            placeholder='> note'
            placeholderTextColor='white'
            underlineColorAndroid='transperent'>
          </TextInput>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#e91e63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: '#fff',
    fontSize: 25, 
    padding: 26,
  }
});

AppRegistry.registerComponent('Noter', () => Noter);
