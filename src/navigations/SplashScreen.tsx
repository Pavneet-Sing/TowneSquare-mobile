import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { appColor } from '../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { sizes } from '../utils';
import { StatusBar } from 'expo-status-bar';
import { getUserInfo } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateUserData } from '../controller/UserController';
import AppLogo from '../../assets/images/svg/AppLogo';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../controller/hooks';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import { storeDeviceTokenToFireStore } from '../services/PushNotification';
const { height, width } = Dimensions.get('window');
const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const deviceToken = useAppSelector((state) => state.USER.userDeviceToken);
  async function checkAuth() {
    const token = await AsyncStorage.getItem('user_token');
    const userId = await AsyncStorage.getItem('user_id');
    if (token && userId) {
      const userInfo = await getUserInfo(userId, token);
      if (userInfo) {
        console.log(userInfo.username);
        await storeDeviceTokenToFireStore(userId, deviceToken);
        await AsyncStorage.setItem('userData', JSON.stringify(userInfo));
        dispatch(updateUserData(userInfo));
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'DrawerNavigation' }],
          })
        );
      } else {
        navigation.dispatch(StackActions.replace('FirstScreen'));
      }
    } else {
      navigation.dispatch(StackActions.replace('FirstScreen'));
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);
  const size = new sizes(height, width);
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.signUpBackground,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: top,
      }}
    >
      <StatusBar style="light" />
      <AppLogo size={size.getHeightSize(40)} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});