import { View, Text } from 'react-native';
import React from 'react';
import { appColor } from '../../../constants';
const Airdrop = () => {
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: appColor.feedBackground,
      }}
    >
      <Text>Airdrop</Text>
    </View>
  );
};

export default Airdrop;
