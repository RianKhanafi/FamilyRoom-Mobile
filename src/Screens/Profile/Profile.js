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
import Style from './Style';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
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
                source={require('../../../public/asset/image/moana.jpg')}
                style={Style.imageSize}
              />
            </View>
            <Text style={Style.name}>Tn. Badrun Junianto</Text>
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
                  <Text style={Style.text}>083225329980</Text>
                </Col>
              </Row>
              <Row style={Style.rowDimention}>
                <Col size={1}>
                  <Icon type="AntDesign" name="mail" />
                </Col>
                <Col size={4}>
                  <Text style={Style.text}>Tnbadrun@gmail.com</Text>
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
                <Button full style={Style.button}>
                  {/* <Icon type="AntDesign" name="mail" /> */}
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
