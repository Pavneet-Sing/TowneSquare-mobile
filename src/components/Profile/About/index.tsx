import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import { appColor } from '../../../constants';
import { useFonts } from 'expo-font';
import { fonts } from '../../../constants';
import { images } from '../../../constants';
import { sizes } from '../../../utils';
import Info from '../../../../assets/images/svg/Info';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { UserPosts } from '../../Feed/DuumyData';
import ForYou from '../../Feed/ForYou';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../../controller/hooks';

const Tab = createMaterialTopTabNavigator();

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const About = () => {
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });

  const { navigate } = useNavigation();
  const selectedimage = useAppSelector(
    (state) => state.USER.selectedCollection
  );
  const profilePics = useAppSelector(
    (state) => state.USER.details.profileImage
  );

  const [view, setView] = useState<number>(2);

  const NAME = 'Real JC';
  const NICKNAME = 'jczhang';
  const APTOS_DOMAIN_NAME = 'jczhang.apt';
  const DATE = '03/07/2023';
  const FOLLOWING = '2,499';
  const FOLLOWERS = '28,872';
  const POST = '189';
  const COMMUNITIES = '22';

  const onlyUserPost = UserPosts.filter(
    (userPost) => userPost.nickname == NICKNAME
  );

  const Posts = () => {
    return onlyUserPost.map((userpost) => (
      <ForYou key={userpost.id} data={userpost} />
    ));
  };

  const Replies = () => {
    return onlyUserPost.map((userpost) => (
      <ForYou key={userpost.id} data={userpost} />
    ));
  };

  const Media = () => {
    return onlyUserPost.map((userpost) => (
      <ForYou key={userpost.id} data={userpost} />
    ));
  };

  const POST_MEDIA_REPLIES = () => {
    if (view == 2) {
      return Posts();
    }
    if (view == 1) {
      return Replies();
    }
    if (view == 1) {
      return Media();
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: appColor.feedBackground,
        paddingHorizontal: 15,
      }}
    >
      <View style={[styles.view1, styles.shadowProp]}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image source={images.black_logo} />
            <Text style={styles.text}>TowneSquare</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={images.purple_badge} />
            <Image source={images.green_badge} />
            <Image source={images.blue_badge} />
          </View>
        </View>
        <View style={{ marginTop: 15, flexDirection: 'row' }}>
          <View style={styles.imageContainer}>
            {profilePics ? (
              <Image
                style={styles.image}
                source={{ uri: profilePics }}
                resizeMode="contain"
              />
            ) : (
              <Image style={{ borderRadius: 50 }} source={images.pfp_avatar} />
            )}
          </View>
          <View style={{ justifyContent: 'center', marginLeft: 15 }}>
            <Text
              style={{
                color: appColor.kTextColor,
                fontFamily: 'Outfit-Bold',
                fontSize: size.fontSize(18),
              }}
            >
              {NAME}
            </Text>
            <Text
              style={{
                color: appColor.kGrayscale,
                fontSize: size.fontSize(16),
                fontFamily: 'Outfit-SemiBold',
              }}
            >
              @{NICKNAME}
            </Text>
            <Text
              style={{
                color: appColor.kSecondaryButtonColor,
                fontFamily: 'Outfit-Bold',
                fontSize: size.fontSize(16),
              }}
            >
              {APTOS_DOMAIN_NAME}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 25, alignItems: 'flex-end' }}>
          <Text
            style={{
              fontFamily: 'Outfit-SemiBold',
              color: appColor.kTextColor,
              fontSize: size.fontSize(14),
            }}
          >{`REGISTERED SINCE ${DATE}`}</Text>
        </View>
      </View>
      <View style={styles.view2}>
        <View style={styles.view2Box}>
          <Text style={styles.view2TextUp}>{FOLLOWING}</Text>
          <Text style={styles.view2TextDown}>Following</Text>
        </View>
        <View style={styles.view2Box}>
          <Text style={styles.view2TextUp}>{FOLLOWERS}</Text>
          <Text style={styles.view2TextDown}>Followers</Text>
        </View>
        <View style={styles.view2Box}>
          <Text style={styles.view2TextUp}>{POST}</Text>
          <Text style={styles.view2TextDown}>Post</Text>
        </View>
        <View style={styles.view2Box}>
          <Text style={styles.view2TextUp}>{COMMUNITIES}</Text>
          <Text style={styles.view2TextDown}>Communities</Text>
        </View>
      </View>
      <View style={styles.aboutDiv}>
        <Text style={styles.aboutHeader}>About</Text>
        <View>
          <Text style={styles.aboutText}>Love everything about blockchain</Text>
        </View>
        <View>
          <Text style={styles.aboutText}>3 Web3 Native</Text>
        </View>
        <View>
          <Text style={styles.aboutText}>
            Always on a lookout for a blue chips
          </Text>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Text style={styles.aboutHeader}>My Super Stars </Text>
            <Info />
          </View>

          {selectedimage.length > 0 ? (
            <Pressable
              onPress={() => {
                navigate('SetNFTs');
              }}
            >
              <Text
                style={{
                  color: appColor.kSecondaryButtonColor,
                  fontFamily: 'Outfit-Bold',
                  fontSize: size.fontSize(16),
                }}
              >
                Edit
              </Text>
            </Pressable>
          ) : (
            <></>
          )}
        </View>
        {selectedimage.length > 0 ? (
          <>
            <ScrollView horizontal={true}>
              {selectedimage.map((item) => (
                <Image
                  style={{
                    margin: 5,
                    width: 120,
                    height: size.getHeightSize(130),
                    borderRadius: 15,
                  }}
                  key={item.id}
                  source={item.image}
                />
              ))}
            </ScrollView>
          </>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              padding: 15,
              marginVertical: 15,
              justifyContent: 'space-between',
              borderStyle: 'dashed',
              borderColor: appColor.kTextSubtitleClor,
              borderWidth: 1,
              borderRadius: 30,
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  color: appColor.kTextSubtitleClor,
                  fontFamily: 'Outfit-Regular',
                  fontSize: size.fontSize(13),
                }}
              >
                When you set you preferred
              </Text>
              <Text
                style={{
                  color: appColor.kTextSubtitleClor,
                  fontFamily: 'Outfit-Regular',
                  fontSize: size.fontSize(13),
                }}
              >
                NFTs, they will show here
              </Text>
            </View>
            <Pressable
              style={{
                backgroundColor: appColor.kWhiteColor,
                borderRadius: 30,
                paddingHorizontal: 25,
                justifyContent: 'center',
              }}
              onPress={() => {
                navigate('SetNFTs');
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'Outfit-Bold',
                }}
              >
                Set NFTs
              </Text>
            </Pressable>
          </View>
        )}
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: appColor.kgrayDark2,
          borderRadius: 40,
          marginTop: 10,
        }}
      >
        <Pressable
          style={view == 2 ? styles.focusedTab : styles.tab}
          onPress={() => {
            setView(2);
          }}
        >
          <Text style={view == 2 ? styles.focusedtabText : styles.tabText}>
            Posts
          </Text>
        </Pressable>
        <Pressable
          style={view == 1 ? styles.focusedTab : styles.tab}
          onPress={() => {
            setView(1);
          }}
        >
          <Text style={view == 1 ? styles.focusedtabText : styles.tabText}>
            Replies
          </Text>
        </Pressable>
        <Pressable
          style={view == 0 ? styles.focusedTab : styles.tab}
          onPress={() => setView(0)}
        >
          <Text style={view == 0 ? styles.focusedtabText : styles.tabText}>
            Media
          </Text>
        </Pressable>
      </View>
      <View>{POST_MEDIA_REPLIES()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view1: {
    backgroundColor: appColor.kgrayDark2,
    marginTop: 15,
    borderRadius: 40,
    borderColor: 'white',
    padding: 15,
  },
  text: {
    color: appColor.kGrayscale,
    fontFamily: 'Outfit-Bold',
    paddingLeft: 5,
  },
  shadowProp: {
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  view2: {
    backgroundColor: appColor.kgrayDark2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 5,
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-evenly',
  },
  view2Box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2TextUp: {
    fontFamily: 'Outfit-Bold',
    color: appColor.kTextColor,
  },
  view2TextDown: {
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayscale,
  },
  aboutDiv: {
    marginVertical: 20,
  },
  aboutHeader: {
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Bold',
    fontSize: size.fontSize(20),
    paddingBottom: 10,
  },
  aboutText: {
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
  },
  focusedTab: {
    backgroundColor: appColor.kSecondaryButtonColor,
    flex: 1,
    paddingVertical: size.getHeightSize(8),
    justifyContent: 'center',
    marginHorizontal: size.getWidthSize(4),
    borderRadius: 40,
    height: size.getHeightSize(39),
  },
  focusedtabText: {
    color: appColor.kTextColor,
    textAlign: 'center',
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(20),
    fontFamily: 'Outfit-SemiBold',
  },
  tabText: {
    color: appColor.kTextColor,
    textAlign: 'center',
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
  },
  tab: {
    backgroundColor: 'transparent',
    flex: 1,
    paddingVertical: size.getHeightSize(8),
    justifyContent: 'center',
    paddingHorizontal: size.getWidthSize(4),
    borderRadius: 40,
  },
  imageContainer: {
    height: size.getHeightAndWidth(140),
    width: size.getHeightAndWidth(140),
    borderRadius: 200,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});

export default About;