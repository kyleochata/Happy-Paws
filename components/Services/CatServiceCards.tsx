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
    <View>
      {/* OVERNIGHT BOARDING */}
      <View style={mobile ? styles.mobServicesForPetWrapper : styles.webServicesForPetWrapper}>
        <View style={mobile ? styles.mobCard : styles.webCard}>
          <View style={mobile ? styles.mobServices : styles.webServices}>
            <Text style={mobile ? styles.mobLabel : styles.webLabel}>
              Overnight Boarding
            </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Standard: {'$'}30 per night
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              Includes a comfortable sleeping area, basic meals, and access to outdoor play areas.
            </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Deluxe: {'$'}50 per night
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              Includes a spacious sleeping area, premium meals, access to indoor and outdoor play areas, and webcam access for pet parents to check in.
            </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Premium: {'$'}70 per night
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              Includes a luxury suite with plush bedding, gourmet meals, personalized attention from staff, daily enrichment activities, and additional amenities such as toys or scratching posts.
            </Text>
          </View>
          <View style={styles.imgWrapper}>
            <Image
              source={require('../../assets/images/service/cat-boarding.jpg')}
              style={mobile ? styles.mobImage : styles.webImage}
            />
          </View>
          <View style={mobile ? styles.mobButton : styles.webButton}>
            <SubmitButton value='Book Now' />
          </View>
        </View>
      </View>

      {/* DAYCARE */}
      <View style={mobile ? styles.mobServicesForPetWrapper : styles.webServicesForPetWrapper}>
        <View style={mobile ? styles.mobCard : styles.webCard}>
          <View style={styles.imgWrapper}>
            <Image
              source={require('../../assets/images/service/cat-daycare.jpg')}
              style={mobile ? styles.mobImage : styles.webImage}
            />
          </View>
          <View style={mobile ? styles.mobServices : styles.webServices}>
            <Text style={mobile ? styles.mobLabel : styles.webLabel}>
              Daycare
            </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Basic: {'$'}20 per day
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              Includes supervised play sessions and basic amenities.
            </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Standard: {'$'}30 per day
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              Includes supervised play sessions, access to indoor and outdoor play areas, and optional add-ons such as interactive toys or climbing structures.
            </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Premium: {'$'}45 per day
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              Includes premium supervised play sessions with enrichment activities, specialized attention from staff, and additional amenities such as gourmet treats or cozy hideaways.
            </Text>
          </View>
          <View style={mobile ? styles.mobButton : styles.webButton}>
            <SubmitButton value='Book Now' />
          </View>
        </View>
      </View>

      {/* GROOMING */}
      <View style={mobile ? styles.mobServicesForPetWrapper : styles.webServicesForPetWrapper}>
        <View style={mobile ? styles.mobCard : styles.webCard}>
          <View style={mobile ? styles.mobServices : styles.webServices}>
            <Text style={mobile ? styles.mobLabel : styles.webLabel}>
              Grooming
            </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Basic Bath & Brush: {'$'}25
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              Includes a basic grooming package with a bath, brush, and nail trim.
            </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Standard Grooming: {'$'}40
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              Includes a full grooming package with bath, brush, nail trim, and optional add-ons such as ear cleaning or flea treatments.
            </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Premium Grooming: {'$'}60
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              Includes a premium grooming expeirence with high-quality products, gentle handling, and extra pampering such as a fur massage or nail buffing.
            </Text>
          </View>
          <View style={styles.imgWrapper}>
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
    </View>
  );
};

export default CatServiceCards;