import { Platform, View, Text, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRef, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { buttonStyles } from '../../utils/constants';
import styles from './style';

const { width } = Dimensions.get('window');
const images = [
  'https://i.ibb.co/WGjKgzm/1.jpg',
  'https://i.ibb.co/QD5HB1G/2.jpg',
  'https://i.ibb.co/Mfnjqjf/3.jpg',
  'https://i.ibb.co/VH6tKcj/4.jpg'
];

const Carousel = () => {
  const mobile = Platform.OS !== 'web';
  const flatListRef = useRef<FlatList<string> | null>(null);
  const [index, setIndex] = useState<number>(0)
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  const onNext = () => {
    scrollToIndex(index + 1 >= images.length ? 0 : index + 1)
  };

  const onPrev = () => {
    scrollToIndex(index - 1 < 0 ? images.length - 1 : index - 1)
  };

  const calculateIndex = (offset: number) => {
    const newIndex = Math.round(offset / width);
    if (newIndex !== index) {
      setIndex(newIndex);
    }
  };

  // handle scrolling on desktop
  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    setScrollOffset(offsetX);
    calculateIndex(offsetX);
  };

  const scrollToIndex = (newIndex: number) => {
    flatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
    setIndex(newIndex);
  };

  return (
    <View style={mobile ? styles.mobileCarouselContainer : styles.webCarouselContainer}>
      <TouchableOpacity onPress={onPrev}>
        <View style={buttonStyles.arrowBtn}>
          <FontAwesome name='chevron-left' size={30} color='white' />
        </View>
      </TouchableOpacity>

      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.carousel}>
          <Image source={{ uri: item }} style={mobile ? styles.mobileImages : styles.webImages} />
          </View>
        )}
        initialScrollIndex={index}
        getItemLayout={(data, index) => ({
          length: width + 5,
          offset: (width + 5) * index,
          index,
        })}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />

      <TouchableOpacity onPress={onNext}>
        <View style={buttonStyles.arrowBtn}>
          <FontAwesome name='chevron-right' size={30} color='white' />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Carousel;