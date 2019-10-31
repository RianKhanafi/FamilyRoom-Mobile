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
import Header from '../../Components/Header/Header';
import * as firebase from 'firebase';
import MyFamily from './Tabs/Family';
import Grand from './Tabs/Grand';
import Kerabat from './Tabs/Kinsman';
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentWillMount() {
    this.getUsersList();
  }

  getUsersList = async () => {
    const db = firebase.database();
    const ref = db.ref('users');
    ref.on(
      'value',
      email => {
        let userEmail = email.val();
        this.setState({
          users: userEmail,
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
                <Text style={Style.mainTitle}>20 Available</Text>
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
                <MyFamily contact={this.state.users} />
              </Tab>
              <Tab
                heading="kinsman"
                tabStyle={Style.tabStyle}
                textStyle={Style.textStyle}
                activeTabStyle={Style.background}
                activeTextStyle={Style.activeTextStyle}>
                <Kerabat />
              </Tab>
              <Tab
                heading="Grandfather"
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
