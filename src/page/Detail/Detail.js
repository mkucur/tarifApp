import React from 'react';
import {FlatList, View, Linking} from 'react-native';
import {API_DETAIL} from '@env';
import styles from './Detail.style';
import useFetchData from '../../hooks/useFetchData';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import DetailCard from '../../components/DetailCard';

const Detail = ({route}) => {
  const {idMeal} = route.params
  const {date, err, load} = useFetchData(`${API_DETAIL}${idMeal}`);
  const renderDetail = ({item}) => <DetailCard detail={item} watchVideo={()=> Linking.openURL(item.strYoutube)}/>;
  if (err) {
    return <Error />;
  }
  if (load) {
    return <Loading />;
  }

  return (
    <View>
      <FlatList data={date.meals} renderItem={renderDetail} />
    </View>
  );
};

export default Detail;
