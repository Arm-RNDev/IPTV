import { myFonts } from 'app/constants';
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 10,
  },
  programTitle: {
    color: '#FFF',
    fontSize: 15,
    opacity: 0.5,
    fontFamily: myFonts.mediumSFProDisplay,
  },
  nowPlayinText: {
    color: '#FFF',
    opacity: 1,
  },

  programRight: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1.5,
    justifyContent: 'flex-end',
  },
  programTime: {
    color: '#FFF',
    fontSize: 15,
    opacity: 0.5,
    fontFamily: myFonts.mediumSFProDisplay,
  },
  dayList: {
    width: '22%',
  },

  programItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
  },
  programLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 3,
  },
});
