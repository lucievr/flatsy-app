import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import DefaultText from './DefaultText';
import ListIcon from '../assets/images/ListIcon';
import MapIcon from '../assets/images/MapIcon';
import SortIcon from '../assets/images/SortIcon';

const FlatListHeader = ({ onOpenModal }) => {
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
        <TouchableOpacity style={styles.sort} onPress={onOpenModal}>
          <SortIcon />
          <DefaultText style={styles.optionText}>Sort</DefaultText>
        </TouchableOpacity>
      </View>
      <DefaultText style={styles.results}>34 results</DefaultText>
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
    paddingVertical: 5
  }
});

export default FlatListHeader;
