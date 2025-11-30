import { myFonts } from 'app/constants';
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    zIndex: 9999,
  },
  fullscreenContainer: {
    flexGrow: 1,
    backgroundColor: '#ebebeb',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99999,
  },
  video: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  fullscreenVideoHoriz: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 32,
    fontFamily: myFonts.boldOpenSans,
    color: '#F2f2f2',
    width: '90%',
  },
  fullscreenVideoVert: {
    flex: 1,
    height: width,
    width: height,
    backgroundColor: 'black',
  },
  text: {
    marginTop: 30,
    marginHorizontal: 20,
    fontSize: 15,
    textAlign: 'justify',
  },
  fullscreenView: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingRight: 10,
  },
  fullscreenButton: {
    marginLeft: 22,
  },

  controlOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
  },
  sliderContainer: {
    width: '100%',
  },
  closeView: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleView: {
    position: 'absolute',
    right: 0,
    top: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  titleViewLoundscape: {
    position: 'absolute',
    right: 0,
    top: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  close: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    tintColor: '#f2f2f2',
  },
});
