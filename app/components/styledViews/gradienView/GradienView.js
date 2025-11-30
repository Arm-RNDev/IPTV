import { KeyboardAvoidingView, Platform, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import LinearGradient from 'react-native-linear-gradient';

export function GradienView({ children, customStyle }) {
  return (
    <View style={[styles.container, customStyle]}>
      <LinearGradient
        colors={['#14272A', '#0B1620']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.topGradient}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 25 : 0}
      >
        {children}
      </KeyboardAvoidingView>
    </View>
  );
}
