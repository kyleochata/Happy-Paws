// import { View, Text, TouchableOpacity } from 'react-native'
// import { useState, useCallback } from 'react'
// import { Input } from 'react-native-elements'
// import { AntDesign } from '@expo/vector-icons'
// import { Ionicons } from '@expo/vector-icons' // Add missing import for Ionicons
// import styles from './style'
// import Container from '../Container'
// import { useDispatch } from 'react-redux'
// import { changeSearch } from '../../store/actionCreator'
// import { useSelector } from 'react-redux'
// import { useSearchSelector } from '../../store/selectors'

// const SearchBar = () => {
//   const [inputValue, setInputValue] = useState('')
//   const dispatch = useDispatch()

//   const handleInputChange = (value: string) => {
//     setInputValue(value)
//   }
//   const handleSearchSubmit = async () => {
//     dispatch(changeSearch(inputValue))
//   }

//   return (
//     <View style={styles.sBContainer}>
//       <Container>
//         <View style={styles.sBIC}>
//           <View style={styles.sBInputCon}>
//             <Input
//               placeholder="Explore our services..."
//               leftIcon={
//                 <Ionicons
//                   name="search"
//                   size={24}
//                   color="white"
//                   style={{ margin: 10 }}
//                 />
//               }
//               inputContainerStyle={styles.sBInput}
//               value={inputValue}
//               onChangeText={(value) => {
//                 handleInputChange(value)
//               }}
//             />
//           </View>

//           <TouchableOpacity
//             style={styles.sBSearch}
//             onPress={handleSearchSubmit}
//           >
//             <Text style={styles.sBSearchText}>Search</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{
//               justifyContent: 'center',
//               alignItems: 'center',
//               flexDirection: 'row',
//             }}
//             onPress={() => {
//               // Remove console log for "filterbtnpress"
//             }}
//           >
//             <Text style={styles.wSBFText}>Filter</Text>
//             <AntDesign
//               name="down"
//               size={24}
//               color="white"
//               style={{ margin: 10 }}
//             />
//           </TouchableOpacity>
//         </View>
//       </Container>
//     </View>
//   )
// }

// export default SearchBar
import { View, Text, TouchableOpacity, Modal, Platform } from 'react-native'
import { useState } from 'react'
import { Input } from 'react-native-elements'
import { AntDesign, Foundation, Ionicons } from '@expo/vector-icons'
import styles from './style'
import Container from '../Container'
import { useDispatch, useSelector } from 'react-redux'
import { changeSearch } from '../../store/actionCreator'
import { useSearchSelector } from '../../store/selectors'
import FilterModal from './filterModal'

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')
  const [showFModal, setShowFModal] = useState(false)
  const web = Platform.OS === 'web'
  const dispatch = useDispatch()

  const handleInputChange = (value: string) => {
    setInputValue(value)
  }

  const handleSearchSubmit = async (e: any) => {
    e.preventDefault()
    console.log({ inputValue })
    dispatch(changeSearch(inputValue))
    setInputValue('')
  }
  const handleFModal = (e: any) => {
    e.preventDefault()
    setShowFModal(!showFModal)
  }

  return (
    <View style={styles.sBContainer}>
      <Container>
        <View style={styles.sBIC}>
          <View style={web ? styles.sBInputCon : styles.msBInputCon}>
            <Input
              placeholder="Explore our services..."
              leftIcon={
                <Ionicons
                  name="search"
                  size={24}
                  color="white"
                  style={{ margin: 10 }}
                />
              }
              inputContainerStyle={styles.sBInput}
              value={inputValue}
              onChangeText={(value) => {
                handleInputChange(value)
              }}
            />
          </View>

          <TouchableOpacity
            style={styles.sBSearch}
            onPress={handleSearchSubmit}
          >
            <Text style={styles.sBSearchText}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'relative', // Set position to relative
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}
            onPress={handleFModal}
          >
            <Text style={styles.wSBFText}>Filter</Text>
            <AntDesign
              name={showFModal ? 'up' : 'down'}
              size={24}
              color="white"
              style={styles.wOFMArrow}
            />
            <View style={{ position: 'relative' }}>
              {showFModal && (
                <Modal
                  visible={showFModal}
                  animationType="fade"
                  transparent={true}
                  onRequestClose={() => {
                    setShowFModal(!showFModal)
                    console.log({ showFModal })
                  }}
                >
                  <FilterModal />
                </Modal>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </Container>
    </View>
  )
}

export default SearchBar
