import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import FlatItem from '../components/FlatItem';
import FlatListHeader from '../components/FlatListHeader';

const flats = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    images: [
      'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/naomi-hebert-2dcYhvbHV-M-unsplash.jpg?alt=media&token=53232b2c-a6e8-4d12-9ccb-27bb8b8f7123',
      'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/naomi-hebert-MP0bgaS_d1c-unsplash.jpg?alt=media&token=2a23b694-5d66-47c3-ba60-449be87f9170',
      'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/naomi-hebert-bI1Su2hK084-unsplash.jpg?alt=media&token=393b29ee-bab8-49ac-8aed-99d44e034f7b',
    ],
    price: 600,
    roomNr: 1,
    address: 'Avenida da Republica 13, Lisbon 12451',
    dateAdded: 0,
    dateAvailable: 0,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    images: [
      'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/naomi-hebert-2dcYhvbHV-M-unsplash.jpg?alt=media&token=53232b2c-a6e8-4d12-9ccb-27bb8b8f7123',
      'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/naomi-hebert-MP0bgaS_d1c-unsplash.jpg?alt=media&token=2a23b694-5d66-47c3-ba60-449be87f9170',
      'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/naomi-hebert-bI1Su2hK084-unsplash.jpg?alt=media&token=393b29ee-bab8-49ac-8aed-99d44e034f7b',
    ],
    price: 800,
    roomNr: 3,
    address: 'Praca da Luzia 22, Lisbon 13457',
    dateAdded: 1,
    dateAvailable: 0,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    images: [
      'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/naomi-hebert-2dcYhvbHV-M-unsplash.jpg?alt=media&token=53232b2c-a6e8-4d12-9ccb-27bb8b8f7123',
      'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/naomi-hebert-MP0bgaS_d1c-unsplash.jpg?alt=media&token=2a23b694-5d66-47c3-ba60-449be87f9170',
      'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/naomi-hebert-bI1Su2hK084-unsplash.jpg?alt=media&token=393b29ee-bab8-49ac-8aed-99d44e034f7b',
    ],
    price: 750,
    roomNr: 2,
    address: 'Santa Maria de Coimbra 37, Lisbon 78934',
    dateAdded: 2,
    dateAvailable: 5,
  },
];

const FlatsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={flats}
        contentContainerStyle={{ width: '100%', alignItems: 'center' }}
        renderItem={({ item }) => (
          <FlatItem
            item={item}
            navigation={navigation}
          />
        )}
        ListHeaderComponent={() => <FlatListHeader />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FlatsScreen;
