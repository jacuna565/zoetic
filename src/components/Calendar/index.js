import React from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import {colors} from '../../globals/styles';
import styles from './styles';

const daySelectionAnimation = {
  type: 'background',
  duration: 200,
  highlightColor: colors.primaryColor,
};

const Calendar = ({onDateSelected, selectedDate}) => {
  const handleDateSelected = (date) => {
    onDateSelected(date);
  };
  return (
    <CalendarStrip
      scrollable
      daySelectionAnimation={daySelectionAnimation}
      style={styles.container}
      calendarColor={colors.whiteDarker}
      dateNumberStyle={{color: colors.secondaryColor}}
      dateNameStyle={{color: colors.secondaryColor}}
      highlightDateNumberStyle={{color: colors.white}}
      highlightDateNameStyle={{color: colors.white}}
      leftSelector={[]}
      rightSelector={[]}
      showMonth={true}
      calendarHeaderStyle={{color: colors.primaryColor}}
      startingDate={moment().subtract(3, 'days')}
      selectedDate={moment(selectedDate).toDate()}
      maxDate={new Date()}
      onDateSelected={(ev) =>
        handleDateSelected(moment(ev).format('MM/DD/YYYY'))
      }
    />
  );
};

export default Calendar;
