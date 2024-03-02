import { View, Text } from 'react-native';

type BookBtnDarkProps = {
  value: string;
}

const BookBtnDark = ({ value }: BookBtnDarkProps) => {
  return (
    <View>
      <Text>{value}</Text>
    </View>
  )
}
export default BookBtnDark
