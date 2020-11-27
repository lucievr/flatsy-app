import React, { useState, useRef, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Svg, Image as ImageSvg } from 'react-native-svg';
import { useSelector } from 'react-redux';

import PinIcon from '../assets/images/PinIcon';
import DefaultText from '../components/DefaultText';
import DatesInfo from '../components/DatesInfo';

const CustomMapView = ({ navigation }) => {
  const flats = useSelector((state) => state.flats.flats);
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

  const handleSeeDetail = (item) => {
    navigation.navigate('Detail', {
      screen: 'Detail',
      params: { item: item },
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
        <Marker key={index} coordinate={{ latitude: flat.coords.latitude, longitude: flat.coords.longitude}}>
          <PinIcon />
          <Callout style={styles.callout} onPress={() => handleSeeDetail(flat)}>
            <View style={{ width: 120, height: 90, paddingLeft: 2 }}>
              <Svg width={120} height={90}>
                <ImageSvg
                  width={'100%'}
                  height={'100%'}
                  preserveAspectRatio='xMidYMid slice'
                  href={{ uri: flat.images[0] }}
                />
              </Svg>
            </View>
            <View style={{ flex: 1, marginLeft: 15 }}>
              <DefaultText style={styles.flatType}>
                {flat.roomNr} bedroom flat
              </DefaultText>
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
    width: 300,
    height: 100,
    paddingVertical: 5,
  },
  image: {
    width: 120,
    height: 90,
    resizeMode: 'cover',
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
