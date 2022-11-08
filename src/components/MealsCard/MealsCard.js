import React from 'react';
import {ImageBackground, View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './MealsCard.style';

const MealsCard = ({meals,selectMeals}) => {
  return (
    <TouchableWithoutFeedback onPress={selectMeals}>
      <View style={styles.card}>
        <ImageBackground
          style={styles.cardImage}
          source={{uri: meals.strMealThumb}}>
          <View style={styles.textView}>
            <Text style={styles.cardText}>{meals.strMeal}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealsCard;
