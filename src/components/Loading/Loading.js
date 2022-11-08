import React from 'react';
import {View} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import styles from './Loading.style';

const Loading = () => {
  return (
    <View style={styles.loadingCard}>
      <AnimatedLottieView
        source={require('../../asstes/loading.json')}
        autoPlay
      />
    </View>
  );
};

export default Loading;
