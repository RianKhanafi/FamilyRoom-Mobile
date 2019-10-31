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
      currenName: '',
    };
  }
  componentWillMount() {
    let userf = firebase.auth().currentUser;
    this.setState({
      currenName: userf.displayName,
    });
    const db = firebase.database();
    const ref = db.ref(
      'message/' +
        this.props.navigation.getParam('name') +
        '/' +
        userf.displayName,
    );
    ref.on(
      'value',
      data => {
        let usermessage = [];
        data.forEach(child => {
          usermessage = [
            {
              _id: child.key,
              message: child.val().message,
              from: child.val().from,
              time: child.val().time,
              to: child.val().to,
            },
            ...usermessage,
          ];
        });
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
    let userf = firebase.auth().currentUser;
    if (this.state.textMessage.length > 0) {
      let msgId = firebase
        .database()
        .ref('message')
        .child(userf.displayName)
        .child(this.props.navigation.getParam('name'))
        .push().key;
      let updates = {};
      let message = {
        message: this.state.textMessage,
        time: firebase.database.ServerValue.TIMESTAMP,
        from: this.props.navigation.getParam('userSend'),
        to: this.props.navigation.getParam('email'),
      };
      updates[
        'message/' +
          this.props.navigation.getParam('name') +
          '/' +
          userf.displayName +
          '/' +
          msgId
      ] = message;
      updates[
        'message/' +
          userf.displayName +
          '/' +
          this.props.navigation.getParam('name') +
          '/' +
          msgId
      ] = message;
      firebase
        .database()
        .ref()
        .update(updates);
      this.setState({textMessage: ''});
    }
  };
  render() {
    console.log(this.state.chat);
    let number = this.props.navigation.getParam('phone');
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
            {this.state.chat !== null ? (
              this.state.chat.map(key => {
                if (key.from !== this.props.navigation.getParam('email')) {
                  return (
                    <View style={Style.widthChat}>
                      <View style={Style.rightChat}>
                        <Text style={Style.messageText}>{key.message}</Text>
                      </View>
                    </View>
                  );
                } else {
                  return (
                    <View style={Style.widthChat}>
                      <View style={Style.leftChat}>
                        <Text style={Style.messageText}>{key.message}</Text>
                      </View>
                    </View>
                  );
                }
              })
            ) : (
              <Text>Message Null</Text>
            )}
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
