import React from 'react';
import { View, Image, StyleSheet, Platform, Text } from 'react-native';
import {
  State,
  TapGestureHandler,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import ViewPager from '@react-native-community/viewpager';

import DefaultText from './DefaultText';

const DAY_IN_MS = 86400000;

const FlatItem = ({
  images,
  price,
  roomNr,
  address,
  dateAdded,
  dateAvailable,
  navigation,
}) => {
  let Touchable = TouchableOpacity;
  let creationDate;
  let availabilityDate;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }

  if (dateAdded === 0) {
    creationDate = 'today';
  } else if (dateAdded === 1) {
    creationDate = 'yesterday';
  } else {
    const d = new Date(Date.now() - (dateAdded * DAY_IN_MS));
    creationDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }

  if (dateAvailable === 0) {
    availabilityDate = 'immediately';
  } else {
    const d = new Date(Date.now() + (dateAvailable * DAY_IN_MS));
    availabilityDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
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
              {images.map((imgUrl, index) => (
                <View style={styles.imageContainer} key={index}>
                  <TapGestureHandler onHandlerStateChange={onSingleTap}>
                  <View>
                    <Image style={styles.image} source={{ uri: imgUrl }} />
                    <Text style={styles.imgCount}>{index + 1}/{images.length}</Text>
                    </View>
                  </TapGestureHandler>
                </View>
              ))}
            </ViewPager>
            <View style={styles.flatInfo}>
              <DefaultText>{price} €/month</DefaultText>
              <DefaultText>{roomNr} bedroom flat</DefaultText>
              <DefaultText>{address}</DefaultText>
              <DefaultText>Added {creationDate}</DefaultText>
              <DefaultText>Available {availabilityDate}</DefaultText>
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
  imgCount: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(64,64,64,0.8)',
    color: 'white',
    paddingVertical: 4,
    paddingHorizontal: 10,
    fontSize: 18,
    fontFamily: 'quicksand-semibold',
    borderRadius: 10
  },
  flatInfo: {
    padding: 10
  }
});

export default FlatItem;
