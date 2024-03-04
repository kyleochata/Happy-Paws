import { View, Text, Button, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'

const ServicesScreen = () => {
  const navigation = useNavigation<any>()
  const data = [{ id: 'header' }, { id: 'special' }]
  const renderItem = ({ item }: any) => {
    switch (item.id) {
      case 'header':
        return <Header />
      case 'special':
        return (
          <Text style={{ backgroundColor: 'pink', width: '100%' }}>
            Special
          </Text>
        )
      default:
        return null
    }
  }
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