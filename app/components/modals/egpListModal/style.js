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
    backgroundColor: '#0C0C0CF0',
    paddingTop: 10,
    paddingHorizontal: 5,
    borderRightWidth: 1,
    borderColor: 'rgba(15, 30, 44, 0.6)',
    backgroundColor: 'rgba(15, 30, 44, 0.6)',
    paddingLeft: 16,
  },
  titleView: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 40,
    paddingLeft: 5,
  },
  title: {
    fontSize: 24,
    fontFamily: myFonts.mediumSFProDisplay,
    color: '#F2F2F2',
    marginLeft: 20,
  },
  closeIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    tintColor: '#F2f2f2',
  },
  epgContentRow: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: 10,
  },
  dayButton: {
    height: 35,
    borderRadius: 5,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#1E1F2073',
    marginVertical: 5,
  },
  dayButtonSelected: {
    height: 35,
    borderRadius: 5,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#2ABEC0',
    borderWidth: 1.29,
    marginVertical: 5,
  },
  dayText: {
    fontSize: 11,
    fontFamily: myFonts.mediumSFProDisplay,
    color: '#FDFDFD',
  },
  dayTextSelected: {
    fontSize: 11,
    fontFamily: myFonts.mediumSFProDisplay,
    color: '#FDFDFD',
  },
  epgContentRow: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
  },
  programGuide: {
    width: '80%',
    paddingHorizontal: 10,
  },
});
