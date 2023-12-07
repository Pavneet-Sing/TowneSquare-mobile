import { useState, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Dimensions,
  FlatList,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../../constants';
import { sizes } from '../../utils';
import ReferralView from '../../components/SignUp/Referral/ReferralView';
import TranslationForwardButton from '../../components/SignUp/TranslationForwardButton';
import Verify from '../../components/SignUp/ConnectSocialsAndVerify/Verify';
import { SignUpProps } from '../../navigations/NavigationTypes';
import ActionButton2 from '../../shared/ActionButton2';
import ChooseUsernameContent from '../../components/SignUp/ChooseUsername/UsernameContent';
import ConnectSocials from '../../components/SignUp/ConnectSocials/ConnectSocials';
import FindFriends from '../../components/SignUp/FindFriends/FindFriends';
import ExploreCommunities from '../../components/SignUp/ExploreCommunities/ExploreCommunities';
import ChooseProfilePics from '../../components/SignUp/ChooseProfilePics/ChooseProfilePics';
import UploadImageModal from '../../components/SignUp/ChooseProfilePics/UploadImageModal';
import ChooseNFT from '../../components/SignUp/ChooseProfilePics/ChooseNFT';
import SelectedCollection from '../../components/SignUp/ChooseProfilePics/SelectedCollection';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SignupTransitionBackButton from '../../components/SignUp/SignupTransitionBackButton';
import { useAppSelector } from '../../controller/hooks';
import { signup, updateConnectedSocial, uploadProfileImage } from "../../api";
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
const size = new sizes(height, width);
let PADDING = size.getWidthSize(26);
let newWidth = width - 2 * PADDING;

const SignUp = ({ magic }: SignUpProps) => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  const padding = useSafeAreaInsets();
  const {
    usernameError,
    nickNameError,
    userNameLength,
    nickNameLength,
    profilePics,
    referralCode,
    socialInfo
  } = useAppSelector((state) => ({
    usernameError: state.USER.errors.usernameError,
    nickNameError: state.USER.errors.nicknameError,
    userNameLength: state.USER.details.username.length,
    nickNameLength: state.USER.details.Nickname.length,
    profilePics: state.USER.details.profileImage,
    referralCode: state.USER.details.referralCode,
    socialInfo: state.USER.details.socialInfo,
  }));
  const views = [
    <ReferralView />,
    <ChooseUsernameContent />,
    <Verify />,
    <ConnectSocials magic={magic} />,
    <FindFriends token={token} />,
    // <ExploreCommunities />,
    <ChooseProfilePics />,
  ];
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<any>>(null);
  const [viewIndex, setViewIndex] = useState(0);
  const user = useAppSelector((state) => state.USER);

  const createFormData = () => {
    const data = new FormData();

    data.append("file", {
      name: user.details.username,
      type: 'Image/' + get_url_extension(profilePics),
      uri: profilePics
    } as any);
    return data;
  };

  function get_url_extension(url) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
  }
  const skipUploadImage = async () => {
    navigation.navigate("Congratulations");
  }

  const handleNextSlide = async () => {
    const newIndex = viewIndex + 1;
    if (newIndex < views.length && flatListRef.current) {
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
    }else{
      const res = await uploadProfileImage(user.didToken, createFormData());
      if (res.profileUrl != null) {
        navigation.navigate("Congratulations");
      }
    }
  };

  const onViewChangeRef = useRef(({ viewableItems }: any) => {
    setViewIndex(viewableItems[0]?.index);
  });

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
        return 'Connect Socials & Verify';
      case 1:
        return 'Connect Socials & Verify';
      case 2:
        return 'Select socials';
      case 3:
        return 'Find your friends';
      case 4:
        return 'Choose PFP';
      default:
        return "Hang on! You're all done after this.";
    }
  };
  let disable;
  switch (viewIndex) {
    case 0:
      disable = referralCode.length < 1;
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
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <View
      style={[
        styles.container,
        {
          flex: 1,
          paddingTop: padding.top,
        },
      ]}
    >
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
            width: newWidth,
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
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          style={{
            flex: 1,
          }}
        >
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
                      flex: 1,
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
              marginBottom: size.getHeightSize(16),
              gap: size.getHeightSize(8),
              flex: 1,
            }}
          >
            <TranslationForwardButton
              action={() => {
                handleNextSlide();
              }}
              disable={disable}
            />
            {viewIndex === 0 && (
              <Text
                onPress={handleNextSlide}
                style={{
                  paddingVertical: size.getHeightSize(12.5),
                  fontSize: size.fontSize(18),
                  color: appColor.kTextColor,
                  textAlign: 'center',
                  marginLeft: size.getWidthSize(6),
                  lineHeight: size.getHeightSize(23),
                  fontFamily: 'Outfit-Medium',
                }}
              >
                I don't have a referral code
              </Text>
            )}
            <SignupTransitionBackButton
              action={() => {
                handlePreviousSlide();
              }}
              index={viewIndex}
              next={skipUploadImage}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
      <UploadImageModal />
      <ChooseNFT />
      <SelectedCollection />
    </View>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    // paddingTop: size.getHeightSize(56),
    backgroundColor: appColor.signUpBackground,
  },
});
