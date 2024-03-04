import { View, Text, Platform } from 'react-native'
import data from './data'
import SSACard from './SSACard'
import styles from './style'
const SpecialAcc = () => {
  const web = Platform.OS === 'web'
  return (
    <View style={styles.HSS}>
      <Text style={web ? styles.wHSSTitle : styles.mHSSTitle}>
        Special Needs Accomodations
      </Text>
      {web ? (
        <Text style={styles.wSSAText}>
          At Happy Paws Pet Hotel, we understand that some pets may have special
          needs or require additional accommodations beyond our standard
          services. Our caring staff is dedicated to providing personalized care
          and attention to meet the unique needs of every guest.{' '}
          <Text style={styles.wSSATBold}>
            {' '}
            Here are some special accomodations we offer:{' '}
          </Text>
        </Text>
      ) : (
        <>
          <Text style={styles.mSSAText}>
            At Happy Paws Pet Hotel, we understand that some pets may have
            special needs or require additional accommodations beyond our
            standard services. Our caring staff is dedicated to providing
            personalized care and attention to meet the unique needs of every
            guest.
          </Text>
          <Text style={styles.mSSAText}>
            Here are some special accomodations we offer:
          </Text>
        </>
      )}

      <View style={styles.HSCCon}>
        {data.map((item) => (
          <SSACard key={item.title} {...item} />
        ))}
      </View>
      <Text style={web ? styles.wSSAText : styles.mSSAText}>
        If your pet requires additional accommodations that are not listed here,
        please don't hesitate to reach out to us. Our dedicated team is here to
        ensure that every pet's specific needs are emt, and we're happy to work
        with you to develop a tailored care plan that suits your pet's
        individual needs.
      </Text>
    </View>
  )
}
export default SpecialAcc
