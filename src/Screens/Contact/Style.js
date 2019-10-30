import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  header: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 40,
    fontFamily: 'Montserrat-Regular',
  },
  mainTitle: {
    color: '#9090a3',
  },
  addUser: {
    alignSelf: 'center',
    elevation: 0,
    backgroundColor: '#f20e07',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
  },
  viewTabs: {
    marginLeft: 10,
    marginRight: 10,
  },
  tabStyle: {
    backgroundColor: '#fff',
  },
  textStyle: {
    color: '#d0d4d7',
    fontFamily: 'Montserrat-Regular',
  },
  background: {
    backgroundColor: '#fff',
  },
  activeTextStyle: {
    color: '#000',
    fontWeight: 'normal',
    fontFamily: 'Montserrat-Regular',
  },
  tabBarUnderline: {
    borderBottomWidth: 5,
    borderColor: '#f20e07',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  wrapperImage: {
    width: 60,
    height: 60,
    backgroundColor: '#f20e07',
    borderRadius: 50,
    overflow: 'hidden',
  },
  imageSize: {
    width: 60,
    height: 60,
  },
  name: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    color: '#bcbdc6',
  },
});

export default Style;
