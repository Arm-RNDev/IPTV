import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import LinearGradient from 'react-native-linear-gradient';

export function TabBgView({ children, customStyle }) {
  return (
    <View style={[styles.container, customStyle]}>
      <KeyboardAvoidingView
       style={{ flex: 1 }}     
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 25 : 0}
      >
        {children}
      </KeyboardAvoidingView>
    </View>
  );
}
