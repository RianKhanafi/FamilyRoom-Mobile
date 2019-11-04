import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {
  Container,
  Content,
  Grid,
  Col,
  Row,
  View,
  Text,
  Icon,
  Header,
  Left,
  Right,
  Body,
  Button,
} from 'native-base';
import * as firebase from 'firebase';
import Style from './Style';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thisUser: [],
      email: this.props.navigation.getParam('email'),
      phone: this.props.navigation.getParam('phone'),
      name: this.props.navigation.getParam('name'),
      userSend: this.props.navigation.getParam('userSend'),
      userLogin: '',
      emailLogin: '',
      phoneLogin: '',
      latitude: 0,
      longitude: 0,
    };
  }

  UNSAFE_componentWillMount() {
    this.getProfile();
  }

  getProfile = async () => {
    let userf = firebase.auth().currentUser;
    this.setState({
      userLogin: userf.displayName,
    });
    const db = firebase.database();
    const ref = db.ref('users');
    ref.on(
      'value',
      email => {
        let userEmail = email.val();
        Object.keys(userEmail).map(key => {
          console.log(this.state.userLogin);
          if (userEmail[key].Users.name === userf.displayName) {
            this.setState({
              emailLogin: userEmail[key].Users.email,
              phoneLogin: userEmail[key].Users.phone,
              latitude: userEmail[key].Users.latitude,
              longitude: userEmail[key].Users.longitude,
            });
          }
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
        <Header hasSegment style={Style.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon
                type="Ionicons"
                name="md-arrow-round-back"
                style={{color: 'black'}}
              />
            </Button>
          </Left>
          <Body>
            <Text style={Style.brand}>{this.props.title}</Text>
          </Body>
          <Right>
            <Button transparent onPress={this.props.handleHeader}>
              <Icon
                type="Feather"
                name="search"
                style={{fontSize: 25, color: '#000'}}
              />
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={Style.wrapper}>
            <View style={Style.wrapperImage}>
              <Image
                source={
                  this.props.navigation.getParam('email') === undefined
                    ? {
                        uri: `https://ui-avatars.com/api/?size=256&rounded=true&name=${this.state.userLogin.replace(
                          ' ',
                          '+',
                        )}`,
                      }
                    : {
                        uri: `https://ui-avatars.com/api/?size=256&rounded=true&name=${this.state.name.replace(
                          ' ',
                          '+',
                        )}`,
                      }
                }
                style={Style.imageSize}
              />
            </View>

            <Text style={Style.name}>
              {this.props.navigation.getParam('email') === undefined
                ? this.state.userLogin
                : this.state.name}
            </Text>

            <View style={{flexDirection: 'row', flex: 1, width: '30%'}}>
              <View style={{flex: 1}}>
                <Icon type="AntDesign" name="message1" />
              </View>
              <View style={{flex: 2}}>
                <Text>Message</Text>
              </View>
            </View>
          </View>
          <View style={Style.bio}>
            <View style={Style.marginBio}>
              <Text style={Style.info}>Info:</Text>
            </View>
            <Grid>
              <Row style={Style.rowDimention}>
                <Col size={1}>
                  <Icon type="Feather" name="phone" />
                </Col>
                <Col size={4}>
                  <Text style={Style.text}>
                    {this.props.navigation.getParam('phone') === undefined
                      ? this.state.phoneLogin
                      : this.state.phone}
                  </Text>
                </Col>
              </Row>
              <Row style={Style.rowDimention}>
                <Col size={1}>
                  <Icon type="AntDesign" name="mail" />
                </Col>
                <Col size={4}>
                  <Text style={Style.text}>
                    {this.props.navigation.getParam('email') === undefined
                      ? this.state.emailLogin
                      : this.state.email}
                  </Text>
                </Col>
              </Row>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Tracking', {
                    name: this.state.userLogin,
                    latitude: this.state.latitude, // didapatkan ketika get User
                    longitude: this.state.longitude, // didapatkan ketika get User
                  })
                }>
                <Row style={Style.rowDimention}>
                  <Col size={1}>
                    <Icon type="SimpleLineIcons" name="location-pin" />
                  </Col>
                  <Col size={4}>
                    <Text style={Style.text}>
                      Jl. Sukasari III No.47, Bogor
                    </Text>
                  </Col>
                </Row>
              </TouchableOpacity>
              <Row style={Style.rowDimention}>
                <Button
                  full
                  style={Style.button}
                  onPress={() => this.props.navigation.goBack()}>
                  <Text>Message</Text>
                </Button>
              </Row>
            </Grid>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Profile;
