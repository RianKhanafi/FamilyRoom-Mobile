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
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 0,
    };
  }
  handleHeader = async data => {
    this.setState({
      header: 1,
    });
  };
  handleSearch = async data => {
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
          <ListChat navigate={this.props.navigation.navigate} />
        </Content>
      </Container>
    );
  }
}

export default Home;
