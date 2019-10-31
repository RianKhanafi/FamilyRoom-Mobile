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
      userProfiles: [],
      userLogin: '',
      loginName: '',
      loginPhone: '',
      loginMail: '',
    };
  }

  componentDidMount() {
    this.getProfile();
  }

  getProfile() {
    let userf = firebase.auth().currentUser;
    this.setState({userLogin: userf.displayName});
    const db = firebase.database();
    const ref = db.ref('users');
    ref.on(
      'value',
      data => {
        let userProfile = [];
        data.forEach(child => {
          userProfile = [
            {
              _id: child.key,
              email: child.val().Users.email,
              name: child.val().Users.name,
              phone: child.val().Users.phone,
            },
            ...userProfile,
          ];
        });
        this.setState({
          userProfiles: userProfile,
        });
        this.state.userProfiles.map(item => {
          if (item.name === this.state.userLogin) {
            this.setState({
              loginName: item.name,
              loginPhone: item.phone,
              loginMail: item.email,
            });
          }
        });
      },
      errorObject => {
        console.log('The read failed: ' + errorObject.code);
      },
    );
  }

  render() {
    let email = this.props.navigation.getParam('email');
    let phone = this.props.navigation.getParam('phone');
    let name = this.props.navigation.getParam('name');
    let userSend = this.props.navigation.getParam('userSend');
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
                source={require('../../../public/asset/image/moana.jpg')}
                style={Style.imageSize}
              />
            </View>
            <Text style={Style.name}>{name}</Text>
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
                  <Text style={Style.text}>{this.state.loginName}</Text>
                </Col>
              </Row>
              <Row style={Style.rowDimention}>
                <Col size={1}>
                  <Icon type="AntDesign" name="mail" />
                </Col>
                <Col size={4}>
                  <Text style={Style.text}>{email}</Text>
                </Col>
              </Row>
              <Row style={Style.rowDimention}>
                <Col size={1}>
                  <Icon type="SimpleLineIcons" name="location-pin" />
                </Col>
                <Col size={4}>
                  <Text style={Style.text}>Jl. Sukasari III No.47, Bogor</Text>
                </Col>
              </Row>
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
