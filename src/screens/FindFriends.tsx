import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  StyleSheet,
  Pressable,
  ImageSourcePropType,
  ScrollView,
} from 'react-native';
import React, { ReactNode, useState, useEffect } from 'react';
import { appColor, fonts, images } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height, width } = Dimensions.get('window');
import { sizes } from '../utils';
import Hands from '../images/svg/Hands';
import Friend1 from '../images/svg/Friend1';
import Friend2 from '../images/svg/Friend2';
import Friend3 from '../images/svg/Friend3';
import Friend4 from '../images/svg/Friend4';
import ContinueButton from '../components/ContinueButton';
import BackButton from '../components/BackButton';
import ProfileSetUpHeader from '../components/ProfileSetUpHeader';
const size = new sizes(height, width);
interface Friend {
  id:number,
  image: ReactNode;
  name: string;
  username: string;
}
const FindFriends = () => {
  const friends: Array<Friend> = [
    {
      id:1,
      image: <Friend1 />,
      name: 'User Name',
      username: '@username1',
    },
    {
      id:2,
      image: <Friend2 />,
      name: 'User Name',
      username: '@username2',
    },
    {
      id:3,
      image: <Friend3 />,
      name: 'User Name',
      username: '@username3',
    },
    {
      id:4,
      image: <Friend4 />,
      name: 'User Name',
      username: '@username4',
    },
    {
       id:5,
      image: <Friend2 />,
      name: 'User Name',
      username: '@username5',
    },
    {
      id:6,
      image: <Friend3 />,
      name: 'User Name',
      username: '@username6',
    },
    {
       id:7,
      image: <Friend4 />,
      name: 'User Name',
      username: '@username7',
    },
  ];

  const [following, setFollowers] = useState<Friend[]>([]);
  const [disableOnPress, setOnPress] = useState(false);
  useEffect(() => {
    if (following.length > 0) {
      setOnPress(false);
    } else setOnPress(true);
  }, [following]);
  let [isLoaded] = useFonts({
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  const addFollowers = (follow: Friend) => {
    const follows = [...following, follow];
    setFollowers(follows);
  };
  const removeFollowers = (followerToRemove: Friend) => {
    const filteredFollowers = following.filter(
      (follower) => follower.username !== followerToRemove.username
    );
    setFollowers(filteredFollowers);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.kDisabledColor,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.kDisabledColor} />
      <ProfileSetUpHeader
        SvgImage={<Hands />}
        stepDescription="Explore Communities"
        title="Find your friends"
        sub_title="See the following for your friends that are on \n TowneSquare! Give them a big high five."
        steps={4}
        subTitleWidth={304}
      />

      <View
        style={{
          marginTop: size.getHeightSize(32),
          alignSelf: 'center',
          flex: 1,
        }}
      >
        <View
          style={{
            width: size.getWidthSize(328),
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: size.getHeightSize(8),
            height: size.getHeightSize(44),

            paddingHorizontal: size.getWidthSize(8),
          }}
        >
          <Text
            style={{
              fontSize: size.fontSize(18),
              fontFamily: 'Outfit-Regular',
              textAlign: 'center',
              lineHeight: size.getHeightSize(23),
              color: appColor.kTextColor,
              fontStyle: 'normal',
            }}
          >
            Suggested Friends
          </Text>
          <View
            style={{
              width: size.getWidthSize(91),
            }}
          >
            <Text
              onPress={() => setFollowers(friends)}
              style={{
                fontSize: size.fontSize(16),
                fontFamily: 'Outfit-SemiBold',
                textAlign: 'center',
                color: appColor.kSecondaryButtonColor,
                lineHeight: size.getHeightSize(24),
              }}
            >
              Follow all
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {friends.map((friend) => (
              <View
                key={friend.id}
                style={{
                  flexDirection: 'row',
                  width: size.getWidthSize(328),
                  height: size.getHeightSize(56),
                  borderRadius: 40,
                  paddingVertical: size.getHeightSize(8),
                  paddingHorizontal: size.getWidthSize(8),
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom:size.getHeightSize(8),
                 
                }}
              >
                {friend.image}
                <View
                  style={{
                    flex: 1,
                    marginLeft: size.getWidthSize(8),
                  }}
                >
                  <Text style={styles.username}>{friend.name}</Text>
                  <Text style={styles.subusername}>{friend.username}</Text>
                </View>
                {following.some(
                  (myFollower) => myFollower.username === friend.username
                ) ? (
                  <Pressable
                    onPress={() => removeFollowers(friend)}
                    style={styles.followingButton}
                  >
                    <Text style={styles.buttonText}>FOLLOWING</Text>
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => addFollowers(friend)}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>FOLLOW</Text>
                  </Pressable>
                )}
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          height: size.getHeightSize(124),
          marginBottom: size.getHeightSize(24),
        }}
      >
        <ContinueButton
          disabled={disableOnPress}
          navigateTo="ExploreCommunities"
          marginTop={8}
        />
        <BackButton marginTop={16} />
      </View>
    </SafeAreaView>
  );
};

export default FindFriends;
const styles = StyleSheet.create({
  button: {
    width: size.getWidthSize(91),
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 40,
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(4),
    justifyContent: 'center',
    height: size.getHeightSize(38),
  },
  buttonText: {
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(18),
  },
  username: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  subusername: {
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    color: appColor.kgrayColor,
    lineHeight: size.getHeightSize(18),
  },
  followingButton: {
    backgroundColor: appColor.kSecondaryColor,
    borderRadius: 40,
    height: size.getHeightSize(38),
    justifyContent: 'center',
    width: size.getWidthSize(116),
    paddingVertical: size.getHeightSize(4),
    paddingHorizontal: size.getWidthSize(16),
  },
});
