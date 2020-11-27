import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchFlatsStartAsync } from '../store/actions/flats';
import FlatItem from '../components/FlatItem';
import FlatListHeader from '../components/FlatListHeader';
import DefaultText from '../components/DefaultText';
import CustomRadioButton from '../components/CustomRadioButton';
import CustomMapView from '../components/MapView';
import Colours from '../constants/colours';

const sortOptions = [
  {
    label: 'Newest First',
    value: 0,
  },
  {
    label: 'Oldest First',
    value: 1,
  },
  {
    label: 'Lowest Price First',
    value: 2,
  },
  {
    label: 'Highest Price First',
    value: 3,
  },
];

const FlatsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const flats = useSelector((state) => state.flats.flats);

  const [modalVisible, setModalVisible] = useState(false);
  const [sortValue, setSortValue] = useState(0);
  const [sortedFlats, setSortedFlats] = useState(flats);
  const [mapView, setMapView] = useState(false);

  const handleOnPress = (value) => {
    setSortValue(value);
    setTimeout(() => {
      setModalVisible(false);
    }, 1000);
  };

  const sortFlats = () => {
    switch (sortValue) {
      case 0:
        return setSortedFlats(flats.sort((a, b) => a.dateAdded - b.dateAdded));
      case 1:
        return setSortedFlats(flats.sort((a, b) => b.dateAdded - a.dateAdded));
      case 2:
        return setSortedFlats(flats.sort((a, b) => a.price - b.price));
      case 3:
        return setSortedFlats(flats.sort((a, b) => b.price - a.price));
      default:
        return sortedFlats;
    }
  };

  useEffect(() => {
    if (flats) {
      sortFlats();
    }
  }, [sortValue, flats]);

  useEffect(() => {
    dispatch(fetchFlatsStartAsync());
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      {mapView ? (
        <View style={styles.mapScreen}>
          <FlatListHeader mapView onSetListView={() => setMapView(false)} resultsTotal={flats.length} />
          <View style={styles.mapContainer}>
            <CustomMapView flats={flats} navigation={navigation} />
          </View>
        </View>
      ) : (
        <>
          <FlatList
            data={sortedFlats}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ width: '100%', alignItems: 'center' }}
            renderItem={({ item }) => (
              <FlatItem item={item} navigation={navigation} />
            )}
            ListEmptyComponent={() => (
              <ActivityIndicator
                size='large'
                color={Colours.accent}
                style={{ marginVertical: 30 }}
              />
            )}
            ListHeaderComponent={() => (
              <FlatListHeader
                onOpenModal={() => setModalVisible(true)}
                onSetMapView={() => setMapView(true)}
                resultsTotal={flats.length}
              />
            )}
          />
          {modalVisible && (
            <Modal
              animationType='fade'
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <TouchableOpacity
                style={styles.container}
                activeOpacity={1}
                onPressOut={() => setModalVisible(false)}
              >
                <View>
                  <TouchableWithoutFeedback>
                    <View style={styles.modalContainer}>
                      <DefaultText style={styles.sortByHeader}>
                        Sort by:
                      </DefaultText>
                      <CustomRadioButton
                        options={sortOptions}
                        onPress={handleOnPress}
                        selected={sortValue}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </TouchableOpacity>
            </Modal>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapScreen: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  mapContainer: {
    width: '100%',
    height: '81%',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
  },
  sortByHeader: {
    fontSize: 21,
    marginBottom: 10,
  },
});

export default FlatsScreen;
