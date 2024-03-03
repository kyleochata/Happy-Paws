import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  carousel: {
    marginHorizontal: 5,
  },

  mobileCarouselContainer: {
    width: '100%',
    maxWidth: 1090,
    marginBottom: 62,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  mobileImages: {
    width: 200,
    height: 329,
  },

  webCarouselContainer: {
    overflow: 'hidden',
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
  webImages: {
    width: 289,
    height: 435,
  }
});

export default styles;