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
} from 'native-base';
import Style from './Style';

class mainHeader extends Component {
  render() {
    return (
      <>
        <Header hasSegment style={Style.header}>
          <Body>
            <Text style={Style.brand}>{this.props.title}</Text>
          </Body>
          <Right>
            <Button transparent onPress={this.props.handleHeader}>
              <Icon
                type="Feather"
                name="search"
                style={{fontSize: 25, color: '#fff'}}
              />
            </Button>
          </Right>
        </Header>
      </>
    );
  }
}

export default mainHeader;
