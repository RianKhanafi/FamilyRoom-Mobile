import React, {Component} from 'react';
import {
  Container,
  Text,
  Content,
  Grid,
  Row,
  Col,
  View,
  Right,
  Tab,
  Tabs,
  Button,
  TabHeading,
  Icon,
  Item,
  Input,
} from 'native-base';
import {Image, TouchableOpacity} from 'react-native';
import Style from './Style';
import * as firebase from 'firebase';
import MyFamily from './Tabs/Family';
import Grand from './Tabs/Grand';
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userLength: 0,
      userLogin: '',
    };
  }
  UNSAFE_componentWillMount() {
    this.getUsersList();
  }

  getUsersList = async () => {
    const userf = firebase.auth().currentUser;
    const db = firebase.database();
    const ref = db.ref('users');
    ref.on(
      'value',
      email => {
        let userEmail = email.val();
        let userLength = [];
        Object.keys(userEmail).map(key => {
          if (userEmail[key].Users.name !== userf.displayName) {
            userLength.push(key);
          }
        });

        this.setState({
          userLogin: userf.displayName,
          users: userEmail,
          userLength: userLength.length,
        });
      },
      errorObject => {
        console.log('The read failed: ' + errorObject.code);
      },
    );
  };
  render() {
    return (
      <Container>
        <Content>
          <View style={Style.header}>
            <Grid>
              <Col size={4}>
                <Text style={Style.title}>Your Family</Text>
                <Text style={Style.mainTitle}>
                  {this.state.userLength} Available
                </Text>
              </Col>
              <Col size={2}>
                <Button primary style={Style.addUser}>
                  <Icon type="Feather" name="user-plus" />
                </Button>
              </Col>
            </Grid>
          </View>
          <View style={Style.viewTabs}>
            <Tabs
              tabBarUnderlineStyle={Style.tabBarUnderline}
              tabContainerStyle={{elevation: 0}}>
              <Tab
                heading="My Family"
                tabStyle={Style.tabStyle}
                textStyle={Style.textStyle}
                activeTabStyle={Style.background}
                activeTextStyle={Style.activeTextStyle}>
                <MyFamily
                  contact={this.state.users}
                  navigate={this.props.navigation.navigate}
                  userLogin={this.state.userLogin}
                />
              </Tab>
              <Tab
                heading="Other Family"
                tabStyle={Style.tabStyle}
                textStyle={Style.textStyle}
                activeTabStyle={Style.background}
                activeTextStyle={Style.activeTextStyle}>
                <Grand />
              </Tab>
            </Tabs>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Contact;
