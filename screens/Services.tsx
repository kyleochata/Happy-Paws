import { View, Text, Button, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'

const ServicesScreen = () => {
  const navigation = useNavigation<any>()

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
      }}
    />
  )
}

export default ServicesScreen;