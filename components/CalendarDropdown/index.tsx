import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './style';
import { colors } from '../../utils/constants';
import Divider from '../Divider';
import { FiraSans } from '../../utils/fonts';


const CalendarDropdown = () => {
  // const mobile = Platform.OS !== 'web';
  
  const [openCalendar, setOpenCalendar] = useState<boolean>(false);
  
  // DISPLAY CALENDAR ON PRESS
  const handleOnPress = () => setOpenCalendar(!openCalendar);
  
  return (
    <View>
      <TouchableOpacity onPress={handleOnPress}>
        <View style={styles.calendar}>
          <MaterialCommunityIcons name="calendar-month" size={27} color={colors.grey} style={styles.calendarIcon} />
          <Divider orientation='vertical' />
          <View>
            <Text style={styles.date}>
              01/01/2024{/* TO DO: RENDER DATE BASED ON SELECTION */}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      {openCalendar && (
        <Calendar
          onDayPress={(day) => console.log(day)}
          monthFormat={'MMM yyyy'}
          hideExtraDays={true}
          disableMonthChange={false}
          firstDay={1}
          onPressArrowLeft={subtractMonth => subtractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          style={styles.calendarDropdown}
          theme={{
            backgroundColor: '#F3F0F7',
            calendarBackground: '#F3F0F7',
            selectedDayBackgroundColor: colors.darkPurple,
            selectedDayTextColor: colors.white,
            todayTextColor: colors.lightPurple,
            dayTextColor: colors.black,
            textDisabledColor: colors.grey,
            arrowColor: colors.darkPurple,
            textDayFontFamily: FiraSans,
            textMonthFontFamily: 'Montserrat-SemiBold',
            textDayHeaderFontFamily: FiraSans,
            textDayFontSize: 16,
            textMonthFontSize: 20,
            textDayHeaderFontSize: 16
          }}
        />
      )}
    </View>
  );
};

export default CalendarDropdown;