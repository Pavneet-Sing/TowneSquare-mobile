import { View, Text, Dimensions, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../../constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { sizes } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import Notification from '../../components/Notification/Notification';
const size = new sizes(height, width);
const Notifications = () => {
  const data = [
    {
      username: 'MonkeyKing',
      type: 'follow',
      time: '2 mins ago',
      message: 'started following you',
      read: false,
    },
    {
      username: 'Decentraman',
      type: 'like',
      time: '2 mins ago',
      message: 'liked your post',
      read: false,
    },
    {
      username: 'Block3_BlockMe',
      type: 'like',
      time: 'yesterday',
      message: 'liked your comment',
      read: false,
    },
    {
      username: 'MonkeyKing',
      type: 'replied',
      time: '2 days ago',
      message: 'replied to your post',
      read: false,
    },
    {
      username: 'MonkeyKing',
      type: 'replied',
      time: '2 days ago',
      message: 'replied to your comment',
      read: false,
    },
    {
      username: 'MonkeyKing',
      type: 'mention',
      time: '2 days ago',
      message: 'mention you in a comment',
      read: false,
    },
    {
      username: 'MonkeyKing',
      type: 'mention',
      time: '2 days ago',
      message: 'mention you in a post',
      read: false,
    },
    {
      username: 'MonkeyKing',
      type: 'mention',
      time: '2 days ago',
      message: 'mention you in a post',
      read: true,
    },
    {
      username: 'MonkeyKing',
      type: 'invite',
      time: '2 days ago',
      message: 'invited you to a community',
      read: false,
    },
    {
      username: 'MonkeyKing',
      type: 'repost',
      time: '2 days ago',
      message: 'reposted your post',
      read: false,
    },
    {
      username: 'MonkeyKing',
      type: 'offer',
      time: '2 days ago',
      message: 'just posted an offer',
      read: false,
    },
  ];
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.kgrayDark2} />
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          color={appColor.kWhiteColor}
          size={size.fontSize(24)}
          onPress={navigation.goBack}
        />
        <Text style={styles.headerText}>Notifications</Text>
        <View />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Notification data={item} />}
      />
    </SafeAreaView>
  );
};

export default Notifications;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: size.getHeightSize(86),
    backgroundColor: appColor.kgrayDark2,
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: size.getWidthSize(12),
    paddingHorizontal: size.getWidthSize(16),
  },
  headerText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
  },
});
