import React, { Component } from "react";
import { Box, Text } from 'react-native-design-utility';
import { Image } from 'react-native';

import { images }from '../constants/images';

class SplashScreen extends Component {

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Auth');
    }, 1000)
  }

  render() {
    return (
      <Box f={1} center>
        <Image source={images.logo} />
      </Box>
    );
  }
}

export default SplashScreen;
