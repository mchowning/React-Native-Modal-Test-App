/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import Modal from "react-native-modal";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
      super(props)
      this.state = { showModal: false };

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
          <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, alignSelf: 'stretch'}}
              onFocus={ () => console.log('onFocus called on TextInput #1')}
              onBlur={ () => console.log('onBlur called on TextInput #1')}
          />
          <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, alignSelf: 'stretch'}}
              onFocus={ () => console.log('onFocus called on TextInput #2')}
              onBlur={ () => console.log('onBlur called on TextInput #2')}
          />
          <Button
              onPress={ () => this.setState( () => ({ showModal: true}))}
              title="Open Modal"
              color="#841584"
          />
          <View>
              <Modal isVisible={this.state.showModal}>
                  <View style={{ flex: 1 }}>
                      <Text>A modal</Text>
                      <Button
                          onPress={ () => this.setState( () => ({ showModal: false}))}
                          title="Close Modal"
                          color="#FFF"
                      />
                  </View>
              </Modal>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
