import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

import DefaultText from './DefaultText';

const FlatItem = ({ image, price, roomNr, address, dateAdded }) => {
  let Touchable = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }

  return (
    <View style={styles.itemContainer}>
      <View style={styles.touchable}>
        <Touchable onPress={() => console.log('touched')} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: image }} />
            </View>
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
  imageContainer: {
    width: '100%',
    height: '70%',
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
