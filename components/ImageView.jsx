import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import CameraIcon from '../assets/images/CameraIcon';

const ImageView = ({ images, imageCarousel }) => {
  if (imageCarousel) {
    return (
      <ViewPager
        style={styles.viewPager}
        initialPage={0}
        orientation='horizontal'
      >
        {images.map((imgUrl, index) => (
          <View style={styles.imageContainer} key={index}>
            <Image style={styles.image} source={{ uri: imgUrl }} />
            <View style={styles.imgCount}>
              <Text style={styles.countText}>
                {index + 1}/{images.length}
              </Text>
            </View>
          </View>
        ))}
      </ViewPager>
    );
  }

  return (
    <View style={styles.viewPager}>
      <View style={styles.imageContainer}>
        <View>
          <Image style={styles.image} source={{ uri: images[0] }} />
          <View style={styles.imgCount}>
            <Text style={styles.countText}>{images.length}</Text>
            <View style={styles.iconContainer}>
              <CameraIcon />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    width: '100%',
    height: 246,
  },
  imageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imgCount: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(64,64,64,0.8)',
    paddingTop: 2,
    paddingBottom: 5,
    paddingLeft: 7,
    paddingRight: 4,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  countText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'quicksand-semibold',
    marginRight: 3,
  },
  iconContainer: {
    marginTop: 4,
    marginRight: 3,
  },
});

export default ImageView;
