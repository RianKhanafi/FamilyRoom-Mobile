import React, {Component} from 'react';
import {
  Container,
  Content,
  View,
  Text,
  Grid,
  Col,
  Row,
  Item,
  Icon,
  Input,
  Button,
} from 'native-base';
import {TouchableOpacity, Image} from 'react-native';
import Style from '../Style';

class Family extends Component {
  render() {
    return (
      <Content>
        <Content>
          <Item rounded style={{marginTop: 10, marginBottom: 10}}>
            <Button transparent onPress={this.props.handleSearch}>
              <Icon type="Feather" name="search" style={{color: '#bcbdc6'}} />
            </Button>
            <Input placeholder="Cari ..." />
          </Item>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#bcbdc6',
              marginBottom: 10,
            }}>
            Send Message To :
          </Text>
          {Object.keys(this.props.contact).map(item => {
            return (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigate('ChatRoom', {
                    name: this.props.contact[item].Users.name,
                    phone: this.props.contact[item].Users.phone,
                    email: this.props.contact[item].Users.email,
                    userSend: this.props.user,
                  })
                }>
                <Grid style={{marginBottom: 10}}>
                  <Col size={2}>
                    <View style={Style.wrapperImage}>
                      <Image
                        source={require('../../../../public/asset/image/agnesmo.jpg')}
                        style={Style.imageSize}
                      />
                    </View>
                  </Col>
                  <Col size={4}>
                    <Row style={{alignItems: 'center'}}>
                      <Col>
                        <Text style={Style.name}>
                          {this.props.contact[item].Users.name}
                        </Text>
                        <Text style={{fontFamily: 'Montserrat-Regular'}}>
                          in Jakarta
                        </Text>
                      </Col>
                    </Row>
                  </Col>
                  <Col size={1}>
                    <Row style={{alignItems: 'center'}}>
                      <Col style={{alignItems: 'center'}}>
                        <Text style={{color: '#f20e07'}}>Loct</Text>
                      </Col>
                    </Row>
                  </Col>
                </Grid>
              </TouchableOpacity>
            );
          })}
        </Content>
      </Content>
    );
  }
}

export default Family;
