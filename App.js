import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Animated,
  Easing,
} from 'react-native';
import React, { useRef, useEffect } from 'react';
import MyApp from './app/screens/MyApp';
import { Provider } from 'react-redux';
import { store } from 'app/store/store';
import Toast from 'react-native-toast-message';
import close from 'app/assets/images/Close.png';
import errorIc from 'app/assets/images/error.gif';
import { myFonts } from 'app/constants';

function AnimatedToast({ text1, hide, type }) {
  const slideAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();

    const timer = setTimeout(() => {
      Animated.timing(slideAnim, {
        toValue: -100,
        duration: 400,
        useNativeDriver: true,
        easing: Easing.in(Easing.ease),
      }).start(() => hide());
    }, 3500);

    return () => clearTimeout(timer);
  }, [slideAnim, hide]);

  const isSuccess = type === 'success';
  return (
    <Animated.View
      style={[
        styles.toastContainer,
        { transform: [{ translateY: slideAnim }] },
        isSuccess ? styles.mainSucces : styles.mainError,
      ]}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
        {!isSuccess && <Image source={errorIc} style={styles.errorIc} />}
        <Text style={isSuccess ? styles.text : styles.errorText}>{text1}</Text>
      </View>
      <TouchableOpacity onPress={hide}>
        <Image source={close} style={styles.imgClose} />
      </TouchableOpacity>
    </Animated.View>
  );
}

export default function App() {
  const toastConfig = {
    success: props => <AnimatedToast {...props} type="success" />,
    error: props => <AnimatedToast {...props} type="error" />,
  };

  return (
    <Provider store={store}>
      <StatusBar
        barStyle="light-content"
        animated
        translucent
        backgroundColor="transparent"
      />
      <MyApp />
      <Toast config={toastConfig} />
    </Provider>
  );
}

const styles = StyleSheet.create({
  toastContainer: {
    width: '90%',
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
    alignSelf: 'center',
    elevation: 4,
    zIndex: 1000,
  },
  mainSucces: {
    backgroundColor: '#2ECC71',
  },
  mainError: {
    backgroundColor: '#E74C3C',
  },
  text: {
    color: '#f2f2f2',
    fontSize: 15,
    fontFamily: myFonts.mediumSFProDisplay,
    flexShrink: 1,
  },
  errorText: {
    color: '#f2f2f2',
    fontSize: 15,
    marginLeft: 10,
    flexShrink: 1,
    fontFamily: myFonts.mediumSFProDisplay,
  },
  imgClose: {
    width: 18,
    height: 18,
    tintColor: '#f2f2f2',
    marginLeft: 12,
  },
  errorIc: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
});
