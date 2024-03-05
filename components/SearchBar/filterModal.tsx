import { View, Text, Platform, TouchableOpacity } from 'react-native'
import { Foundation } from '@expo/vector-icons'
import Divider from '../Divider'
import { RadioOption } from '../Buttons/RadioButton/RadioButton'
import RadioButtonGroup from '../Buttons/RadioButton/RadioButtonGroup'
import styles from './style'
import { useState } from 'react'
import {
  usePetSelector,
  useServicesSelector,
  usePricesSelector,
} from '../../store/selectors'
import { useSelector, useDispatch } from 'react-redux'
import {
  changePet,
  changeService,
  changePrice,
} from '../../store/actionCreator'
const FilterModal = () => {
  const dispatch = useDispatch()
  const web = Platform.OS === 'web'
  const petTypeSelected = useSelector(usePetSelector)
  const servicesSelected = useSelector(useServicesSelector)
  const showTraining = petTypeSelected === 'Dog' || petTypeSelected === 'Both'
  const priceSel = useSelector(usePricesSelector)
  const handlePetType = (value: string) => {
    dispatch(changePet(value))
  }
  const handleServiceChange = (value: string) => {
    dispatch(changeService(value))
  }
  const handlePriceSel = (value: string) => {
    dispatch(changePrice(value))
  }

  const petTypeOptions: RadioOption[] = [
    { label: 'Cat', value: 'Cat' },
    { label: 'Dog', value: 'Dog' },
  ]
  const dogServiceOptions: RadioOption[] = [
    { label: 'Boarding', value: 'boarding' },
    { label: 'Daycare', value: 'daycare' },
    { label: 'Grooming', value: 'grooming' },
    { label: 'Training', value: 'training' },
  ]
  const catServiceOptions: RadioOption[] = [
    { label: 'Boarding', value: 'boarding' },
    { label: 'Daycare', value: 'daycare' },
    { label: 'Grooming', value: 'grooming' },
  ]
  return (
    <View style={web ? styles.fMCon : { display: 'none' }}>
      <View style={styles.fMBorderArrow}>
        <Foundation name="arrow-up" size={80} color="white" />
      </View>
      <View style={styles.fMIC}>
        <View style={{ width: '90%' }}>
          <Text style={styles.fMTitle}>Pet:</Text>
          <View style={styles.fMCButtonCon}>
            <TouchableOpacity
              style={
                petTypeSelected === 'Cat'
                  ? styles.fMCButtonActive
                  : styles.fMCButton
              }
              onPress={() => handlePetType('Cat')}
            >
              <Text style={styles.fMCButtonText}>Cat</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                petTypeSelected === 'Dog'
                  ? styles.fMCButtonActive
                  : styles.fMCButton
              }
              onPress={() => handlePetType('Dog')}
            >
              <Text style={styles.fMCButtonText}>Dog</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                petTypeSelected === 'Both'
                  ? styles.fMCButtonActive
                  : styles.fMCButton
              }
              onPress={() => handlePetType('Both')}
            >
              <Text style={styles.fMCButtonText}>Both</Text>
            </TouchableOpacity>
            <Divider orientation="horizontal" />
          </View>
        </View>
        <View style={{ width: '90%' }}>
          <Text style={styles.fMTitle}>Services:</Text>
          <View style={styles.fMCButtonCon}>
            <TouchableOpacity
              style={
                servicesSelected.includes('boarding')
                  ? styles.fMCBtnLongActive
                  : styles.fMCBtnLong
              }
              onPress={() => handleServiceChange('boarding')}
            >
              <Text
                style={
                  servicesSelected.includes('boarding')
                    ? styles.fMCBtnTextLongActive
                    : styles.fMCBtnTextLong
                }
              >
                Overnight Boarding
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                servicesSelected.includes('daycare')
                  ? styles.fMCBtnLongActive
                  : styles.fMCBtnLong
              }
              onPress={() => handleServiceChange('daycare')}
            >
              <Text
                style={
                  servicesSelected.includes('daycare')
                    ? styles.fMCBtnTextLongActive
                    : styles.fMCBtnTextLong
                }
              >
                Daycare
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                servicesSelected.includes('grooming')
                  ? styles.fMCBtnLongActive
                  : styles.fMCBtnLong
              }
              onPress={() => handleServiceChange('grooming')}
            >
              <Text
                style={
                  servicesSelected.includes('grooming')
                    ? styles.fMCBtnTextLongActive
                    : styles.fMCBtnTextLong
                }
              >
                Grooming
              </Text>
            </TouchableOpacity>
            {showTraining && (
              <TouchableOpacity
                style={
                  servicesSelected.includes('training')
                    ? styles.fMCBtnLongActive
                    : styles.fMCBtnLong
                }
                onPress={() => handleServiceChange('training')}
              >
                <Text
                  style={
                    servicesSelected.includes('training')
                      ? styles.fMCBtnTextLongActive
                      : styles.fMCBtnTextLong
                  }
                >
                  Training
                </Text>
              </TouchableOpacity>
            )}
            <Divider orientation="horizontal" />
          </View>
        </View>
        <View style={{ width: '90%' }}>
          <Text style={styles.fMTitle}>Prices:</Text>
          <View style={styles.fMCButtonCon}>
            <TouchableOpacity
              style={
                priceSel.includes('20-40')
                  ? styles.fMCButtonActive
                  : styles.fMCButton
              }
              onPress={() => handlePriceSel('20-40')}
            >
              <Text style={styles.fMCButtonText}>$20 - 40</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                priceSel.includes('40-60')
                  ? styles.fMCButtonActive
                  : styles.fMCButton
              }
              onPress={() => handlePriceSel('40-60')}
            >
              <Text style={styles.fMCButtonText}>$40 - 60</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                priceSel.includes('70')
                  ? styles.fMCButtonActive
                  : styles.fMCButton
              }
              onPress={() => handlePriceSel('70')}
            >
              <Text style={styles.fMCButtonText}>$70 +</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                priceSel.includes('All')
                  ? styles.fMCButtonActive
                  : styles.fMCButton
              }
              onPress={() => handlePriceSel('All')}
            >
              <Text style={styles.fMCButtonText}>All</Text>
            </TouchableOpacity>
            <Divider orientation="horizontal" />
          </View>
        </View>
      </View>
    </View>
  )
}

export default FilterModal
