import React from 'react';
import {FlatList, View} from 'react-native';
import {API_MEALS} from '@env';
import useFetchData from '../../hooks/useFetchData';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import MealsCard from '../../components/MealsCard';
import styles from './Meals.style';

const Meals = ({navigation,route}) => {
  const {strCategory} = route.params;
  const {date, err, load} = useFetchData(`${API_MEALS}${strCategory}`);
  const keyMeals = item => item.idMeal;
  const nextMeals =idMeal=>{
    navigation.navigate('Detail',{idMeal})
  }
  const renderMeals = ({item}) => <MealsCard meals={item} selectMeals={()=>nextMeals(item.idMeal)}/>;
  if (err) {
    <Error />;
  }
  if (load) {
    <Loading />;
  }
  return (
    <View>
      <FlatList
        data={date.meals}
        renderItem={renderMeals}
        keyExtractor={keyMeals}
      />
    </View>
  );
};
export default Meals;
