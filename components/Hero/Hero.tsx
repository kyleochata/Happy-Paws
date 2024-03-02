import { Text, Image, Platform, View } from 'react-native';
import styles from './style';
import BookBtnLight from '../Buttons/BookNow/BookBtnLight';

const Hero = () => {
  return (
    <View
      style={Platform.OS === 'web' ? styles.webHeroView : styles.mobileHeroView}
    >
      {Platform.OS === 'web' ? (
        <>
          <View style={styles.webHIContainer}>
            <Image
              style={styles.webHeroImg}
              source={require('../../assets/images/hero.jpg')}
            />
          </View>
          <View style={styles.webTContainer}>
            <Text style={styles.webTitle}>{`Your Pet's Home`}</Text>
            <Text style={styles.webTitle}>Away from Home</Text>
            <Text style={styles.webHeroText}>
              Welcome to Happy Paws, where luxury meets comfort for your beloved
              pets! Whether you're going away for a day or an extended vacation,
              trust us to provide top-notch care and accommodation for your
              furry friends.
            </Text>
            <Text style={styles.webHeroSubTitle}>Making Tails Wag </Text>
            <Text style={styles.webHeroSubTitle2}>{`&`} Hearts Happy</Text>
            <BookBtnLight value='Book now' />
          </View>
        </>
      ) : (
        <>
          <Image
            style={styles.mobileHeroImg}
            source={require('../../assets/images/hero.jpg')}
          />
          <Text style={styles.mobileTitle}>{`Your Pet's Home`}</Text>
          <Text style={styles.mobileTitle}>Away from Home</Text>
          <Text style={styles.mobileHeroText}>
            Welcome to Happy Paws, where luxury meets comfort for your beloved
            pets! Whether you're going away for a day or an extended vacation,
            trust us to provide top-notch care and accommodation for your furry
            friends.
          </Text>
          <Text style={styles.mobileHeroSubTitle}>Making Tails Wag </Text>
          <Text style={styles.mobileHeroSubTitle2}>{`&`} Hearts Happy</Text>
          <BookBtnLight value='Book now' />
        </>
      )}
    </View>
  );
};

export default Hero;
