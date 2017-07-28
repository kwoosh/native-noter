// @flow

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import Note from './app/components/Note'

export default class Noter extends Component {
  state = {
    noteArray: [
      { 
        date: '2001',
        note: 'asdfasdfas'
      }
    ],
    noteText: '',
  }

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val} deleteMethod={ () => this.deleteNote(key) } />
    })

    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.headerText}>- Noter -</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>

          {notes}

        </ScrollView>

        <View style={styles.footer}>
          
          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>

          <TextInput style={styles.textInput} 
            onChangeText={noteText => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder='> note'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'>
          </TextInput>

        </View>

      </View>
    )
  }

  addNote() {
    const newNote = {}
    const d = new Date()

    if(this.state.noteText) {
      newNote.date = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}` 
      newNote.note = this.state.noteText

      this.state.noteArray.push(newNote)

      this.setState({ noteArray: this.state.noteArray })
    }

    this.state.noteText = ''
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
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    right: 0,
    left: 0,
  },
  addButton: {
    backgroundColor: '#e91e63',
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    zIndex: 10,
    marginBottom: -45,
    
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff', 
    padding: 20,
    paddingTop: 46,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  }
})

AppRegistry.registerComponent('Noter', () => Noter)