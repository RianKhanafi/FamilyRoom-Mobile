import React, {Component} from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'native-base';
import Chat from './Screens/Chat/Chat';
import Contact from './Screens/Contact/Contact';
import Setting from './Screens/Setting/Setting';
import ChatRoom from './Screens/Chat/ChatRoom';
import Profile from './Screens/Profile/Profile';
import Tracking from './Screens/Tracking/Tracking';
import Login from './Screens/Registration/login';
import Registration from './Screens/Registration/registration';
import Example from './Example/example';

const MainNavigator = createStackNavigator(
  {
    Chat,
    Contact,
    Setting,
    ChatRoom,
    Profile,
    Tracking,
    Login,
    Registration,
    Example,
    Chat: createMaterialBottomTabNavigator({
      Chat: {
        screen: Chat,
        navigationOptions: {
          tabBarLabel: null,
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon
                style={[{color: tintColor, fontSize: 24}]}
                type="AntDesign"
                name="message1"
              />
            </View>
          ),
          activeColor: '#f20e07',
          inactiveColor: '#b9b9b9',
          barStyle: {backgroundColor: '#fff'},
        },
      },
      Contact: {
        screen: Contact,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon
                style={[{color: tintColor, fontSize: 24}]}
                type="AntDesign"
                name="contacts"
              />
            </View>
          ),
          activeColor: '#f20e07',
          inactiveColor: '#b9b9b9',
          barStyle: {backgroundColor: '#fff'},
        },
      },
      Setting: {
        screen: Setting,
        navigationOptions: {
          tabBarLabel: 'Option',
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon
                style={[{color: tintColor, fontSize: 24}]}
                type="AntDesign"
                name={'setting'}
              />
            </View>
          ),
          activeColor: '#f20e07',
          inactiveColor: '#b9b9b9',
          barStyle: {backgroundColor: '#fff'},
        },
      },
    }),
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  },
);

export default createAppContainer(MainNavigator);
