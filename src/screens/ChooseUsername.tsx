import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import { appColor, fonts, images } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height, width } = Dimensions.get('window');
import NickNameField from '../components/NickNameField';
import User from '../images/svg/User';
import ContinueButton from '../components/ContinueButton';
import BackButton from '../components/BackButton';
import ProfileSetUpHeader from '../components/ProfileSetUpHeader';
import UsernameField from '../components/UsernameField';
import { sizes } from '../utils';
import { useAppSelector } from '../controller/hooks';
import { useNavigation } from '@react-navigation/native';


const ChooseUsername = () => {
  const usernameError = useAppSelector(
    (state) => state.USER.errors.usernameError
  );
  const nickNameError = useAppSelector(
    (state) => state.USER.errors.nicknameError
  );
  const userNameLength = useAppSelector(
    (state) => state.USER.details.username.length
  );
  const size = new sizes(height, width);
  const nickNameLength = useAppSelector(
    (state) => state.USER.details.Nickname.length
  );
  const navigation = useNavigation();
  const disabled =  usernameError || nickNameError || userNameLength < 1 || nickNameLength < 1
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.signUpBackground,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.signUpBackground} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ProfileSetUpHeader
          SvgImage={<User />}
          stepDescription="Connect socials & verify"
          title="Choose your username"
          sub_title={`Stand out in TowneSquare with a unique username.`}
          steps={1}
          iconMarginTop={32}
        />
        <View style={{ height: size.getHeightSize(113.5) }} />
        <View>
          <NickNameField />
          <View style={{ height: size.getHeightSize(32) }} />
          <UsernameField />
        </View>
        <View style={{ flex: 1 }} />
        <View
          style={{
            height: size.getHeightSize(124),
            marginBottom: size.getHeightSize(24),
          }}
        >
          {/* <ContinueButton
            disabled={
              usernameError ||
              nickNameError ||
              userNameLength < 1 ||
              nickNameLength < 1
            }
            navigateTo="ConnectSocialsAndVrify"
          /> */}
           <Pressable
            disabled={disabled}
             onPress={() => {
        

            navigation.navigate("ConnectSocialsAndVrify" as never);
          }}
          style={{
            backgroundColor: disabled
              ? appColor.kWhiteColorWithOpacity
              : appColor.kWhiteColor,
            alignSelf: 'center',
            width: size.getWidthSize(328),
            borderRadius: 40,
            // height: size.getHeightSize(48),
            justifyContent: 'center',
            marginTop: 0 ? size.getHeightSize(8) : 8,
            paddingVertical:size.getHeightSize(14)
          }}
        >
        <Text
          style={{
            textAlign: 'center',
            color: appColor.kButtonTextColor,
            fontSize: size.fontSize(18),
            fontFamily: 'Outfit-SemiBold',
            fontStyle: 'normal',
            lineHeight: size.getHeightSize(20),
            letterSpacing: 0.01,
          
          }}
          >
            Continue
          </Text>
          </Pressable>
          <BackButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseUsername;
