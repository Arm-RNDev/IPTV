import { myFonts } from 'app/constants/myFonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2ABEC0',
    borderRadius: 30, 
    width: '100%',
    shadowColor: 'rgba(74, 215, 217, 1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
    height: 44,
  },
  icon: {
    width: 14,
    height: 14,
    marginRight: 8,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 15,
    fontFamily: myFonts.mediumSFProDisplay,
    color: '#000',
  },
});
