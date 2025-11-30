import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './style';
import logo from 'app/assets/images/logo.png';
import { useDispatch } from 'react-redux';
import { GradienView } from 'app/components/styledViews';

export function Splash({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <GradienView customStyle={styles.container}>
      <Image source={logo} style={styles.image} />
    </GradienView>
  );
}
