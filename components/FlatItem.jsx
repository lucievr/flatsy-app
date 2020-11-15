import React from 'react';
import { View, Image, StyleSheet, Platform } from 'react-native';
import {
  State,
  TapGestureHandler,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import ViewPager from '@react-native-community/viewpager';

import DefaultText from './DefaultText';

const FlatItem = ({
  image,
  image2,
  image3,
  price,
  roomNr,
  address,
  dateAdded,
  navigation,
}) => {
  let Touchable = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }

  const onSingleTap = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      navigation.navigate('Detail');
    }
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.touchable}>
        <Touchable useForeground>
          <View>
            <ViewPager
              style={styles.viewPager}
              initialPage={0}
              orientation='horizontal'
            >
              <View style={styles.imageContainer} key='1'>
                <TapGestureHandler onHandlerStateChange={onSingleTap}>
                  <Image style={styles.image} source={{ uri: image }} />
                </TapGestureHandler>
              </View>
              <View style={styles.imageContainer} key='2'>
                <TapGestureHandler onHandlerStateChange={onSingleTap}>
                  <Image style={styles.image} source={{ uri: image2 }} />
                </TapGestureHandler>
              </View>
              <View style={styles.imageContainer} key='3'>
                <TapGestureHandler onHandlerStateChange={onSingleTap}>
                  <Image style={styles.image} source={{ uri: image3 }} />
                </TapGestureHandler>
              </View>
            </ViewPager>
            <View>
              <DefaultText>{price} €/month</DefaultText>
              <DefaultText>{roomNr} bedroom flat</DefaultText>
              <DefaultText>{address}</DefaultText>
              <DefaultText>Added {dateAdded}</DefaultText>
            </View>
          </View>
        </Touchable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: 400,
    maxWidth: '90%',
    height: 400,
    margin: 10,
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  viewPager: {
    width: '100%',
    height: '70%',
  },
  imageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default FlatItem;
