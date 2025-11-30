import { myFonts } from 'app/constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignContent: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 11,
    paddingHorizontal: 16,
    zIndex: 11,
    padding: 0,
    margin:0
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: myFonts.semiBoldSFProDisplay,
    fontSize: 24,
    textTransform: 'capitalize',
    color: '#F2F2F2',
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
