import { Platform, View, Text } from 'react-native';
import styles from './style';
import ViewPhotosBtn from '../Buttons/PhotoGallery/ViewPhotosBtn';
import Carousel from '../Carousel';

const PhotoGallery = () => {
  const mobile = Platform.OS !== 'web';

  return (
    <View style={styles.container}>
      {mobile ? (
        <>
          <View style={styles.mobileIntro}>
            <View style={styles.mobileIntroTextWrap}>
              <Text style={styles.mobileh1}>Photo Gallery</Text>
              <View style={styles.mobileBtn}>
                <ViewPhotosBtn value='View All Photos' />
              </View>
            </View>
            <Text style={styles.mobileText}>
              Explore our photo gallery to see our faciilities, happy guests, and satisfied
              pet parents. From playtime in our spacious yards to cozy nap sessions in our 
              comfortable suites, every moment at Happy Paws is captured with love.
            </Text>
          </View>
        
          <Carousel />
        </>
      ) : (
        <>
          <View style={styles.webIntro}>
            <View style={styles.webIntroTextWrap}>
              <Text style={styles.webh1}>Photo Gallery</Text>
              <Text style={styles.webText}>
                Explore our photo gallery to see our faciilities, happy guests, and satisfied
                pet parents. From playtime in our spacious yards to cozy nap sessions in our 
                comfortable suites, every moment at Happy Paws is captured with love.
              </Text>
            </View>
            <View style={styles.webBtn}>
              <ViewPhotosBtn value='View All Photos' />
            </View>
          </View>
          
          <Carousel />
        </>
      )}
    </View>
  );
};

export default PhotoGallery;