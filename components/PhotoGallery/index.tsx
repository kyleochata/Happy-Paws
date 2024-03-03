import { Platform, View, Text } from 'react-native';
import styles from './style';
import ViewPhotosBtn from '../Buttons/PhotoGallery/ViewPhotosBtn';
import ArrowBtn from '../Buttons/PhotoGallery/ArrowBtn';
import Carousel from '../Carousel';

const PhotoGallery = () => {
  const mobile = Platform.OS !== 'web';

  return (
    <>
      <View style={mobile ? styles.mobileIntro : styles.webIntro}>
        <View style={mobile ? styles.mobileIntroTextWrap : styles.webIntroTextWrap}>
          <Text style={mobile ? styles.mobileh1 : styles.webh1}>Photo Gallery</Text>
          <Text style={mobile ? styles.mobileText : styles.webText}>
            Explore our photo gallery to see our faciilities, happy guests, and satisfied
            pet parents. From playtime in our spacious yards to cozy nap sessions in our 
            comfortable suites, every moment at Happy Paws is captured with love.
          </Text>
        </View>
        <View style={mobile ? styles.mobileBtn : styles.webBtn}>
          <ViewPhotosBtn value='View All Photos' />
        </View>
      </View>

      <View style={mobile ? styles.mobileCarouselContainer : styles.webCarouselContainer}>
        <View style={mobile ? styles.mobileArrowBtn : styles.webArrowBtn}>
          <ArrowBtn value='<' />
        </View>

        <View>
          <Carousel />
        </View>

        <View style={mobile ? styles.mobileArrowBtn : styles.webArrowBtn}>
          <ArrowBtn value='>' />
        </View>
      </View>
    </>
  );
};

export default PhotoGallery;