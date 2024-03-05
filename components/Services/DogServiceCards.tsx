import { Platform, View, Text, Image } from 'react-native';
import styles from './style';
import SubmitButton from '../Buttons/SubmitButton';

// interface Service {
//   services: {
//     type: string;
//     title: string;
//     price: number;
//     description: string;
//   }[]
// };

// interface Service {
//   type: string;
//   title: string;
//   price: number;
//   description: string;
// }

// interface DogServiceCardsProps {
//   boardingService?: Service[];
//   daycareService?: Service[];
//   groomingService?: Service[];
//   trainingService?: Service[];
// };

const DogServiceCards = () => {
  const mobile = Platform.OS !== 'web';

  return (
    <>
      <View style={mobile ? styles.mobServicesForPetWrapper : styles.webServicesForPetWrapper}>
        {/* OVERNIGHT BOARDING */}
        <View style={mobile ? styles.mobCard : styles.webCard}>
          <View style={mobile ? styles.mobServices : styles.webServices}>
          <Text style={mobile ? styles.mobLabel : styles.webLabel}>
            Overnight Boarding
          </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Standard: {'$'}40 per night
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              Includes a comfortable sleeping area, basic meals, and access to outdoor play areas.
            </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Deluxe: {'$'}60 per night
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
            Includes a spacious sleeping area, premium meals, access to indoor and outdoor play areas, and webcam access for pet parents to check in.
            </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Premium: {'$'}80 per night
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
            Includes a luxury suite with plush bedding, gourmet meals, personalized attention from staff, daily enrichment activities, and additional amenities such as bedtime stories or cuddle time.
            </Text>
          </View>
          <View style={styles.imgWrapper}>
            <Image
              source={require('../../assets/images/service/dog-boarding.jpg')}
              style={mobile ? styles.mobImage : styles.webImage}
            />
          </View>
          <View style={mobile ? styles.mobButton : styles.webButton}>
            <SubmitButton value='Book Now' />
          </View>
        </View>

        {/* DAYCARE */}
        <View style={mobile ? styles.mobCard : styles.webCard}>
          <View style={styles.imgWrapper}>
            <Image
              source={require('../../assets/images/service/dog-daycare.jpg')}
              style={mobile ? styles.mobImage : styles.webImage}
            />
          </View>
          <View style={mobile ? styles.mobServices : styles.webServices}>
            <Text style={mobile ? styles.mobLabel : styles.webLabel}>
              Daycare
            </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Basic: {'$'}25 per day
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              Includes supervised play sessions and basic amenities.
            </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Standard: {'$'}35 per day
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              Includes supervised play sessions, access to indoor and outdoor play areas, and optional add-ons such as group training sessions or spa treatments.
            </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Premium: {'$'}50 per day
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              Includes premium supervised play sessions with structured activities, enrichment programs, specialized attention from staff, and additional amenities such as gourmet treats or personalized playtime.
            </Text>
          </View>
          <View style={mobile ? styles.mobButton : styles.webButton}>
            <SubmitButton value='Book Now' />
          </View>
        </View>

        {/* GROOMING */}
        <View style={mobile ? styles.mobCard : styles.webCard}>
          <View style={mobile ? styles.mobServices : styles.webServices}>
          <Text style={mobile ? styles.mobLabel : styles.webLabel}>
            Grooming
          </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Basic Bath & Brush: {'$'}23
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              Includes a basic grooming package with a bath, brush, and nail trim.
            </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Standard Grooming: {'$'}50
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              Includes a full grooming package with bath, brush, nail trim, ear cleaning, and optional add-ons such as teeth brushing or de-shedding treatments.
            </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Premium Grooming: {'$'}75
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              Includes a premium grooming expeirence with specialized shampoos and conditioners, breed-specific styling, and extra pamperings such as paw massages or aromatherapy treatments.
            </Text>
          </View>
          <View style={styles.imgWrapper}>
            <Image
              source={require('../../assets/images/service/dog-grooming.jpg')}
              style={mobile ? styles.mobImage : styles.webImage}
            />
          </View>
          <View style={mobile ? styles.mobButton : styles.webButton}>
            <SubmitButton value='Book Now' />
          </View>
        </View>

        {/* TRAINING */}
        <View style={mobile ? styles.mobCard : styles.webCard}>
          <View style={styles.imgWrapper}>
            <Image
              source={require('../../assets/images/service/dog-training.jpg')}
              style={mobile ? styles.mobImage : styles.webImage}
            />
          </View>
          <View style={mobile ? styles.mobServices : styles.webServices}>
            <Text style={mobile ? styles.mobLabel : styles.webLabel}>
              Training
            </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Basic Obedience Class: {'$'}30 per session
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              Includes a basic obedience training with group sessions or beginner-level classes.
            </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Personalized Training: {'$'}50 per session
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              Includes advanced training programs with one-on-one attention, behavior modification plans, and specialized training techniques such as agility or therapy dog training.
            </Text>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              Advanced Training: {'$'}100 per session
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              Includes advanced training programs with one-on-one attention, behavior modification plans, and specialized training techniques such as agility or therapy dog training.
            </Text>
          </View>
          <View style={mobile ? styles.mobButton : styles.webButton}>
            <SubmitButton value='Book Now' />
          </View>
        </View>
      </View>
    </>
  );
};

export default DogServiceCards;