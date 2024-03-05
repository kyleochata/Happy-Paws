import { Platform, View, Text } from 'react-native';
import styles from './style';
import Container from '../Container';
import ServiceCard from './ServiceCard';
import DogServiceCards from './DogServiceCards';
import CatServiceCards from './CatServiceCards';
import { sServiceCardData } from '../../utils/data';

const Services = () => {
  const mobile = Platform.OS !== 'web';
  // const dogServices = sServiceCardData.find((pet) => pet.title === 'Dog')?.services || [];
  // const catServices = sServiceCardData.find((pet) => pet.title === 'Cat')?.services || [];

  // const dogBoardingService = dogServices.find((service) => service.type === 'boarding') || {
  //   type: '',
  //   title: '',
  //   price: 0,
  //   description: '',
  // };
  // const dogDaycareService = dogServices.find((service) => service.type === 'daycare') || {
  //   type: '',
  //   title: '',
  //   price: 0,
  //   description: '',
  // };
  // const dogGroomingService = dogServices.find((service) => service.type === 'grooming') || {
  //   type: '',
  //   title: '',
  //   price: 0,
  //   description: '',
  // };
  // const dogTrainingService = dogServices.find((service) => service.type === 'training') || {
  //   type: '',
  //   title: '',
  //   price: 0,
  //   description: '',
  // };

  // const catBoardingService = catServices.find((service) => service.type === 'boarding') || {
  //   type: '',
  //   title: '',
  //   price: 0,
  //   description: '',
  // };
  // const catDaycareService = catServices.find((service) => service.type === 'daycare') || {
  //   type: '',
  //   title: '',
  //   price: 0,
  //   description: '',
  // };
  // const catGroomingService = catServices.find((service) => service.type === 'grooming') || {
  //   type: '',
  //   title: '',
  //   price: 0,
  //   description: '',
  // };

  return (
    // <View style={mobile ? styles.mobWrapper : styles.webWrapper}>
    //   <Container>
    //     <View>
    //       {/* DOG SECTION */}
    //       <Text style={mobile ? styles.mobH1 : styles.webH1}>Services for Dogs</Text>
    //         {dogServices.map((pet) => {
    //           return (
    //             <>
    //               <ServiceCard
    //                 services={dogServices}
    //               />
    //             </>
    //           );
    //         })}

    //       {/* CAT SECTION */}
    //       <Text style={mobile ? styles.mobH1 : styles.webH1}>Services for Cats</Text>
    //         {catServices.map((pet) => {
    //           return (
    //             <>
    //               <ServiceCard
    //                 services={catServices}
    //               />
    //             </>
    //           );
    //         })}
    //     </View>
    //   </Container>
    // </View>

    <View style={mobile ? styles.mobWrapper : styles.webWrapper}>
    <Container>
        {/* DOG SECTION */}
      <View>
        <Text style={mobile ? styles.mobH1 : styles.webH1}>Services for Dogs</Text>
        
        <DogServiceCards
  // boardingService={[dogBoardingService]}
  // daycareService={[dogDaycareService]}
  // groomingService={[dogGroomingService]}
  // trainingService={[dogTrainingService]}
        />

        {/* CAT SECTION */}
        <Text style={mobile ? styles.mobH1 : styles.webH1}>Services for Cats</Text>
        <CatServiceCards
          // boardingService={[catBoardingService]}
          // daycareService={[catDaycareService]}
          // groomingService={[catGroomingService]}
        />
      </View>
    </Container>
  </View>
  );
};

export default Services;