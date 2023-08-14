import { View, Dimensions, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
import PostImage from '../../../assets/images/svg/PostImage';
import PostGif from '../../../assets/images/svg/PostGif';
import PostNft from '../../../assets/images/svg/PostNft';
import PostCamera from '../../../assets/images/svg/PostCamera';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import {
  updateMedia,
  updateGifBottomSheet,
  updateShowCustomToast,
  updateToastToShow,
} from '../../controller/createPost';

const size = new sizes(height, width);
const PostAttachment = () => {
  const dispatch = useAppDispatch();
  const { mediaValue, attachedNft } = useAppSelector((state) => ({
    mediaValue: state.CreatePostController.posts.media,
    attachedNft: state.CreatePostController.posts.nft,
  }));
  const disabled =
    (mediaValue && mediaValue.length > 1) || attachedNft !== null;
  const navigation = useNavigation();
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: size.getHeightSize(4),
        paddingHorizontal: size.getWidthSize(8),
        width: '100%',
        backgroundColor: appColor.kgrayDark2,
      }}
    >
      <Pressable
        onPress={() => {
          disabled && dispatch(updateToastToShow('mediaDisabled'));
          dispatch(
            disabled
              ? updateShowCustomToast(true)
              : updateMedia(Image.resolveAssetSource(images.feedImage2).uri)
          );
        }}
        style={styles.iconContainer}
      >
        <PostCamera
          style={{
            opacity: disabled ? 0.7 : 1,
          }}
        />
      </Pressable>
      <Pressable
        style={styles.iconContainer}
        onPress={() => {
          disabled && dispatch(updateToastToShow('mediaDisabled'));
          dispatch(
            disabled
              ? updateShowCustomToast(true)
              : updateMedia(Image.resolveAssetSource(images.feedImage1).uri)
          );
        }}
      >
        <PostImage
          style={{
            opacity: disabled ? 0.7 : 1,
          }}
        />
      </Pressable>
      <Pressable
        style={styles.iconContainer}
        onPress={() => {
          disabled && dispatch(updateToastToShow('mediaDisabled'));
          dispatch(
            disabled ? updateShowCustomToast(true) : updateGifBottomSheet(true)
          );
        }}
      >
        <PostGif
          style={{
            opacity: disabled ? 0.7 : 1,
          }}
        />
      </Pressable>
      <Pressable
        style={styles.iconContainer}
        onPress={() => {
          if (disabled === true) {
            dispatch(updateShowCustomToast(true));
            dispatch(updateToastToShow('mediaDisabled'));
          } else navigation.navigate('NftCollectionScreen' as never);
        }}
      >
        <PostNft
          style={{
            opacity: disabled ? 0.7 : 1,
          }}
        />
      </Pressable>
    </View>
  );
};

export default PostAttachment;
const styles = StyleSheet.create({
  iconContainer: {
    width: size.getWidthSize(40),
    height: size.getWidthSize(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
