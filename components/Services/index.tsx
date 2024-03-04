import { Platform, View, Text } from 'react-native';
import styles from './style';
import Container from '../Container';
import ServiceCard from './ServiceCard';
import { petServicesData } from '../../utils/data';

const Services = () => {
  const mobile = Platform.OS !== 'web';
  const dogServices = petServicesData.filter((pet) => pet.petType === 'dog');
  const catServices = petServicesData.filter((pet) => pet.petType === 'cat');

  return (
    <View style={mobile ? styles.mobWrapper : styles.webWrapper}>
      <Container>
        <View>
          {/* ^ MAP THIS VIEW !!! */}
          {/* DOGGOS SECTIONS */}
          <Text style={mobile ? styles.mobH1 : styles.webH1}>Services for Dogs</Text>
            {dogServices.map((pet) => {
              return (
                <>
                  <ServiceCard
                    key={pet.service}
                    {...pet}
                  />
                </>
              );
            })}

          {/* CAT SECTION */}
          <Text style={mobile ? styles.mobH1 : styles.webH1}>Services for Cats</Text>
            {catServices.map((pet) => {
              return (
                <>
                  <ServiceCard
                    key={pet.service}
                    {...pet}
                  />
                </>
              );
            })}
        </View>
      </Container>
    </View>
  );
};

export default Services;