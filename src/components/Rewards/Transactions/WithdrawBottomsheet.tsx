import {
  Text,
  Dimensions,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect } from 'react';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import BottomsheetWrapper from '../../../shared/BottomsheetWrapper';
import { useAppDispatch } from '../../../controller/hooks';
import { updateToast } from '../../../controller/FeedsController';
import SignTransaction from '../../../shared/TransactionStatus';
import ActionButton2 from '../../../shared/ActionButton2';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  visibility: boolean;
  onClose: () => void;
  callBack: () => void;
}
const WithdrawBottomsheet = ({ callBack, onClose, visibility }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <BottomsheetWrapper
      onClose={onClose}
      backdropOpacity={0.7}
      visibility={visibility}
      handlerWidth={115}
      onMount={() => {
        setTimeout(() => {
          onClose();
          dispatch(
            updateToast({
              displayToast: true,
              toastMessage: 'APT has been transferred to you wallet!',
              toastType: 'success',
            })
          );
        }, 4000);
      }}
    >
      <Text
        style={{
          marginTop: size.getHeightSize(24),
          marginHorizontal: size.getWidthSize(16),
          fontSize: size.fontSize(20),
          lineHeight: size.getHeightSize(24),
          color: appColor.kTextColor,
          fontFamily: 'Outfit-SemiBold',
          textAlign: 'center',
        }}
      >
        Withdraw APT
      </Text>
      <SignTransaction marginVertical={24} />
      <View
        style={{
          paddingVertical: size.getHeightSize(12),
        }}
      >
        <ActivityIndicator
          color={appColor.primaryLight}
          size={size.getHeightSize(24)}
        />
      </View>
      <ActionButton2 callBack={onClose} title="Cancel" />
      <View style={{ height: size.getHeightSize(32) }} />
    </BottomsheetWrapper>
  );
};

export default WithdrawBottomsheet;
const styles = StyleSheet.create({});
