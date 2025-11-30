import { myFonts } from 'app/constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-start',
    flex: 1,
  },
  modalContent: {
    width: '60%',
    height: '100%',
    backgroundColor: '#0C0C0CF0',

    paddingHorizontal: 5,
    borderRightWidth: 1,
    borderColor: 'rgba(15, 30, 44, 0.6)',
    backgroundColor: 'rgba(15, 30, 44, 0.6)',
    paddingLeft: 16,
  },
  langButton: {
    paddingVertical: 5,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleView: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
    paddingLeft: 25,
  },
  title: {
    fontSize: 24,
    fontFamily: myFonts.mediumSFProDisplay,
    color: '#F2F2F2',
  },

  langText: {
    fontSize: 18,
    fontFamily: myFonts.regularSFProDisplay,
    color: '#F2F2F2',
  },

  checkView: {
    width: 16,
    marginRight: 10,
  },
  checkIc: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },

  closeIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    tintColor: '#F2f2f2',
  },
});
