import { myFonts } from 'app/constants';
import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoView: {
    alignItems: 'center',
  },
  logo: {
    width: width * 0.6,
    height: width * 0.6 * (433 / 1024),
    marginTop: 100,
    marginBottom: 150,
  },
});
