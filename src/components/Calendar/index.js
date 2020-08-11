import React from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import moment from "moment";
import { colors } from '../../globals/styles';
import styles from './styles';

const daySelectionAnimation = {type: 'background', duration: 200, highlightColor: colors.primaryColor}

const Calendar = () => {
    return (<CalendarStrip
            scrollable
            daySelectionAnimation={daySelectionAnimation}
            style={styles.container}
            calendarColor={colors.whiteDarker}
            dateNumberStyle={{color:colors.secondaryColor}}
            dateNameStyle={{color: colors.secondaryColor}}
            highlightDateNumberStyle={{color: colors.white}}
            highlightDateNameStyle={{color: colors.white}}
            leftSelector={[]}
            rightSelector={[]}
            showMonth={false}
            startingDate={moment().subtract(3, 'days')}
            selectedDate={moment(new Date())}
            onDateSelected={(ev) => console.log(moment(ev).format('MM/DD/YYYY'))}
        />
    );    
}

export default Calendar;