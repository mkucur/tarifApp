import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  card: {
    height: Dimensions.get('window').height / 4,
    flex: 1,
    borderWidth: 3,
    borderColor: 'orange',
  },
  cardImage: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 3,
  },
  cardText: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
  },
  textView: {
    padding: 3,
    backgroundColor: 'orange',
  },
});
