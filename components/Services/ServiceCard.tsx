// import { Platform, View, Text, Image } from 'react-native';
// import styles from './style';
// import SubmitButton from '../Buttons/SubmitButton';

// export interface Service {
//   type: string;
//   title: string;
//   price: number;
//   description: string;
// }

// interface ServiceCardProps {
//   services: Service[];
//   title: string;
// }

// const ServiceCard = ({ title, services }: ServiceCardProps) => {
//   const mobile = Platform.OS !== 'web';

//   // Filter services by type
//   const boardingService = services.find((service) => service.type === 'boarding');
//   const daycareService = services.find((service) => service.type === 'daycare');
//   const groomingService = services.find((service) => service.type === 'grooming');
//   const trainingService = services.find((service) => service.type === 'training');

//   return (
//     <View style={mobile ? styles.mobServicesForPetWrapper : styles.webServicesForPetWrapper}>
//       <View style={mobile ? styles.mobCard : styles.webCard}>
//         {services.map((service, i) => (
//           <>
//             <View key={i} style={mobile ? styles.mobServices : styles.webServices}>
//               {service.type === 'boarding' && (
//                 <Text style={mobile ? styles.mobLabel : styles.webLabel}>
//                   Overnight Boarding
//                 </Text>
//               )}
//               {service.type === 'daycare' && (
//                 <Text style={mobile ? styles.mobLabel : styles.webLabel}>
//                   Daycare
//                 </Text>
//               )}
//               {service.type === 'grooming' && (
//                 <Text style={mobile ? styles.mobLabel : styles.webLabel}>
//                   Grooming
//                 </Text>
//               )}
//               {service.type === 'training' && (
//                 <Text style={mobile ? styles.mobLabel : styles.webLabel}>
//                   Training
//                 </Text>
//               )}
//               <Text style={mobile ? styles.mobH3 : styles.webH3}>
//                 {service.title}: {'$'}{service.price}{' '}
//                 {service.type === 'boarding' ? 'per night' : ''}
//                 {service.type === 'daycare' ? 'per day' : ''}
//                 {service.type === 'training' ? 'per session' : ''}
//               </Text>
//               <Text style={mobile ? styles.mobDescription : styles.webDescription}>
//                 {service.description}
//               </Text>
//             </View>
//           </>
//         ))}
//       </View>

//         <View>
//           {title === 'Dog' && boardingService && (
//             <Image
//               source={require('../../assets/images/service/dog-boarding.jpg')}
//               style={mobile ? styles.mobImage : styles.webImage}
//             />
//           )}
//           {title === 'Dog' && daycareService && (
//             <Image
//               source={require('../../assets/images/service/dog-daycare.jpg')}
//               style={mobile ? styles.mobImage : styles.webImage}
//             />
//           )}
//           {title === 'Dog' && groomingService && (
//             <Image
//               source={require('../../assets/images/service/dog-grooming.jpg')}
//               style={mobile ? styles.mobImage : styles.webImage}
//             />
//           )}
//           {title === 'Dog' && trainingService && (
//             <Image
//               source={require('../../assets/images/service/dog-training.jpg')}
//               style={mobile ? styles.mobImage : styles.webImage}
//             />
//           )}
//           {title === 'Cat' && boardingService && (
//             <Image
//               source={require('../../assets/images/service/cat-boarding.jpg')}
//               style={mobile ? styles.mobImage : styles.webImage}
//             />
//           )}
//           {title === 'Cat' && daycareService && (
//             <Image
//               source={require('../../assets/images/service/cat-daycare.jpg')}
//               style={mobile ? styles.mobImage : styles.webImage}
//             />
//           )}
//           {title === 'Cat' && groomingService && (
//             <Image
//               source={require('../../assets/images/service/cat-grooming.jpg')}
//               style={mobile ? styles.mobImage : styles.webImage}
//             />
//           )}
//         </View>

//         <View style={mobile ? styles.mobButton : styles.webButton}>
//           <SubmitButton value='Book Now' />
//         </View>

//     </View>
//   );
// };

// export default ServiceCard;


import { Platform, View, Text, Image } from 'react-native';
import styles from './style';
import SubmitButton from '../Buttons/SubmitButton';

interface ServiceCardProps {
  services: {
    type: string;
    title: string;
    price: number;
    description: string;
  }[]
};

const ServiceCard = ({ services }: ServiceCardProps) => {
  const mobile = Platform.OS !== 'web';
// Filter services by type
  const boardingService = services.find((service) => service.type === 'boarding');
  const daycareService = services.find((service) => service.type === 'daycare');
  const groomingService = services.find((service) => service.type === 'grooming');
  const trainingService = services.find((service) => service.type === 'training');


  return (
    <>
    {/* <View style={mobile ? styles.mobServicesForPetWrapper : styles.webServicesForPetWrapper}> */}
      <View style={mobile ? styles.mobCard : styles.webCard}>
        <Text style={mobile ? styles.mobLabel : styles.webLabel}>
          Overnight Boarding
        </Text>
        {services.map((service, i) => (
          <View key={i} style={mobile ? styles.mobServices : styles.webServices}>
            <Text style={mobile ? styles.mobH3 : styles.webH3}>
              {service.title}: {'$'}{service.price}{' '}
              {service.type === 'boarding' ? 'per night' : ''}
              {service.type === 'daycare' ? 'per day' : ''}
              {service.type === 'training' ? 'per session' : ''}
            </Text>
            <Text style={mobile ? styles.mobDescription : styles.webDescription}>
              {service.description}
            </Text>
          </View>
        ))}
        {/* <View>
          {title === 'Dog' && boardingService && (
            <Image
              source={require('../../assets/images/service/dog-boarding.jpg')}
              style={mobile ? styles.mobImage : styles.webImage}
            />
          )}
          {title === 'Dog' && daycareService && (
            <Image
              source={require('../../assets/images/service/dog-daycare.jpg')}
              style={mobile ? styles.mobImage : styles.webImage}
            />
          )}
          {title === 'Dog' && groomingService && (
            <Image
              source={require('../../assets/images/service/dog-grooming.jpg')}
              style={mobile ? styles.mobImage : styles.webImage}
            />
          )}
          {title === 'Dog' && trainingService && (
            <Image
              source={require('../../assets/images/service/dog-training.jpg')}
              style={mobile ? styles.mobImage : styles.webImage}
            />
          )}
          {title === 'Cat' && boardingService && (
            <Image
              source={require('../../assets/images/service/cat-boarding.jpg')}
              style={mobile ? styles.mobImage : styles.webImage}
            />
          )}
          {title === 'Cat' && daycareService && (
            <Image
              source={require('../../assets/images/service/cat-daycare.jpg')}
              style={mobile ? styles.mobImage : styles.webImage}
            />
          )}
          {title === 'Cat' && groomingService && (
            <Image
              source={require('../../assets/images/service/cat-grooming.jpg')}
              style={mobile ? styles.mobImage : styles.webImage}
            />
          )}
        </View> */}
        <View style={mobile ? styles.mobButton : styles.webButton}>
          <SubmitButton value='Book Now' />
        </View>
      </View>

<View style={mobile ? styles.mobCard : styles.webCard}>
<Text style={mobile ? styles.mobLabel : styles.webLabel}>
  Overnight Boarding
</Text>
{services.map((service, i) => (
  <View key={i} style={mobile ? styles.mobServices : styles.webServices}>
    <Text style={mobile ? styles.mobH3 : styles.webH3}>
      {service.title}: {'$'}{service.price}{' '}
      {service.type === 'boarding' ? 'per night' : ''}
      {service.type === 'daycare' ? 'per day' : ''}
      {service.type === 'training' ? 'per session' : ''}
    </Text>
    <Text style={mobile ? styles.mobDescription : styles.webDescription}>
      {service.description}
    </Text>
  </View>
))}
    </View>
    {/* </View> */}
    </>
  );
};

export default ServiceCard;