import React, {Component} from 'react';
import {
  Container,
  Text,
  Content,
  Grid,
  Col,
  Row,
  View,
  Badge,
} from 'native-base';
import axios from 'axios';
import ListChat from '../../Components/Chat/ListChat';
import Search from '../../Components/Header/SearchHeader';
import MainHeader from '../../Components/Header/Header';
import * as firebase from 'firebase';
import {AsyncStorage, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 0,
      user: this.props.navigation.getParam('email'),
      users: [],
    };
  }

  UNSAFE_componentWillMount() {
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
  }

  handleHeader = async () => {
    this.setState({
      header: 1,
    });
  };

  handleSearch = async () => {
    this.setState({
      header: 0,
    });
  };

  render() {
    const getHeader = this.state.header;
    return (
      <Container>
        {getHeader === 1 ? (
          <Search handleSearch={this.handleSearch} />
        ) : (
          <MainHeader handleHeader={this.handleHeader} title="Your Chat" />
        )}
        <Content>
          <ListChat
            navigate={this.props.navigation.navigate}
            users={this.state.users}
            user={this.state.user} // email login
          />
        </Content>
      </Container>
    );
  }
}

export default Home;
