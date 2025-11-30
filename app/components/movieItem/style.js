import { myFonts } from 'app/constants';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
  
const IMAGE_ASPECT_RATIO = 124 / 180;

export const styles = StyleSheet.create({
  container: {
    width: 120, 
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  picture: {
    width: '100%',
    aspectRatio: IMAGE_ASPECT_RATIO,
    borderRadius: 14,
  },
  titleView: {},
  nameText: {
    fontFamily: myFonts.regularSFProDisplay,
    fontSize: 14,
    textTransform: 'capitalize',
    color: '#A0A0A0',
    marginTop: 2,
    marginBottom: 12,
    width: '90%',
    marginLeft: 10,
  },
  egpText: {
    fontFamily: myFonts.boldSFProDisplay,
    fontSize: 14,
    textTransform: 'capitalize',
    color: '#2ABEC0',
    position: 'absolute',
    right: 14,
    top: 10,
  },
});
