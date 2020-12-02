import React, { useState, useRef, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useSelector } from 'react-redux';

import PinIcon from '../assets/images/PinIcon';
import DefaultText from '../components/DefaultText';
import DatesInfo from '../components/DatesInfo';

const CustomMapView = ({ navigation }) => {
  const flats = useSelector((state) => state.flats.flats);
  const [isMapReady, setMapReady] = useState(false);
  const [mapRegion, setMapRegion] = useState({
    latitude: 38.73008034401815,
    longitude: -9.137593265622854,
    latitudeDelta: 0.07328906152175563,
    longitudeDelta: 0.07060814648866831,
  });

  const mapRef = useRef(null);

  const handleMapReady = useCallback(() => {
    setMapReady(true);
  }, [mapRef, setMapReady]);

  const handleSeeDetail = (id) => {
    navigation.navigate('Detail', {
      screen: 'Detail',
      params: { flatId: id },
    });
  };

  return (
    <MapView
      ref={mapRef}
      style={isMapReady ? styles.map : {}}
      onMapReady={handleMapReady}
      initialRegion={mapRegion}
      onRegionChange={(region) => setMapRegion(region)}
      zoomControlEnabled
      zoomTapEnabled
      zoomEnabled
    >
      {flats.map((flat, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: flat.coords.latitude,
            longitude: flat.coords.longitude,
          }}
        >
          <PinIcon />
          <Callout
            style={styles.callout}
            onPress={() => handleSeeDetail(flat.id)}
          >
            <View style={styles.calloutContent}>
              <DefaultText>{flat.roomNr} bedroom flat</DefaultText>
              <View style={styles.priceInfo}>
                <DefaultText style={styles.price}>{flat.price} €</DefaultText>
                <DefaultText style={styles.perMonth}>/month</DefaultText>
              </View>
              <DatesInfo
                dateAdded={flat.dateAdded}
                dateAvailable={flat.dateAvailable}
              />
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  callout: {
    flex: -1,
    flexDirection: 'row',
    position: 'absolute',
    width: 165,
    height: 100,
    paddingVertical: 5,
  },
  calloutContent: {
    flex: 1,
    marginLeft: 5,
  },
  priceInfo: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: 4,
  },
  price: {
    fontSize: 20,
  },
  perMonth: {
    fontFamily: 'quicksand',
  },
});

export default CustomMapView;
