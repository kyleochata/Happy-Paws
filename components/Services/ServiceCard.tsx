import { Platform, View, Text, Image } from 'react-native';
import styles from './style';
import SubmitButton from '../Buttons/SubmitButton';

interface ServiceCardProps {
  label: string;
  service: string;
  serviceType: {
    name: string;
    price: number;
    description: string;
  }[];
  imageUrl: string;
};

const ServiceCard = ({ label, service, serviceType, imageUrl }: ServiceCardProps) => {
  const mobile = Platform.OS !== 'web';

  return (
    <View style={mobile ? styles.mobServicesForPetWrapper : styles.webServicesForPetWrapper}>
      <View style={mobile ? styles.mobCard : styles.webCard}>
        <View style={mobile ? styles.mobServices : styles.webServices}>
          <Text style={mobile ? styles.mobLabel : styles.webLabel}>{label}</Text>
          {serviceType.map((option, i) => (
            <>
              <Text style={mobile ? styles.mobH3 : styles.webH3}>
                {option.name}: {'$'}{option.price}{' '}
                {service === 'overnightBoarding' && 'per night'}
                {service === 'daycare' && 'per day'}
                {service === 'training' && 'per session'}
              </Text>
              <Text style={mobile ? styles.mobDescription : styles.webDescription}>{
                option.description}
              </Text>
            </>
          ))}
        </View>
        <View>
          <Image
            source={{ uri: imageUrl }}
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

export default ServiceCard;