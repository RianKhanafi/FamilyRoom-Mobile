import {StyleSheet} from 'react-native';
const Style = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 250,
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  wrapperImage: {
    width: 120,
    height: 120,
    backgroundColor: '#eaeaea',
    borderRadius: 100,
    overflow: 'hidden',
  },
  imageSize: {
    width: 120,
    height: 120,
  },
  name: {
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
    margin: 10,
    color: '#f20e07',
  },
  bio: {
    height: 300,
    backgroundColor: '#fef8e8',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  marginBio: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 25,
    marginBottom: 10,
  },
  info: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 10,
  },
  rowDimention: {
    height: 50,
    marginLeft: 30,
    marginRight: 30,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
  },
  button: {
    width: '100%',
    elevation: 0,
    backgroundColor: '#f20e07',
    borderRadius: 20,
    elevation: 2,
  },
});

export default Style;
