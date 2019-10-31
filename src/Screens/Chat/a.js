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
import * as firebase from 'firebase';
import Style from './Style';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textMessage: '',
      chat: [],
      userMessage: [],
    };
  }
  componentWillMount() {
    const db = firebase.database();
    const ref = db.ref('message');
    ref.on(
      'value',
      message => {
        let usermessage = message.val();
        this.setState({
          chat: usermessage,
        });
      },
      errorObject => {
        console.log('The read failed: ' + errorObject.code);
      },
    );
  }

  sendMessage = async () => {
    if (this.state.textMessage.length > 0) {
      let msgId = firebase
        .database()
        .ref('message/' + this.props.navigation.getParam('phone'))
        .push().key;
      let updates = {};
      let message = {
        message: this.state.textMessage,
        time: firebase.database.ServerValue.TIMESTAMP,
        from: this.props.navigation.getParam('userSend'),
        to: this.props.navigation.getParam('email'),
      };
      updates[
        'message/' + this.props.navigation.getParam('phone') + '/' + msgId
      ] = message;
      updates[
        'message/' + this.props.navigation.getParam('phone') + '/' + msgId
      ] = message;
      firebase
        .database()
        .ref()
        .update(updates);
      this.setState({textMessage: ''});
    }
  };
  render() {
    let number = this.props.navigation.getParam('phone');

    let obj = [];
    let keys = [];
    Object.keys(this.state.chat).map(key => {
      obj.push(this.state.chat[key]);
      keys.push(key);
      // console.log(this.state.chat[key]);
      // console.log(this.state.chat[key].TA);
    });

    let no = 1;
    let finalChat = [];
    Object.values(obj).map(key => {
      finalChat.push(obj[no++]);
      // console.log(obj[no++]);
    });
    console.log('a');
    // console.log(finalChat.length);
    for (let i = 0; i < finalChat.length; i++) {
      console.log(finalChat[i]);
    }

    const userSend = this.props.navigation.getParam('userSend');
    const Name = this.props.navigation.getParam('name');
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
                <Text style={Style.name}>{Name}</Text>
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
            {Object.keys(finalChat[0]).map(key => {
              if (
                finalChat[0][key].from !==
                this.props.navigation.getParam('email')
              ) {
                return (
                  <View style={Style.widthChat}>
                    <View style={Style.rightChat}>
                      <Text style={Style.messageText}>
                        {finalChat[0][key].message}
                      </Text>
                    </View>
                  </View>
                );
              } else {
                return (
                  <View style={Style.widthChat}>
                    <View style={Style.leftChat}>
                      <Text style={Style.messageText}>
                        {finalChat[0][key].message}
                      </Text>
                    </View>
                  </View>
                );
              }
            })}
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
              <Input
                placeholder="Ketik Pesan"
                value={this.state.chatText}
                onChangeText={text => this.setState({textMessage: text})}
              />
            </Item>
          </Row>
          <Row style={{flex: 2}}>
            <Button transparent onPress={this.sendMessage.bind(this)}>
              <Icon type="MaterialIcons" name="send" style={Style.buttonSend} />
            </Button>
          </Row>
        </View>
      </Container>
    );
  }
}

export default ChatRoom;

// https://console.firebase.google.com/project/familyroom-3b7fd/database/familyroom-3b7fd/data
