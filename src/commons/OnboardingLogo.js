import React, { Comonent } from 'React';
import { Box, Text } from 'react-native-design-utility';
import { Image } from 'react-native';

import { images }from '../constants/images';

const OnboardingLogo = () => (
  <Box center bg='#61D9D4'>
    <Image source={images.logo} />
  </Box>
)

export default OnboardingLogo;
