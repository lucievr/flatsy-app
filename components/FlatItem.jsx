import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
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
              <View style={styles.priceInfo}><DefaultText style={styles.price}>{price} €</DefaultText><DefaultText style={styles.perMonth}>/month</DefaultText></View>
              <DefaultText style={styles.flatType}>{roomNr} bedroom flat</DefaultText>
              <DefaultText style={styles.address}>{address}</DefaultText>
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
    width: 370,
    maxWidth: '90%',
    margin: 10,
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  flatInfo: {
    padding: 10,
    paddingBottom: 20
  },
  priceInfo: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: 8,
  },
  price: {
    fontSize: 24,
  },
  perMonth: {
    fontFamily: 'quicksand',
  },
  flatType: {
    fontSize: 20,
  },
  address: {
    fontFamily: 'quicksand',
    paddingVertical: 5
  }
});

export default FlatItem;
