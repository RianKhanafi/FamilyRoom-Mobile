import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  headerLogin: {
    width: '55%',
    height: 150,
    paddingBottom: 20,
    backgroundColor: '#fb3f2a',
    borderBottomRightRadius: 100,
  },
  footerLogin: {
    width: '100%',
    borderTopRightRadius: 50,
    backgroundColor: '#fff',
    paddingTop: 0,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 60,
  },
  title: {
    color: '#fb3f2a',
    fontSize: 40,
    fontFamily: 'Montserrat-Regular',
    marginLeft: 30,
    color: '#fff',
  },
  login: {
    elevation: 0,
    borderRadius: 20,
    backgroundColor: '#f4e8d9',
  },
  loginActive: {
    elevation: 0,
    borderRadius: 20,
    backgroundColor: '#fb3f2a',
  },
  icon: {
    color: '#fff',
  },
  loginText: {
    color: '#000',
    fontSize: 30,
    fontFamily: 'Montserrat-Regular',
  },
  registerText: {
    color: '#fb3f2a',
    fontFamily: 'Montserrat-Regular',
  },
  wrapBottomText: {
    paddingLeft: 20,
    paddingRight: 30,
    marginTop: 80,
  },
});

export default Style;
