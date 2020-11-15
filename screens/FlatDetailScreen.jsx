import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import DefaultText from '../components/DefaultText';
import CustomButton from '../components/CustomButton';
import ImageCarousel from '../components/ImageCarousel';
import DatesInfo from '../components/DatesInfo';

const FlatDetailScreen = ({ navigation, route }) => {
  const { images, dateAdded, dateAvailable, price, roomNr, address } = route.params.item;

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <ImageCarousel images={images} />
            <View style={styles.flatInfo}>
              <DefaultText>{price} €/month</DefaultText>
              <DefaultText>{roomNr} bedroom flat</DefaultText>
              <DefaultText>{address}</DefaultText>
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
});

export default FlatDetailScreen;
