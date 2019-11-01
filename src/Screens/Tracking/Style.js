import {StyleSheet} from 'react-native';
// import {maxHeaderSize} from 'http';

const Style = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 15,
    right: 20,
    zIndex: 9999,
    width: 'auto',
    alignSelf: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 4,
    backgroundColor: '#fb3f2a',
    // maxHeight: 50,
  },
  card: {
    elevation: 5,
    borderRadius: 20,
    borderColor: '#fff',
    overflow: 'hidden',
    position: 'absolute',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
  },
  map: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});

export default Style;
