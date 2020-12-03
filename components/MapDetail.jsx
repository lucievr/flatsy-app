import React, { useState, useRef, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import PinIcon from '../assets/images/PinIcon';

const MapDetail = ({ coords }) => {
  const [isMapReady, setMapReady] = useState(false);
  const [mapRegion, setMapRegion] = useState({
    latitude: coords.latitude,
    longitude: coords.longitude,
    latitudeDelta: 0.004,
    longitudeDelta: 0.003,
  });

  const mapRef = useRef(null);

  const handleMapReady = useCallback(() => {
    setMapReady(true);
  }, [mapRef, setMapReady]);

  return (
    <MapView
      ref={mapRef}
      style={isMapReady ? styles.map : {}}
      onMapReady={handleMapReady}
      initialRegion={mapRegion}
      onRegionChange={(region) => setMapRegion(region)}
      provider={PROVIDER_GOOGLE}
      zoomControlEnabled
      zoomTapEnabled
      zoomEnabled
    >
      <Marker
        coordinate={{
          latitude: coords.latitude,
          longitude: coords.longitude,
        }}
      >
        <PinIcon />
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '94%',
    height: 230,
  },
});

export default MapDetail;
