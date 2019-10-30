import React, {Component} from 'react';
import {
  Container,
  Text,
  Content,
  Grid,
  Row,
  Col,
  View,
  Icon,
  Button,
} from 'native-base';
import {Image, TouchableOpacity} from 'react-native';
import Style from './Style';
import Header from '../../Components/Header/Header';

class Setting extends Component {
  render() {
    return (
      <Container>
        <Header title="Option" />
        <Content style={{margin: 20}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Grid style={{marginBottom: 10}}>
              <Col size={1}>
                <Row style={{alignItems: 'center'}}>
                  <Icon type="EvilIcons" name="user" style={Style.profile} />
                </Row>
              </Col>
              <Col size={5}>
                <Row style={{alignItems: 'center'}}>
                  <Text>My Profile</Text>
                </Row>
              </Col>
            </Grid>
          </TouchableOpacity>
          <Grid style={{marginBottom: 10}}>
            <Col size={1} style={{alignItems: 'center'}}>
              <Row style={{alignItems: 'center'}}>
                <Icon type="FontAwesome" name="edit" style={{fontSize: 40}} />
              </Row>
            </Col>
            <Col size={5}>
              <Row style={{alignItems: 'center'}}>
                <Text>Edit Profile</Text>
              </Row>
            </Col>
          </Grid>
          <Grid style={{marginBottom: 10}}>
            <Col size={1} style={{alignItems: 'center'}}>
              <Row style={{alignItems: 'center'}}>
                <Icon type="AntDesign" name="adduser" style={{fontSize: 40}} />
              </Row>
            </Col>
            <Col size={5}>
              <Row style={{alignItems: 'center'}}>
                <Text>Add Contact</Text>
              </Row>
            </Col>
          </Grid>
          <Grid style={{marginBottom: 10}}>
            <Col size={1} style={{alignItems: 'center'}}>
              <Row style={{alignItems: 'center'}}>
                <Icon type="AntDesign" name="logout" style={{fontSize: 40}} />
              </Row>
            </Col>
            <Col size={5}>
              <Row style={{alignItems: 'center'}}>
                <Button
                  transparent
                  onPress={() => this.props.navigation.navigate('Login')}>
                  <Text>Log out</Text>
                </Button>
              </Row>
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default Setting;
