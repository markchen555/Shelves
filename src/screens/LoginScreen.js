import React, { Component } from "react";
import { Box } from 'react-native-design-utility';
import { Alert, Animated } from 'react-native';

import OnboardingLogo from '../commons/OnboardingLogo';
import LoginButton from '../commons/LoginButton';


class LoginScreen extends Component {
  state = {
    opacity: new Animated.Value(0),
    position: new Animated.Value(0),
  }

  componentDidMount() {
    // Start animation at the same time.
    Animated.parallel([this.positionAnimated(), this.opacityAnimated()]).start();
  }


  opacityAnimated = () => {
    Animated.timing(this.state.opacity, {
      toValue:1,
      duration: 200,
      delay: 300,
    }).start()
  }

  positionAnimated = () => {
    Animated.timing(this.state.position, {
      toValue:1,
      duration: 400,
      useNativeDriver: true,
    }).start()
  }

  onGooglePress = () => {
    Alert.alert('Google Press')
  }

  onFacebookPress = () => {
    Alert.alert('Facebook Press')
  }

  render() {
    const { opacity } = this.state;
    const logoTranslate = this.state.position.interpolate({
      inputRange: [0, 1],
      outputRange: [150, 0]
    })
    return (
      <Box f={1} center bg="#61D9D4">
        <Animated.View style={{flex: 1, transform:[
            {
              translateY: logoTranslate
            }
          ]}}>
          <Box f={1} center>
            <OnboardingLogo />
          </Box>
        </Animated.View>
        <Animated.View style={{flex: 0.9, width: '100%', opacity}}>
          <LoginButton onPress={this.onGooglePress} type="google">Continue with Google</LoginButton>
          <LoginButton onPress={this.onFacebookPress} type="facebook">Continue with Facebook</LoginButton>
        </Animated.View>
      </Box>
    );
  }
}

export default LoginScreen;
