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
          {Object.keys(this.props.users).map(key => {
            if (this.props.user !== this.props.users[key].Users.email) {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigate('ChatRoom', {
                      name: this.props.users[key].Users.name,
                      phone: this.props.users[key].Users.phone,
                      email: this.props.users[key].Users.email,
                      latitude: this.props.users[key].Users.latitude,
                      longitude: this.props.users[key].Users.longitude,
                      userSend: this.props.user,
                    })
                  }>
                  <Grid style={Style.wrapperList}>
                    <Col size={2}>
                      <View style={Style.wrapperImage}>
                        <Image
                          source={{
                            uri: `https://ui-avatars.com/api/?size=256&rounded=true&name=${this.props.users[
                              key
                            ].Users.name.replace(' ', '+')}`,
                          }}
                          style={Style.imageSize}
                        />
                      </View>
                    </Col>
                    <Col size={4}>
                      <Row style={{alignItems: 'center'}}>
                        <Col>
                          <Text style={Style.name}>
                            {this.props.users[key].Users.name}
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Montserrat-Regular',
                              fontSize: 13,
                            }}>
                            Message ...
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
              );
            }
          })}
        </Content>
      </Container>
    );
  }
}

export default ListChat;
