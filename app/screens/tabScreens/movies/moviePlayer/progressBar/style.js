import { myFonts } from 'app/constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 10,
    paddingHorizontal: 5,
  },
  fullscreenWrapper: {
    width: '98%',
    position: 'absolute',
    bottom: 40,
  },
  btnView: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-around',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    flexDirection: 'row',
  },
  iconText: {
    color: '#DDDDDD',
    fontSize: 11,
    fontFamily: myFonts.mediumSFProDisplay,
    marginLeft: 5,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  timeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    color: '#DDDDDD',
    fontSize: 18,
    fontFamily: myFonts.regularSFProDisplay,
    marginHorizontal: 15,
    width: '20%',
  },
  timeTextLandscape: {
    color: '#DDDDDD',
    fontSize: 18,
    fontFamily: myFonts.regularSFProDisplay,
    marginHorizontal: 15,
    width: '10%',
  },
});
