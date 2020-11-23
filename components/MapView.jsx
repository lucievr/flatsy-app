import React, { useState, useRef, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

import PinIcon from '../assets/images/PinIcon';
import DefaultText from '../components/DefaultText';

const CustomMapView = ({ flats }) => {
  const [isMapReady, setMapReady] = useState(false);
  const [mapRegion, setMapRegion] = useState({
    latitude: 38.73964430534495,
    longitude: -9.139717910438776,
    latitudeDelta: 0.06855289815440813,
    longitudeDelta: 0.0823475047945994,
  });

  const mapRef = useRef(null);

  const handleMapReady = useCallback(() => {
    setMapReady(true);
  }, [mapRef, setMapReady]);

  console.log(mapRegion, 'region');

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
        <Marker key={index} coordinate={flat.coords}>
          <PinIcon />
          <Callout style={styles.callout}>
            <View>
              <DefaultText style={styles.flatType}>{flat.roomNr} bedroom flat</DefaultText>
              <View style={styles.priceInfo}><DefaultText style={styles.price}>{flat.price} €</DefaultText><DefaultText style={styles.perMonth}>/month</DefaultText></View>
              <DefaultText style={styles.address}>{flat.address}</DefaultText>
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
    position: 'absolute', 
    width: 300,
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
  address: {
    fontFamily: 'quicksand',
  },
});

export default CustomMapView;
