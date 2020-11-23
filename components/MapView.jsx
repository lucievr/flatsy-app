import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

const CustomMapView = ({ flats }) => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 38.7329780651784,
    longitude: -9.144960287958384,
    latitudeDelta: 0.0491,
    longitudeDelta: 0.0473,
  });

  console.log(mapRegion, 'region');

  return (
    <MapView
      style={styles.map}
      initialRegion={mapRegion}
      onRegionChange={(region) => setMapRegion(region)}
      zoomEnabled
      zoomTapEnabled
      zoomControlEnabled
    >
      {flats.map((flat, index) => (
        <Marker key={index} coordinate={flat.coords} />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default CustomMapView;
