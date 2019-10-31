import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  headerChat: {
    width: '100%',
    height: 70,
  },
  marginChat: {
    backgroundColor: '#fff',
    marginBottom: 60,
  },
  rightChat: {
    maxWidth: '80%',
    alignSelf: 'flex-end',
    backgroundColor: '#fef8e8',
    padding: 20,
    height: 'auto',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 5,
    margin: 10,
  },
  leftChat: {
    maxWidth: '80%',
    alignSelf: 'flex-start',
    backgroundColor: '#ffeff0',
    padding: 20,
    height: 'auto',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 5,
    margin: 10,
  },
  wrapperImage: {
    width: 60,
    height: 60,
    backgroundColor: '#eaeaea',
    borderRadius: 50,
    overflow: 'hidden',
  },
  imageSize: {
    width: 60,
    height: 60,
  },
  name: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 25,
    color: 'black',
  },
  time: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    paddingTop: 5,
    color: '#bcbdc6',
  },
  badge: {
    fontFamily: 'Montserrat-Regular',
    paddingTop: 2,
  },
  widthChat: {
    width: '100%',
  },
  sendChat: {
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    padding: 5,
  },
  buttonSend: {
    color: '#f20e07',
    fontSize: 30,
  },
  emotiocnIcon: {
    color: '#bcbdc6',
  },

  //
  alignItems: {
    alignItems: 'center',
  },
  messageText: {
    fontFamily: 'Montserrat-Regular',
  },
});

export default Style;
