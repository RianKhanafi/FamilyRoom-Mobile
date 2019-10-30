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
import MyFamily from './Tabs/Family';
import Grand from './Tabs/Grand';
import Kerabat from './Tabs/Kinsman';
class Contact extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
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
                <MyFamily />
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
