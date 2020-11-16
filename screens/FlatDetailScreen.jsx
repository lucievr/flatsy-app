import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import DefaultText from '../components/DefaultText';
import CustomButton from '../components/CustomButton';
import ImageCarousel from '../components/ImageCarousel';
import DatesInfo from '../components/DatesInfo';
import BedIcon from '../assets/images/BedIcon';
import BathIcon from '../assets/images/BathIcon';

const FlatDetailScreen = ({ navigation, route }) => {
  const { images, dateAdded, dateAvailable, price, roomNr, bathNr, address } = route.params.item;

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <ImageCarousel images={images} />
            <View style={styles.flatInfo}>
              <View style={styles.priceInfo}><DefaultText style={styles.price}>{price} €</DefaultText><DefaultText style={styles.perMonth}>/month</DefaultText></View>
              <DefaultText style={styles.flatType}>{roomNr} bedroom flat</DefaultText>
              <DefaultText style={styles.address}>{address}</DefaultText>
              <View style={styles.flatIcons}><BedIcon /><DefaultText style={styles.iconText}>{roomNr}</DefaultText><BathIcon /><DefaultText style={styles.iconText}>{bathNr}</DefaultText></View>
              <DatesInfo dateAdded={dateAdded} dateAvailable={dateAvailable} detailed />
            </View>
      <CustomButton onPress={() => navigation.navigate('Contact')}>
        Contact now!
      </CustomButton>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  flatInfo: {
    padding: 10,
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
  },
  flatIcons: {
    flexDirection: 'row'
  },
  iconText: {
    paddingLeft: 10,
    paddingRight: 15
  }
});

export default FlatDetailScreen;
