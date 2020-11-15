import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { State, TapGestureHandler } from 'react-native-gesture-handler';
import ViewPager from '@react-native-community/viewpager';

const ImageCarousel = ({ item, images, navigation, touchable }) => {
  const onSingleTap = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      // TODO pass only flatId and fetch item in detail page based on this id
      navigation.navigate('Detail', { item: item });
    }
  };

  return (
    <ViewPager
      style={styles.viewPager}
      initialPage={0}
      orientation='horizontal'
    >
      {images.map((imgUrl, index) => (
        <View style={styles.imageContainer} key={index}>
          {touchable ? (
            <TapGestureHandler onHandlerStateChange={onSingleTap}>
              <View>
                <Image style={styles.image} source={{ uri: imgUrl }} />
                <Text style={styles.imgCount}>
                  {index + 1}/{item.images.length}
                </Text>
              </View>
            </TapGestureHandler>
          ) : (
            <>
              <Image style={styles.image} source={{ uri: imgUrl }} />
              <Text style={styles.imgCount}>
                {index + 1}/{images.length}
              </Text>
            </>
          )}
        </View>
      ))}
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    width: '100%',
    height: '70%',
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
    color: 'white',
    paddingVertical: 4,
    paddingHorizontal: 10,
    fontSize: 18,
    fontFamily: 'quicksand-semibold',
    borderRadius: 10,
  },
});

export default ImageCarousel;
