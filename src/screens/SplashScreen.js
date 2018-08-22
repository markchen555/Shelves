import React, { Component } from "react";
import { Box, Text } from 'react-native-design-utility';

import OnboardingLogo from '../commons/OnboardingLogo';

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
      <Box f={1} center bg='#61D9D4'>
        <OnboardingLogo />
      </Box>
    );
  }
}

export default SplashScreen;
