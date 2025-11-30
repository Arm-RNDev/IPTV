import { myFonts } from 'app/constants/myFonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabContainer: {
    marginBottom: 20,
    marginTop: 5,
    paddingLeft: 16,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  title: {
    fontSize: 12,
    fontFamily: myFonts.mediumSFProDisplay,
    color: '#FFF',
    lineHeight:14
  },
  activeItem: {
    backgroundColor: '#2ABEC0',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowColor: 'rgba(74, 215, 217, 0.2)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    marginRight: 10,
    height: 34,
  },
  inActiveItem: {
    backgroundColor: '#1E1F2073',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#2C2C2C',
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowColor: '#FFFFFF40',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    marginRight: 10,
    height: 34,
  },
});
