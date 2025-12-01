import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 38,
    height: 38,
    resizeMode: 'contain',
    tintColor:'#f2f2f2'
  },
});
