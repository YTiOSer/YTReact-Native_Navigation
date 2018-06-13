/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Alert,
} from 'react-native';
import { createStackNavigator } from 'react-navigation'; // 项目中需要添加 react-navigation 库

class HomeNav extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColoe: '#fff',
    headerTitleStyle: {
      fontSize: 30,
      color: 'blue',
      fontWeight: 'bold'
    }
  }

  render() {
    return(
      <View style={styles.homeStyle}>
        <Text style = {styles.homeTextStyle}>Home Screen</Text>
        <Button 
          style = {styles.homeBtnStyle}
          title = "Go to detail"
          onPress = {() => this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}

class DetailsScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  static navigationOptions = {
    title: 'Details',
    headerStyle: {
      backgroundColor: 'red'
    }
  }

  render() {
    return(
      <View style = {styles.detailStyle}>
        <Text style={styles.detailsTextStyle}>Detail Screen</Text>
        <Button
          title = "Go to details again"
          onPress = { () => this.props.navigation.push('Details')}
        />
        <Button
          title = "Go to home"
          onPress = { () => this.props.navigation.navigate('Home')}
        />
        <Button
          title = "Go back"
          onPress = { 
            () => {
              Alert.alert(
                `Title`,
                'are you sure go back?',
                [
                  {text: '确定', onPress: () => this.props.navigation.goBack()},
                  {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}
                ]
              )
            }
          }
        />
      </View>
    )
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeNav,
    Details: DetailsScreen
  }
)

export default class App extends Component {
  render(){
    return(<RootStack />)
  }
}

const styles = StyleSheet.create({   
    homeStyle: {
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eee'
    },
    homeTextStyle: {
      fontSize: 25 ,backgroundColor: 'green'
    },
    homeBtnStyle: {
      width: 200, height: 44, backgroundColor: 'red', alignItems: 'center'
    },
    detailStyle: {
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'
    },
    detailsTextStyle: {
      fontSize: 25 ,backgroundColor: 'orange'
    }
});