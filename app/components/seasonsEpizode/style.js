import { myFonts } from 'app/constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  seasonBtn: {
    borderWidth: 1,
    borderColor: '#444',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: '#111',
    flexDirection: 'row',
    alignItems: 'center',
  },
  seasonSelected: {
    backgroundColor: '#222',
    borderColor: '#888',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  episodesWrapper: {
    marginRight: 20,
    maxWidth: 800,
  },
  episodesContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 4,
    paddingRight: 90,
  }, 
  episodeBtn: {
    borderWidth: 1,
    borderColor: '#444',
    backgroundColor: '#111',
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 12,
  },
  text: {
    color: '#DDDDDD',
    marginHorizontal: 4,
    fontFamily: myFonts.mediumSFProDisplay,
    fontSize: 12,
  },
  rigtIc: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  leftIc: {
    width: 12,
    marginRight: 10,
    height: 12,
    resizeMode: 'contain',
  },
  content: {
    paddingHorizontal: 16,
    marginBottom: 10,
  },
});
