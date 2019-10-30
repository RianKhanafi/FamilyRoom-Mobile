import React, {Component} from 'react';
import {
  View,
  Text,
  Grid,
  Col,
  Row,
  Container,
  Content,
  Item,
  Input,
  Icon,
  Button,
  Badge,
} from 'native-base';
import {TouchableOpacity, Image} from 'react-native';
import Style from './Style';
import All from '../../All.style';
class ChatRoom extends Component {
  render() {
    return (
      <Container>
        <View style={Style.headerChat}>
          <Grid style={{margin: 10}}>
            <Col size={2}>
              <Row style={Style.alignItems}>
                <View style={Style.wrapperImage}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Tracking')}>
                    <Image
                      source={require('../../../public/asset/image/agnesmo.jpg')}
                      style={Style.imageSize}
                    />
                  </TouchableOpacity>
                </View>
              </Row>
            </Col>
            <Col size={3}>
              <Row style={Style.alignItems}>
                <Text style={Style.name}>Agnez Mo</Text>
              </Row>
            </Col>
            <Col>
              <Row style={Style.alignItems}>
                <Icon type="Feather" name="phone" style={{color: '#fc402c'}} />
              </Row>
            </Col>
            <Col>
              <Row style={Style.alignItems}>
                <Icon
                  type="SimpleLineIcons"
                  name="options"
                  style={{color: '#fc402c'}}
                />
              </Row>
            </Col>
          </Grid>
        </View>
        <Content>
          <View style={Style.marginChat}>
            <View style={Style.widthChat}>
              <View style={Style.rightChat}>
                <Text style={Style.messageText}>Hello Word, How Are You</Text>
              </View>
            </View>
            <View style={Style.rightChat}>
              <Grid>
                <Row>
                  <Text style={Style.messageText}>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th
                    century who is thought to have scrambled parts of Cicero's
                    De Finibus Bonorum et Malorum for use in a type specimen
                    book.
                  </Text>
                </Row>
                <Row>
                  <Text style={{fontSize: 12, color: '#bcbdc6'}}>16.18</Text>
                </Row>
              </Grid>
            </View>
            <View style={Style.widthChat}>
              <View style={Style.leftChat}>
                <Text style={Style.messageText}>Hello Word, How Are You</Text>
              </View>
            </View>
            <View style={Style.rightChat}>
              <Grid>
                <Row>
                  <Text style={Style.messageText}>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th
                    century who is thought to have scrambled parts of Cicero's
                    De Finibus Bonorum et Malorum for use in a type specimen
                    book.
                  </Text>
                </Row>
                <Row>
                  <Text style={{fontSize: 12, color: '#bcbdc6'}}>16.18</Text>
                </Row>
              </Grid>
            </View>
          </View>
        </Content>
        <View style={Style.sendChat}>
          <Row style={{flex: 9}}>
            <Item rounded style={{alignSelf: 'flex-start'}}>
              <Icon
                type="MaterialIcons"
                name="insert-emoticon"
                style={Style.emotiocnIcon}
              />
              <Input placeholder="Ketik Pesan" />
            </Item>
          </Row>
          <Row style={{flex: 2}}>
            <Button transparent>
              <Icon type="MaterialIcons" name="send" style={Style.buttonSend} />
            </Button>
          </Row>
        </View>
      </Container>
    );
  }
}

export default ChatRoom;
