import React, {Component} from 'react';
import {
  Button,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Segment,
  Header,
  Item,
  Input,
} from 'native-base';
import Style from './Style';

class search extends Component {
  render() {
    return (
      <>
        <Header hasSegment style={Style.header}>
          <Body>
            <Item style={{borderColor: '#f20e07'}}>
              <Button transparent onPress={this.props.handleSearch}>
                <Icon
                  type="Ionicons"
                  name="md-arrow-round-back"
                  style={Style.backIcon}
                />
              </Button>
              <Input placeholder="Cari ..." placeholderTextColor="#fff" />
            </Item>
          </Body>
        </Header>
      </>
    );
  }
}

export default search;
