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
import {TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
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
  convertTime = time => {
    let d = new Date(time);
    let c = new Date();
    let result = (d.getHours() < 10 ? '0' : '') + d.getHours() + ':';
    result += (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    if (c.getDay() !== d.getDay()) {
      result = d.getDate() + ' ' + d.getMonth() + ' ' + result;
    }
    return result;
  };
  renderRow = ({item}) => {
    console.log(item.message);
    const email = this.props.navigation.getParam('email');
    return (
      <View style={Style.widthChat}>
        <View style={item.from !== email ? Style.rightChat : Style.leftChat}>
          <Text style={Style.messageText}>{item.message}</Text>
          <Text style={Style.time}>{this.convertTime(item.time)}</Text>
        </View>
      </View>
    );
  };
  render() {
    let number = this.props.navigation.getParam('phone');
    const userSend = this.props.navigation.getParam('userSend');
    const Name = this.props.navigation.getParam('name');
    const Phone = this.props.navigation.getParam('phone');
    const email = this.props.navigation.getParam('email');
    return (
      <Container>
        <View style={Style.headerChat}>
          <Grid style={{margin: 10}}>
            <Col size={2}>
              <Row style={Style.alignItems}>
                <View style={Style.wrapperImage}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Profile', {
                        name: Name,
                        phone: Phone,
                        email: email,
                        userSend: userSend,
                      })
                    }>
                    <Image
                      source={{
                        uri: `https://ui-avatars.com/api/?size=256&rounded=true&name=${Name.replace(
                          ' ',
                          '+',
                        )}`,
                      }}
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
            <SafeAreaView>
              <FlatList
                data={this.state.chat}
                renderItem={this.renderRow}
                keyExtractor={(item, index) => index.toString()}
                inverted
              />
            </SafeAreaView>
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
                value={this.state.textMessage}
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
