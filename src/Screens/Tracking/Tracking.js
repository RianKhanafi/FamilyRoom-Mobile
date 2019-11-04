import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Button,
  Text,
  Content,
  View,
  Card,
  CardItem,
  Thumbnail,
} from 'native-base';
import {StyleSheet, ActivityIndicator, TouchableOpacity} from 'react-native';
import MapView, {Polyline, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import Header from '../Components/Header';
// import Polyline from '@mapbox/polyline';
import Geolocation from '@react-native-community/geolocation';
// import Geocoder from 'react-native-geo';
import Style from './Style';
class Tracking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      myLatitude: 0,
      myLongitude: 0,
    };
  }

  UNSAFE_componentWillMount() {
    this.setState({
      latitude: this.props.navigation.getParam('latitude'),
      longitude: this.props.navigation.getParam('longitude'),
    });
    Geolocation.getCurrentPosition(
      position => {
        console.log(position.coords.longitude);
        this.setState({
          myLatitude: position.coords.latitude,
          myLongitude: position.coords.longitude,
        });
      },
      error => {
        this.setState({error: error.message});
      },
      {
        enableHighAccuracy: false,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 1,
      },
    );
  }
  // getLocationName() {
  //   Geocoder.setApiKey('AIzaSyAhgsm4AD8266V2SN3S8kVr6VGLYlntTFI');
  //   Geocoder.getFromLatLng(41.89, 12.49).then(
  //     json => {
  //       var address_component = json.results[0].address_component[0];
  //       alert(address_component.long_name);
  //     },
  //     error => {
  //       alert(error);
  //     },
  //   );
  // }

  render() {
    let myMap;
    const initialRegion = {
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };

    let myLocation = {
      latitude: this.state.myLatitude,
      longitude: this.state.myLongitude,
    };

    let theyLocation = {
      latitude: this.state.latitude,
      longitude: this.state.longitude,
    };
    let user = {
      name: this.props.navigation.getParam('name'),
    };
    let loct =
      'https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=AIzaSyAhgsm4AD8266V2SN3S8kVr6VGLYlntTFI';
    console.log(loct);
    return (
      <Container>
        <Card style={Style.header}>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon
              type="Ionicons"
              name="md-arrow-round-back"
              style={{color: '#fff'}}
            />
          </Button>
        </Card>
        <MapView
          ref={ref => (myMap = ref)}
          provider={PROVIDER_GOOGLE}
          style={Style.map}
          initialRegion={initialRegion}>
          <MapView.Marker
            coordinate={theyLocation}
            title={user.name}
            description={user.name + ' Location'}
            // Zoom Function
            onPress={() => {
              myMap.fitToCoordinates(
                [
                  {
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                  },
                ],
                {
                  animated: true, // optional
                },
              );
            }}
          />
          <MapView.Marker
            coordinate={myLocation}
            title="My"
            description="My Location"
            // Zoom Function
            onPress={() => {
              myMap.fitToCoordinates(
                [
                  {
                    latitude: this.state.myLatitude,
                    longitude: this.state.myLongitude,
                  },
                ],
                {
                  animated: true, // optional
                },
              );
            }}
          />
        </MapView>

        <Card style={Style.card}>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri: `https://ui-avatars.com/api/?size=256&rounded=true&name=${user.name.replace(
                    ' ',
                    '+',
                  )}`,
                }}
              />
              <Body>
                <Text>{user.name}</Text>
                <Text note>
                  {this.state.latitude}, {this.state.longitude}
                </Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Tracking;
