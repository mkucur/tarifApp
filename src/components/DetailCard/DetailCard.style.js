import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  card: {
    padding: 5,
    backgroundColor: 'orange',
  },
  cardImage: {
    height: Dimensions.get('window').height /3,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },
  cardInfo: {
    color:'white',
  },
  ytButton: {
    marginVertical:10,
  },
  titleCard:{
    marginTop:5,
    padding:3,
    backgroundColor:'white',
    borderRadius:10,
    paddingLeft:5
    
  }
});
