import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';

import ImageCarousel from './ImageCarousel';
import DefaultText from './DefaultText';
import DatesInfo from './DatesInfo';

const FlatItem = ({ item, navigation }) => {
  const { images, price, roomNr, address, dateAdded, dateAvailable } = item;

  let Touchable = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }

  return (
    <View style={styles.itemContainer}>
      <View style={styles.touchable}>
        <Touchable useForeground>
          <View>
            <ImageCarousel item={item} images={images} navigation={navigation} touchable />
            <View style={styles.flatInfo}>
              <DefaultText>{price} €/month</DefaultText>
              <DefaultText>{roomNr} bedroom flat</DefaultText>
              <DefaultText>{address}</DefaultText>
              <DatesInfo dateAdded={dateAdded} dateAvailable={dateAvailable} />
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
  flatInfo: {
    padding: 10,
  },
});

export default FlatItem;
