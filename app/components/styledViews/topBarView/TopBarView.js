import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import backIc from 'app/assets/images/back.png';

export function TopBarView({ children, customStyle, title, navigation, back }) {
  return (
    <SafeAreaView edges={['top']}  style={[styles.container, customStyle]}>
      {back && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backIc} style={styles.backIcon} />
        </TouchableOpacity>
      )}
      {title && (
        <View style={styles.titleView}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
      {children}
    </SafeAreaView>
  );
}
