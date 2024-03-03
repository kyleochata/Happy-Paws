import { StyleSheet } from 'react-native';
import { Montserrat, FiraSans } from '../../utils/fonts'
import { colors } from '../../utils/constants';

const styles = StyleSheet.create({
  mobileCarouselContainer: {
    marginBottom: 95,
  },
  mobileArrowBtn: {

  },
  mobileCarousel: {

  },

  webCarouselContainer: {
    width: '100%',
    maxWidth: 1090,
    marginTop: 40,
    marginBottom: 95,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  webCarousel: {
    overflow: 'hidden',
    marginHorizontal: 5,
  },
  images: {
    width: 289,
    height: 435,
  }
});

export default styles;