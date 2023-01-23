import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { CheckBox } from "react-native-elements";
import imageAssets from "../../../constants/images";
import { screenHeight } from "../../../constants/sizes";
const NFTBox = () => {
  const [images, setImage] = useState([]);
  const [selected, setSelection] = useState("null");
  useEffect(() => {
    fetchImages(NFTS);
  }, []);
  const NFTS = [
    {
      item: require("../../../assets/PNG/NFT1.png"),
    },
    {
      item: require("../../../assets/PNG/NFT2.png"),
    },
    {
      item: require("../../../assets/PNG/NFT3.png"),
    },
    {
      item: require("../../../assets/PNG/NFT4.png"),
    },
    {
      item: require("../../../assets/PNG/NFT4.png"),
    },
  ];
  const fetchImages = (NFTS) => {
    setImage(NFTS);
  };

  return (
    <View>
      <ScrollView>
      <View
        style={{
          backgroundColor: "transparent",
          height: screenHeight(0.5),
          borderRadius: 10,
          borderColor: "white",
          borderWidth: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: 10,
        }}
      >
        {images.map((image, index) => {
          return (
            <View
              key={index}
              style={{
                width: "50%",
                height: "50%",
                padding: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setSelection(index);
                }}
              >
                {index == selected ? (
                  <View>
                    <View
                      style={{
                        position: "absolute",
                        right: 0,
                        width: 60,
                        height: 70,
                        marginRight: 1,
                        marginTop: 10,
                        backgroundColor: "transparent",
                        alignItems: "flex-end",
                        paddingTop: 20,

                        zIndex: 100,
                      }}
                    >
                      <Image
                        style={{
                          position: "absolute",
                          // right: 0,
                          // width: 60,
                          // height: 70,
                          // margin: -30,
                        }}
                        source={imageAssets.checkBox}
                      />
                    </View>
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                      }}
                      source={image.item}
                    />
                  </View>
                ) : (
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                    }}
                    source={image.item}
                  />
                )}
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      </ScrollView>
    </View>
  );
};

export default NFTBox;
