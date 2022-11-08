import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({catolog,catalogSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={catalogSelect}>
      <View style={styles.bannerCard}>
        <Image
          style={styles.imageCard}
          source={{uri: catolog.strCategoryThumb}}
        />
        <Text style={styles.textCard}>{catolog.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
