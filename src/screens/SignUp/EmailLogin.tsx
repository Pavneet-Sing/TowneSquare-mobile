import { useState, useRef, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useFonts } from 'expo-font';
import TransitionBackButton from '../../components/SignUp/TransitionBackButton';
import { appColor, fonts } from '../../constants';
import { sizes } from '../../utils';
import TranslationForwardButton from '../../components/SignUp/TranslationForwardButton';
import Verify from '../../components/SignUp/ConnectSocialsAndVerify/Verify';
import { EmailLoginProps } from '../../navigations/NavigationTypes';
import ChooseUsernameContent from '../../components/SignUp/ChooseUsername/UsernameContent';
import ConnectSocials from '../../components/SignUp/ConnectSocials/ConnectSocials';
import FindFriends from '../../components/SignUp/FindFriends/FindFriends';
import ExploreCommunities from '../../components/SignUp/ExploreCommunities/ExploreCommunities';
import ChooseProfilePics from '../../components/SignUp/ChooseProfilePics/ChooseProfilePics';
import UploadImageModal from '../../components/SignUp/ChooseProfilePics/UploadImageModal';
import EmailContent from '../../components/SignUp/EmailSignup/EmailContent';
import ChooseNFT from '../../components/SignUp/ChooseProfilePics/ChooseNFT';
import SelectedCollection from '../../components/SignUp/ChooseProfilePics/SelectedCollection';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';

import {
  updateAccountInfo,
  updateDidToken,
  updateMetadata,
} from '../../controller/UserController';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  checkSignup,
  signup,
  updateConnectedSocial,
  uploadProfileImage,
} from '../../api';
import Loader from '../../../assets/svg/Loader';
import { setLoginSession } from '../../utils/session';
import Twitter from '../../../assets/images/svg/Twitter';

const { width, height } = Dimensions.get('window');
const size = new sizes(height, width);
let PADDING = size.getWidthSize(26);
let newWidth = width - 2 * PADDING;

const EmailLogin = ({ magic }: EmailLoginProps) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const loaderRef = useRef();
  const [viewIndex, setViewIndex] = useState(0);
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');

  const {
    usernameError,
    nickNameError,
    userNameLength,
    nickNameLength,
    email,
    profilePics,
    socialInfo,
  } = useAppSelector((state) => ({
    usernameError: state.USER.errors.usernameError,
    nickNameError: state.USER.errors.nicknameError,
    userNameLength: state.USER.details.username.length,
    nickNameLength: state.USER.details.Nickname.length,
    email: state.USER.details.email,
    profilePics: state.USER.details.profileImage,
    socialInfo: state.USER.details.socialInfo,
  }));
  const user = useAppSelector((state) => state.USER);

  let disable;
  switch (viewIndex) {
    case 0:
      disable = email.length < 1 ? true : false;
      break;
    case 1:
      disable =
        usernameError ||
        nickNameError ||
        userNameLength < 1 ||
        nickNameLength < 1;
      break;
    case 5:
      disable = typeof profilePics === 'undefined' ? true : false;
      break;
    default:
      break;
  }
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<any>>(null);
  const views = [
    <EmailContent />,
    <ChooseUsernameContent />,
    <Verify />,
    <ConnectSocials magic={magic} signMethod = {"EmailLogin"} />,
    <FindFriends token={token} />,
    // <ExploreCommunities />,
    <ChooseProfilePics />,
  ];
  const onViewChangeRef = useRef(({ viewableItems }: any) => {
    setViewIndex(viewableItems[0]?.index);
  });

  const showLoader = (show = true) => {
    if (loaderRef.current && show)
      (loaderRef.current as any).setNativeProps({ style: { display: 'flex' } });

    if (loaderRef.current && !show)
      (loaderRef.current as any).setNativeProps({ style: { display: 'none' } });
  };

  const createFormData = () => {
    const data = new FormData();

    data.append('file', {
      name: user.details.username,
      type: 'Image/' + get_url_extension(profilePics),
      uri: profilePics,
    } as any);
    return data;
  };

  function get_url_extension(url) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
  }

  const handleNextSlide = async () => {
    const newIndex = viewIndex + 1;
    if (viewIndex == 0) {
      try {
        showLoader(true);
        const token = await magic.auth.loginWithEmailOTP({ email });
        dispatch(updateDidToken(token));

        const accountInfo = await magic.aptos.getAccountInfo();
        dispatch(updateAccountInfo(accountInfo));

        const metadata = await magic.user.getMetadata();
        dispatch(updateMetadata(metadata));

        const res = await checkSignup(token);
        showLoader(false);
        if (res.isExist && res.isExist == true) {
          await setLoginSession(res.wallet);
          navigation.navigate('Congratulations');
        } else {
          setViewIndex((previous) => previous + 1);
          flatListRef.current.scrollToIndex({
            index: newIndex,
            animated: true,
          });
          return;
        }
      } catch (e) {
        showLoader(false);
        return;
      }
    }

    if (newIndex < views.length && flatListRef.current) {
      setViewIndex((previous) => previous + 1);
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });

      if (newIndex == 2) {
        const res = await signup(
          user.didToken,
          user.metadata.issuer,
          user.accountInfo.address,
          user.details.Nickname,
          user.details.username,
          user.details.email
        );
        
        if (!res.error && res.success != false) {
          setUserId(res.userId);
          setToken(user.didToken);
        }
      } else if (newIndex == 4) {
        const result = await updateConnectedSocial(
          userId,
          user.didToken,
          socialInfo
        );
      }
    } else {
      const res = await uploadProfileImage(user.didToken, createFormData());
      navigation.navigate('Congratulations');
    }
  };

  const handlePreviousSlide = () => {
    setViewIndex((previous) => previous - 1);
    const newIndex = viewIndex - 1;
    if (newIndex >= 0 && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
    } else {
      navigation.goBack();
    }
  };

  const stagePosition = Animated.divide(scrollX, width);
  const progressWidth = stagePosition.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5],
    outputRange: [
      newWidth / 6,
      (newWidth / 6) * 2,
      (newWidth / 6) * 3,
      (newWidth / 6) * 4,
      (newWidth / 6) * 5,
      newWidth,
    ],
    extrapolate: 'clamp',
  });

  let stageTitle = (index: number) => {
    switch (index) {
      case 0:
        return 'Select Socials';
      case 1:
        return 'Connect Socials & Verify';
      case 2:
        return 'Select Socials';
      case 3:
        return 'Find your friends';
      // case 4:
      //   return "Explore communities";
      case 4:
        return 'Choose PFP';
      default:
        return "Hang on! You're all done after this.";
    }
  };

  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{
          display: 'none',
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: '#000000a0',
          zIndex: 999,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        ref={loaderRef}
      >
        <Loader />
      </TouchableOpacity>
      <View
        style={{
          marginTop: size.getHeightSize(42),
          paddingHorizontal: PADDING,
        }}
      >
        <Text
          style={{
            color: appColor.kTextColor,
            marginBottom: size.getHeightSize(8),
            fontFamily: 'Outfit-Regular',
            fontSize: size.fontSize(14),
            lineHeight: size.getHeightSize(18),
            width: size.getWidthSize(257),
          }}
        >
          Next step: {stageTitle(viewIndex)}
        </Text>

        <Animated.View
          style={{
            height: size.getHeightSize(2),
            backgroundColor: appColor.kStatusBarNaviDark,
            width: newWidth,
          }}
        >
          <Animated.View
            style={{
              height: size.getHeightSize(2),
              backgroundColor: appColor.kSecondaryButtonColor,
              width: progressWidth,
            }}
          />
        </Animated.View>
      </View>
      <View
        style={{
          flex: 1,
          width: width,
        }}
      >
        <KeyboardAwareScrollView style={{ flex: 1 }}>
          <View
            style={{
              width: width,
              alignItems: 'center',
              flex: 1,
            }}
          >
            <FlatList
              scrollEnabled={false}
              ref={flatListRef}
              data={views}
              horizontal
              pagingEnabled
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              bounces={false}
              // onViewableItemsChanged={onViewChangeRef.current}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
              renderItem={({ item }: any) => {
                return (
                  <View
                    style={{
                      width: width,
                      backgroundColor: 'transparent',
                      height: size.getHeightSize(634),
                    }}
                  >
                    {item}
                  </View>
                );
              }}
            />
          </View>
          <View
            style={{
              height: size.getHeightSize(124),
            }}
          >
            <TranslationForwardButton
              disable={disable}
              action={() => {
                handleNextSlide();
              }}
            />
            <TransitionBackButton
              action={() => {
                handlePreviousSlide();
              }}
              index={viewIndex}
              next={() => {
                navigation.navigate('Congratulations');
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
      <UploadImageModal />
      <ChooseNFT />
      <SelectedCollection />
    </SafeAreaView>
  );
};

export default EmailLogin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: size.getHeightSize(42),
    backgroundColor: appColor.signUpBackground,
  },
});