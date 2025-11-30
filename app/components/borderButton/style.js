import { myFonts } from 'app/constants/myFonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E1F2073',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    shadowColor: '#FFFFFF0',
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
    tintColor: '#FFFFFF',
  },
  title: {
    fontSize: 15,
    fontFamily: myFonts.mediumSFProDisplay,
    color: '#FFF',
  },
});
