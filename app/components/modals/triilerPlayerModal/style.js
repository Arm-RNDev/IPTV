import { myFonts } from 'app/constants';
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-start',
  },
  modalContent: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 30, 44, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtn: {
    position: 'absolute',
    top: 70,
    right: 30,
    zIndex: 999,
  },
  closeIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    tintColor: '#F2f2f2',
  },
});
