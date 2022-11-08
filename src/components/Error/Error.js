import React from 'react';
import {View} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import styles from './Error.style';

const Error = () => {
  return (
    <View style={styles.errorCard}>
      <AnimatedLottieView
        source={require('../../asstes/error.json')}
        autoPlay
      />
    </View>
  );
};

export default Error;
