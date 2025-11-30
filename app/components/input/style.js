import { myFonts } from 'app/constants';
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 22,
  },
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgba(0, 0, 0, 0.80)',
    padding: 10,
    backgroundColor: 'rgba(15, 30, 44, 0.6)',
    borderWidth: 1,
    borderColor: '#2C2C2C',
    borderRadius: 15,
    paddingHorizontal: 12,
    color: '#fff',
    marginBottom: 2,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 4,
    tintColor: '#F2F2F2',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    color: '#F2F2F2',
    fontFamily: myFonts.mediumSFProDisplay,
  }, 
  err: {
    fontSize: 12,
    color: '#F01',
    fontFamily: myFonts.mediumSFProDisplay,
  },
});
