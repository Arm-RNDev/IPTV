import { myFonts } from 'app/constants';
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  picture: {
    width: 59,
    height: 59,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2ABEC00A', 
  },
 
  nameText: {
    fontFamily: myFonts.regularSFProDisplay,
    fontSize: 14,
    textTransform: 'capitalize',
    color: '#A0A0A0',
    marginTop: 2,
    marginBottom: 10,
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
