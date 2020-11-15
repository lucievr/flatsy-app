import React from 'react';
import { View, StyleSheet } from 'react-native';

import DefaultText from './DefaultText';
import ListIcon from '../assets/images/ListIcon';
import MapIcon from '../assets/images/MapIcon';
import SortIcon from '../assets/images/SortIcon';

const FlatListHeader = () => {
  return (
    <View style={styles.listHeader}>
      <View style={styles.displayOptions}>
        <View style={styles.list}>
          <ListIcon />
          <DefaultText style={styles.optionText}>List</DefaultText>
        </View>
        <View style={styles.map}>
          <MapIcon />
          <DefaultText style={styles.optionTextMap}>Map</DefaultText>
        </View>
        <View style={styles.sort}>
          <SortIcon />
          <DefaultText style={styles.optionText}>Sort</DefaultText>
        </View>
      </View>
      <DefaultText style={{ paddingVertical: 5}}>34 results</DefaultText>
    </View>
  )
}

const styles = StyleSheet.create({
  listHeader: {
    width: '100%',
  },
  displayOptions: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 15,
    marginBottom: 10
  },
  optionText: {
    fontSize: 20,
    paddingHorizontal: 10
  },
  optionTextMap: {
    fontSize: 20,
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
  }
});

export default FlatListHeader;
