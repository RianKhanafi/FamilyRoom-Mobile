import React, {Component} from 'react';
import {
  Container,
  Content,
  View,
  Grid,
  Col,
  Row,
  Text,
  Button,
  Icon,
  Form,
  Item,
  Label,
  Input,
  Spinner,
} from 'native-base';
import {Image} from 'react-native';
import * as firebase from 'firebase';
import Style from './style';
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCTL06E8gpJTEmCdxF8_NXcVk9aexh4Izo',
    authDomain: 'familyroom-3b7fd.firebaseapp.com',
    databaseURL: 'https://familyroom-3b7fd.firebaseio.com',
    projectId: 'familyroom-3b7fd',
    storageBucket: 'familyroom-3b7fd.appspot.com',
    messagingSenderId: '251741117951',
  });
}
class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      phone: '',
      name: '',
      error: '',
      loading: false,
    };
  }
  handleRegistration() {
    this.setState({error: '', loading: true});
    const {email, password} = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        var userf = firebase.auth().currentUser;
        userf.updateProfile({displayName: this.state.name});
        this.setState({error: '', loading: false});
        var db = firebase.database();
        var ref = db.ref('users');
        ref.push({
          Users: {
            email: this.state.email,
            name: this.state.name,
            phone: this.state.phone,
          },
        });
        this.props.navigation.navigate('Login');
      })
      .catch(() => {
        this.setState({error: 'Authentication Failed', loading: false});
      });
  }
  render() {
    return (
      <Container>
        <Content>
          <View style={Style.headerLogin}>
            <Grid>
              <Row style={{alignItems: 'center'}}>
                <Col>
                  <Text style={Style.title}>Create</Text>
                  <Text style={Style.title}>Account</Text>
                </Col>
              </Row>
            </Grid>
          </View>
          <View style={Style.footerLogin}>
            <Grid>
              <Row style={{alignItems: 'center'}}>
                <Col>
                  <Form>
                    <Item stackedLabel last>
                      <Label>Username</Label>
                      <Input
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                      />
                    </Item>
                    <Item stackedLabel last>
                      <Label>Name</Label>
                      <Input
                        onChangeText={name => this.setState({name})}
                        value={this.state.name}
                      />
                    </Item>
                    <Item stackedLabel last>
                      <Label>Phone</Label>
                      <Input
                        onChangeText={phone => this.setState({phone})}
                        value={this.state.phone}
                      />
                    </Item>
                    <Item stackedLabel last>
                      <Label>Password</Label>
                      <Input
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                      />
                    </Item>
                  </Form>
                </Col>
              </Row>
              <Row style={{alignItems: 'center', marginTop: 40}}>
                <Col size={4}>
                  <Text style={Style.loginText}>Register</Text>
                </Col>
                <Col size={1}>
                  {this.state.email.length > 0 ? (
                    <Button
                      style={Style.loginActive}
                      onPress={this.handleRegistration.bind(this)}>
                      {this.state.loading === false ? (
                        <Icon type="AntDesign" name="arrowright" />
                      ) : (
                        <Spinner color="white" style={{paddingLeft: 10}} />
                      )}
                    </Button>
                  ) : (
                    <Button
                      disabled
                      style={Style.login}
                      onPress={() => this.props.navigation.navigate('Chat')}>
                      <Icon type="AntDesign" name="arrowright" />
                    </Button>
                  )}
                </Col>
              </Row>
            </Grid>
          </View>
          <View style={{paddingLeft: 20, paddingRight: 30, marginTop: 30}}>
            <Grid>
              <Row style={{alignItems: 'center'}}>
                <Col size={3} style={{alignItems: 'center'}}>
                  <Button
                    transparent
                    onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={Style.registerText}>Register</Text>
                  </Button>
                </Col>
              </Row>
            </Grid>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Registration;
