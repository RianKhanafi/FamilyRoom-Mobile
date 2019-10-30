import React, {Component} from 'react';
import {Image, ImageBackground} from 'react-native';
import {
  View,
  Text,
  Container,
  Grid,
  Content,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Thumbnail,
  Button,
  Col,
  Row,
  Card,
  CardItem,
} from 'native-base';
import Style from './Style';

class Tracking extends Component {
  render() {
    return (
      <Container>
        <Header transparent hasSegment style={Style.header}>
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
        <Content style={{backgroundColor: 'red'}}>
          <View>
            <Image
              source={require('../../../public/asset/image/trackingEx.jpg')}
              style={{width: '100%', height: 500}}
            />
          </View>
        </Content>
        <Card style={Style.card}>
          <CardItem>
            <Left>
              <Thumbnail
                source={require('../../../public/asset/image/moana.jpg')}
              />
              <Body>
                <Text>Agnez Mo</Text>
                <Text note>Jl. Sukasari III No.47</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Container>
    );
  }
}

export default Tracking;
