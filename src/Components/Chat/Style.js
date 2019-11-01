import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  wrapperList: {
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 20,
    marginTop: 10,
  },
  wrapperImage: {
    width: 60,
    height: 60,
    backgroundColor: '#f0e9e9',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 3,
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
  time: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: '#bcbdc6',
  },
  badge: {
    fontFamily: 'Montserrat-Regular',
    paddingTop: 2,
  },
});

export default Style;
