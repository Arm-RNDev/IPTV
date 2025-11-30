import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1620',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  topGradient: {
    position: 'absolute',
    width: '130%',
    height: 248,
    top: Platform.OS === 'ios' ? -120 : -70,
    borderRadius: 10,
    transform: [{ rotate: '11.7deg' }],
  },
});
