import React, {Component} from 'react';
import {
  Container,
  Content,
  View,
  Text,
  Badge,
  Grid,
  Row,
  Col,
  Button,
} from 'native-base';
import {Image, TouchableOpacity} from 'react-native';
import Style from './Style';
class ListChat extends Component {
  render() {
    return (
      <Container>
        <Content>
          <TouchableOpacity onPress={() => this.props.navigate('ChatRoom')}>
            <Grid style={Style.wrapperList}>
              <Col size={2}>
                <View style={Style.wrapperImage}>
                  <Image
                    source={require('../../../public/asset/image/agnesmo.jpg')}
                    style={Style.imageSize}
                  />
                </View>
              </Col>
              <Col size={4}>
                <Row style={{alignItems: 'center'}}>
                  <Col>
                    <Text style={Style.name}>Issabela</Text>
                    <Text
                      style={{fontFamily: 'Montserrat-Regular', fontSize: 13}}>
                      You look beautiful Baby
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col size={1}>
                <Row style={{alignItems: 'center'}}>
                  <Col style={{alignItems: 'center'}}>
                    <Text style={Style.time}>15.02</Text>
                    <Badge>
                      <Text style={Style.badge}>New</Text>
                    </Badge>
                  </Col>
                </Row>
              </Col>
            </Grid>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigate('ChatRoom')}>
            <Grid style={Style.wrapperList}>
              <Col size={2}>
                <View style={Style.wrapperImage}>
                  <Image
                    source={require('../../../public/asset/image/moana.jpg')}
                    style={Style.imageSize}
                  />
                </View>
              </Col>
              <Col size={4}>
                <Row style={{alignItems: 'center'}}>
                  <Col>
                    <Text style={Style.name}>Tn. Badrun</Text>
                    <Text
                      style={{fontFamily: 'Montserrat-Regular', fontSize: 13}}>
                      You look beautiful Baby
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col size={1}>
                <Row style={{alignItems: 'center'}}>
                  <Col style={{alignItems: 'center'}}>
                    <Text style={Style.time}>15.02</Text>
                  </Col>
                </Row>
              </Col>
            </Grid>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigate('ChatRoom')}>
            <Grid style={Style.wrapperList}>
              <Col size={2}>
                <View style={Style.wrapperImage}>
                  <Image
                    source={require('../../../public/asset/image/angelina.jpg')}
                    style={Style.imageSize}
                  />
                </View>
              </Col>
              <Col size={4}>
                <Row style={{alignItems: 'center'}}>
                  <Col>
                    <Text style={Style.name}>Tn. Badrun</Text>
                    <Text
                      style={{fontFamily: 'Montserrat-Regular', fontSize: 13}}>
                      You look beautiful Baby
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col size={1}>
                <Row style={{alignItems: 'center'}}>
                  <Col style={{alignItems: 'center'}}>
                    <Text style={Style.time}>15.02</Text>
                  </Col>
                </Row>
              </Col>
            </Grid>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigate('ChatRoom')}>
            <Grid style={Style.wrapperList}>
              <Col size={2}>
                <View style={Style.wrapperImage}>
                  <Image
                    source={require('../../../public/asset/image/najwa.jpg')}
                    style={Style.imageSize}
                  />
                </View>
              </Col>
              <Col size={4}>
                <Row style={{alignItems: 'center'}}>
                  <Col>
                    <Text style={Style.name}>Tn. Badrun</Text>
                    <Text
                      style={{fontFamily: 'Montserrat-Regular', fontSize: 13}}>
                      You look beautiful Baby
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col size={1}>
                <Row style={{alignItems: 'center'}}>
                  <Col style={{alignItems: 'center'}}>
                    <Text style={Style.time}>15.02</Text>
                  </Col>
                </Row>
              </Col>
            </Grid>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

export default ListChat;
