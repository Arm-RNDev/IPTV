import {
  View, 
  Image, 
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { BgButton, GradienView, Input, LoadingModal } from 'app/components';
import logo from 'app/assets/images/logo.png';
import show from 'app/assets/images/show.png';
import { useDispatch } from 'react-redux';
import { setUserData } from 'app/store/slices/userSlice';
import { errorResp } from 'app/hooks';
import axiosInstance from 'app/networking/axiosInstance';
import { styles } from './style';
import Toast from 'react-native-toast-message';
import { validatePassword, validateUsername } from 'app/hooks/validation';

export function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState({
    username: '',
    pass: '',
  });
  const [data, setData] = useState({
    username: '',
    pass: '',
  });

  const logiIn = async () => {
    try {
      setLoad(true);
      const usernameError = validateUsername(data.username);
      const passwordError = validatePassword(data.pass);
      if (usernameError || passwordError) {
        setErr({ username: usernameError, pass: passwordError });
        return;
      }
      let url = `player_api.php?username=${data.username}&password=${data.pass}`;
      const res = await axiosInstance.post(url);
      const result = errorResp(res);
      if (!result?.success) return;
      dispatch(setUserData(res.data));
      navigation.replace('TabNavigation');
      setLoad(false);
    } catch (error) {
      setLoad(false);
      Toast.show({
        type: 'error',
        text1: 'Something went wrong. Try again.',
      });
    } finally {
      setLoad(false);
    }
  };

  return (
    <GradienView>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 20,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoView}>
          <Image source={logo} style={styles.logo} />
        </View>
        <Input
          placeholder={'Username'}
          onChange={t => {
            setData({ ...data, username: t });
            err.username && setErr({ ...err, username: '' });
          }}
          value={data.username}
          err={err.username}
        />
        <Input
          placeholder={'Password'}
          secure={true}
          rightImg={show}
          onChange={t => setData({ ...data, pass: t })}
          value={data.pass}
          err={err.pass}
        />
        <BgButton title={'Sign In'} onPress={logiIn} />
      </ScrollView>
      <LoadingModal visible={load} />
    </GradienView>
  );
}
