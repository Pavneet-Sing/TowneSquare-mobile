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
  BackHandler,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { appColor, fonts, images } from '../../constants';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height, width } = Dimensions.get('window');
import { sizes } from '../../utils';
import ContinueButton from '../../components/SignUp/ContinueButton';
import { Entypo } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import BackButton from '../../components/SignUp/BackButton';
import ProfileSetUpHeader from '../../components/SignUp/ProfileSetUpHeader';
import UploadImageModal from '../../components/SignUp/UploadImageModal';
import SelectedCollection from '../../components/SignUp/SelectedCollection';
import User from '../../../assets/images/svg/User';
import {
  updateUploadImageModalOpen,
  updateUploadModalRenderCount,
} from '../../controller/BottomSheetController';
import ChooseNFT from '../../components/SignUp/ChooseNFT';

import { ChooseProfilePicsProps } from '../../navigations/NavigationTypes';
import tinycolor from 'tinycolor2';
const size = new sizes(height, width);

export default function ChooseProfilePics({
  navigation,
}: ChooseProfilePicsProps) {
  // const ChooseProfilePics = ({ navigation }: ChooseProfilePicsProps) => {
  const dispatch = useAppDispatch();

  const profilePics = useAppSelector(
    (state) => state.USER.details.profileImage
  );

  console.log(profilePics, 'hhh');

  const uploadImageModal = useAppSelector(
    (state) => state.bottomSheetController.uploadImageModalOpen
  );
  const NftModal = useAppSelector(
    (state) => state.bottomSheetController.NftModalOpen
  );
  const selectedCollectionModal = useAppSelector(
    (state) => state.bottomSheetController.selectedCollectionModal
  );
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          uploadImageModal || NftModal || selectedCollectionModal
            ? tinycolor(appColor.signUpBackground).darken(5).toString()
            : appColor.signUpBackground,
      }}
    >
      <StatusBar
        style="light"
        backgroundColor={
          uploadImageModal || NftModal || selectedCollectionModal
            ? tinycolor(appColor.signUpBackground).darken(5).toString()
            : appColor.signUpBackground
        }
      />

      <ProfileSetUpHeader
        addOpacity={
          uploadImageModal || NftModal || selectedCollectionModal ? true : false
        }
        SvgImage={
          <User
            style={{
              opacity:
                uploadImageModal || NftModal || selectedCollectionModal
                  ? 0.6
                  : undefined,
            }}
          />
        }
        stepDescription="Hang on! You're all done after this."
        title="Your profile picture"
        sub_title="Make your favorite NFT or photo your profile picture to help other TowneSquare members recognize you."
        steps={6}
        subTitleHeight={63}
        subTitleWidth={328}
      />
      <View
        style={{
          flex: 1,
        }}
      />
      <View>
        {profilePics ? (
          <>
            <Pressable
              onPress={() => {
                dispatch(updateUploadModalRenderCount(1));
                dispatch(updateUploadImageModalOpen(true));
              }}
              style={styles.container}
            >
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{ uri: profilePics }}
                  resizeMode="cover"
                />
              </View>
            </Pressable>

            <Text
              style={{
                color: appColor.kTextColor,
                fontSize: size.fontSize(22),
                fontFamily: 'Outfit-Regular',
                textAlign: 'center',
                marginTop: size.getHeightSize(16),
                lineHeight: size.getHeightSize(21),
              }}
            >
              Looks Amazing!
            </Text>
          </>
        ) : (
          <Pressable
            onPress={() => {
              dispatch(updateUploadModalRenderCount(1));
              dispatch(updateUploadImageModalOpen(true));
            }}
            style={{
              height: size.getHeightAndWidth(160),
              width: size.getHeightAndWidth(160),
              alignItems: 'center',
              backgroundColor:
                uploadImageModal || NftModal || selectedCollectionModal
                  ? appColor.kGrayscaleWithOPacity
                  : appColor.kGrayLight3,
              alignSelf: 'center',
              borderRadius: 200,
              borderWidth: 3,
              borderColor:
                uploadImageModal || NftModal || selectedCollectionModal
                  ? appColor.kWhiteColorWithOpacity
                  : appColor.kWhiteColor,
              justifyContent: 'center',
            }}
          >
            <Entypo
              name="plus"
              color={
                uploadImageModal || NftModal || selectedCollectionModal
                  ? appColor.kWhiteColorWithOpacity
                  : appColor.kWhiteColor
              }
              size={size.fontSize(30)}
            />
          </Pressable>
        )}
      </View>
      <View style={{ flex: 1 }} />
      <View
        style={{
          height: size.getHeightSize(124),
          marginBottom: size.getHeightSize(24),
        }}
      >
        <ContinueButton
          disabled={typeof profilePics === 'undefined' ? true : false}
          navigateTo="Congratulations"
        />
        <View
          style={{
            alignSelf: 'center',
            width: size.getWidthSize(328),
            borderRadius: 40,
            height: size.getHeightSize(48),
            justifyContent: 'center',
            marginVertical: size.getHeightSize(16),
            marginHorizontal: size.getWidthSize(16),
          }}
        >
          <Text
            onPress={() => {
              navigation.navigate('Congratulations');
            }}
            style={{
              fontStyle: 'normal',
              textAlign: 'center',
              color: appColor.kTextColor,
              fontSize: size.fontSize(18),
              fontFamily: 'Outfit-Medium',
              lineHeight: size.getHeightSize(23),
              letterSpacing: 0.02,
            }}
          >
            I'll do it later
          </Text>
        </View>
      </View>

      <UploadImageModal />
      <ChooseNFT />
      <SelectedCollection />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageContainer: {
    height: size.getHeightAndWidth(160),
    width: size.getHeightAndWidth(160),

    borderRadius: 200,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Opacity color
  },
});