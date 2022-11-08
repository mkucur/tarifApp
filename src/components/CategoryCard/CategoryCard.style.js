import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  bannerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: 20,
    marginVertical: 5,
    padding: 3,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderWidth: 1,
    borderColor: 'gray',
  },
  imageCard: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
    marginHorizontal: 20,
  },
  textCard: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
