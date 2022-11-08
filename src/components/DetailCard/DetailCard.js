import React from 'react';
import {Button, View, Image, Text} from 'react-native';
import styles from './DetailCard.style';

const DetailCard = ({detail, watchVideo}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{uri: detail.strMealThumb}} />
      <View style={styles.titleCard}>
        <Text style={styles.cardTitle}>{detail.strMeal}</Text>
      </View>
      <Text style={styles.cardInfo}>{detail.strInstructions}</Text>
      <View style={styles.ytButton}>
        <Button
          style={styles.btn}
          title="Watch Youtube"
          color={'red'}
          onPress={watchVideo}
        />
      </View>
    </View>
  );
};

export default DetailCard;
