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
  Spinner,
  Input,
} from 'native-base';
import {Image, Alert} from 'react-native';
import * as firebase from 'firebase';
import Style from './style';
import {
  FIRABASE_API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
} from 'react-native-dotenv';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: `${FIRABASE_API_KEY}`,
    authDomain: `${AUTH_DOMAIN}`,
    databaseURL: `${DATABASE_URL}`,
    projectId: `${PROJECT_ID}`,
    storageBucket: `${STORAGE_BUCKET}`,
    messagingSenderId: `${MESSAGING_SENDER_ID}`,
  });
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
    };
  }

  handleLogin = async () => {
    this.setState({error: '', loading: true});
    const {email, password} = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({error: '', loading: false});
        this.props.navigation.navigate('Chat', {email: this.state.email});
      })
      .catch(() => {
        this.setState({error: 'Authentication Failed', loading: false});
        Alert.alert('Error', 'Incorrect Email or Password');
      });
  };

  render() {
    return (
      <Container>
        <Content>
          <View style={Style.headerLogin}>
            <Grid>
              <Row style={{alignItems: 'center'}}>
                <Col>
                  <Text style={Style.title}>Welcome</Text>
                  <Text style={Style.title}>Back</Text>
                </Col>
              </Row>
            </Grid>
          </View>
          <View style={Style.footerLogin}>
            <Grid>
              <Row style={{alignItems: 'center'}}>
                <Col>
                  <Form>
                    <Item floatingLabel last>
                      <Label>email</Label>
                      <Input
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                      />
                    </Item>
                    <Item floatingLabel last>
                      <Label>Password</Label>
                      <Input
                        secureTextEntry={true}
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                      />
                    </Item>
                  </Form>
                </Col>
              </Row>
              <Row style={{alignItems: 'center', marginTop: 40}}>
                <Col size={4}>
                  <Text style={Style.loginText}>Login</Text>
                </Col>
                <Col size={1}>
                  {this.state.email.length > 0 &&
                  this.state.password.length > 0 ? (
                    <Button
                      style={Style.loginActive}
                      onPress={this.handleLogin.bind(this)}>
                      {this.state.loading === false ? (
                        <Icon type="AntDesign" name="arrowright" />
                      ) : (
                        <Spinner color="white" style={{paddingLeft: 10}} />
                      )}
                    </Button>
                  ) : (
                    <Button disabled style={Style.login}>
                      <Icon type="AntDesign" name="arrowright" />
                    </Button>
                  )}
                </Col>
              </Row>
            </Grid>
          </View>
          <View style={Style.wrapBottomText}>
            <Grid>
              <Row style={{alignItems: 'center'}}>
                <Col size={3}>
                  <Button
                    transparent
                    onPress={() =>
                      this.props.navigation.navigate('Registration')
                    }>
                    <Text style={Style.registerText}>Register</Text>
                  </Button>
                </Col>
                <Col size={4}>
                  <Button transparent style={{alignSelf: 'flex-end'}}>
                    <Text style={Style.registerText}>Forget Password</Text>
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

export default Login;
