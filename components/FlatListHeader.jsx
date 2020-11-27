import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import DefaultText from './DefaultText';
import ListIcon from '../assets/images/ListIcon';
import MapIcon from '../assets/images/MapIcon';
import SortIcon from '../assets/images/SortIcon';

import Colours from '../constants/colours';

const FlatListHeader = ({ resultsTotal, mapView, onSetListView, onSetMapView, onOpenModal }) => {
  return (
    <View style={styles.listHeader}>
      <View style={styles.displayOptions}>
        <TouchableOpacity style={styles.list} onPress={mapView ? onSetListView : () => {}}>
          <ListIcon color={mapView ? Colours.primary : Colours.darkAccent} />
          <DefaultText style={{...styles.optionText, color: mapView ? Colours.primary : Colours.darkAccent}}>List</DefaultText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.map} onPress={!mapView ? onSetMapView : () => {}}>
          <MapIcon color={mapView ? Colours.darkAccent : Colours.primary} />
          <DefaultText style={{...styles.optionTextMap, color: mapView ? Colours.darkAccent : Colours.primary}}>Map</DefaultText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sort} onPress={!mapView ? onOpenModal : () => {}}>
          <SortIcon color={mapView ? '#ccc' : Colours.primary} />
          <DefaultText style={{...styles.optionText, color: mapView ? '#ccc' : Colours.primary}}>Sort</DefaultText>
        </TouchableOpacity>
      </View>
      <DefaultText style={styles.results}>{resultsTotal} results</DefaultText>
    </View>
  )
}

const styles = StyleSheet.create({
  listHeader: {
    width: '90%',
    alignItems: 'center',
  },
  displayOptions: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 14,
    marginBottom: 10
  },
  optionText: {
    fontSize: 18,
    paddingHorizontal: 10
  },
  optionTextMap: {
    fontSize: 18,
    paddingRight: 10,
    paddingLeft: 8,
  },
  map: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#ccc',
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    paddingHorizontal: 16
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sort: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  results: {
    fontFamily: 'quicksand',
    marginBottom: 10,
    alignSelf: 'flex-start',
  }
});

export default FlatListHeader;
