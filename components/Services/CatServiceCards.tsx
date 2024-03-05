import { Platform, View, Text, Image } from 'react-native';
import styles from './style';
import SubmitButton from '../Buttons/SubmitButton';

// interface ServiceCardProps {
//   services: {
//     type: string;
//     title: string;
//     price: number;
//     description: string;
//   }[]
// };
interface Service {
  type: string;
  title: string;
  price: number;
  description: string;
}

interface CatServiceCardsProps {
  boardingService?: Service[];
  daycareService?: Service[];
  groomingService?: Service[];
}

const CatServiceCards = ({ boardingService, daycareService, groomingService }: CatServiceCardsProps) => {
  const mobile = Platform.OS !== 'web';

  return (
    <View style={mobile ? styles.mobServicesForPetWrapper : styles.webServicesForPetWrapper}>
      {/* OVERNIGHT BOARDING */}
      <View style={mobile ? styles.mobCard : styles.webCard}>
        <Text style={mobile ? styles.mobLabel : styles.webLabel}>
          Overnight Boarding
        </Text>
        <View style={mobile ? styles.mobServices : styles.webServices}>
          {/* <Text style={mobile ? styles.mobH3 : styles.webH3}>
            {boardingService?.title}: {'$'}{boardingService?.price} per night
          </Text>
          <Text style={mobile ? styles.mobDescription : styles.webDescription}>
            {boardingService?.description}
          </Text> */}
          {boardingService?.map((service) => (
            <>
              <Text style={mobile ? styles.mobH3 : styles.webH3}>
                {service.title}: {'$'}{service.price} per night
              </Text>
              <Text style={mobile ? styles.mobDescription : styles.webDescription}>
                {service.description}
              </Text>
            </>
          ))}
        </View>
        <View>
            <Image
              source={require('../../assets/images/service/cat-boarding.jpg')}
              style={mobile ? styles.mobImage : styles.webImage}
            />
        </View>
        <View style={mobile ? styles.mobButton : styles.webButton}>
          <SubmitButton value='Book Now' />
        </View>
      </View>

      {/* DAYCARE */}
      <View style={mobile ? styles.mobCard : styles.webCard}>
        <Text style={mobile ? styles.mobLabel : styles.webLabel}>
          Daycare
        </Text>
        <View style={mobile ? styles.mobServices : styles.webServices}>
        {daycareService?.map((service) => (
            <>
              <Text style={mobile ? styles.mobH3 : styles.webH3}>
                {service.title}: {'$'}{service.price} per night
              </Text>
              <Text style={mobile ? styles.mobDescription : styles.webDescription}>
                {service.description}
              </Text>
            </>
          ))}
          {/* <Text style={mobile ? styles.mobH3 : styles.webH3}>
            {daycareService?.title}: {'$'}{daycareService?.price} per day
          </Text>
          <Text style={mobile ? styles.mobDescription : styles.webDescription}>
            {daycareService?.description}
          </Text> */}
        </View>
        <View>
          <Image
            source={require('../../assets/images/service/cat-daycare.jpg')}
            style={mobile ? styles.mobImage : styles.webImage}
          />
        </View>
        <View style={mobile ? styles.mobButton : styles.webButton}>
          <SubmitButton value='Book Now' />
        </View>
      </View>

      {/* GROOMING */}
      <View style={mobile ? styles.mobCard : styles.webCard}>
        <Text style={mobile ? styles.mobLabel : styles.webLabel}>
          Grooming
        </Text>
        <View style={mobile ? styles.mobServices : styles.webServices}>
          {groomingService?.map((service) => (
            <>
              <Text style={mobile ? styles.mobH3 : styles.webH3}>
                {service.title}: {'$'}{service.price} per night
              </Text>
              <Text style={mobile ? styles.mobDescription : styles.webDescription}>
                {service.description}
              </Text>
            </>
          ))}
          {/* <Text style={mobile ? styles.mobH3 : styles.webH3}>
            {groomingService?.title}: {'$'}{groomingService?.price}
          </Text>
          <Text style={mobile ? styles.mobDescription : styles.webDescription}>
            {groomingService?.description}
          </Text> */}
        </View>
        <View>
          <Image
            source={require('../../assets/images/service/cat-grooming.jpg')}
            style={mobile ? styles.mobImage : styles.webImage}
          />
        </View>
        <View style={mobile ? styles.mobButton : styles.webButton}>
          <SubmitButton value='Book Now' />
        </View>
      </View>
    </View>
  );
};

export default CatServiceCards;