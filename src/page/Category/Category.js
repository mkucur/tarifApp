import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './Category.style';
import CategoryCard from '../../components/CategoryCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import useFetchData from '../../hooks/useFetchData';
import {API_CATEGORY} from '@env';

const Category = ({navigation}) => {
  const {date, err, load} = useFetchData(API_CATEGORY);
  const nextMeals = strCategory => {
    navigation.navigate('Meals', {strCategory});
  };
  const renderCategory = ({item}) => (
    <CategoryCard
      catolog={item}
      catalogSelect={() => nextMeals(item.strCategory)}
    />
  );
  const keyCategory = item => item.idCategory;
  if (err) {
    return <Error />;
  }
  if (load) {
    <Loading />;
  }

  return (
    <View style={styles.backgrd}>
      <FlatList
        data={date.categories}
        renderItem={renderCategory}
        keyExtractor={keyCategory}
      />
    </View>
  );
};

export default Category;
