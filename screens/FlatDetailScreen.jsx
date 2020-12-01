import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import DefaultText from '../components/DefaultText';
import ImageView from '../components/ImageView';
import DatesInfo from '../components/DatesInfo';
import MapDetail from '../components/MapDetail';
import BedIcon from '../assets/images/BedIcon';
import BathIcon from '../assets/images/BathIcon';

const FlatDetailScreen = ({ route }) => {
  const flatId = route.params.flatId;

  const selectedFlat = useSelector(state =>
    state.flats.flats.find(flat => flat.id === flatId)
  );

  const {
    images,
    dateAdded,
    dateAvailable,
    price,
    roomNr,
    bathNr,
    address,
    coords,
  } = selectedFlat;

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.itemContainer}>
          <ImageView images={images} imageCarousel />
          <View style={styles.flatInfo}>
            <DatesInfo
              dateAdded={dateAdded}
              dateAvailable={dateAvailable}
              detailed
            />
            <View style={styles.priceInfo}>
              <DefaultText style={styles.price}>{price} €</DefaultText>
              <DefaultText style={styles.perMonth}>/month</DefaultText>
            </View>
            <DefaultText style={styles.flatType}>
              {roomNr} bedroom flat
            </DefaultText>
            <DefaultText style={styles.address}>{address}</DefaultText>
            <View style={styles.flatIcons}>
              <BedIcon />
              <DefaultText style={styles.iconText}>{roomNr}</DefaultText>
              <BathIcon />
              <DefaultText style={styles.iconText}>{bathNr}</DefaultText>
            </View>
          </View>
          <MapDetail coords={coords} />  
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  scrollView: {
    width: '100%',
  },
  itemContainer: {
    width: 370,
    maxWidth: '90%',
    margin: 10,
    marginTop: 20,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
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
    paddingVertical: 5,
  },
  address: {
    fontFamily: 'quicksand',
    paddingVertical: 5,
  },
  flatIcons: {
    flexDirection: 'row',
    paddingTop: 8,
  },
  iconText: {
    paddingLeft: 10,
    paddingRight: 15,
  },
});

export default FlatDetailScreen;
