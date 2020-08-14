import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Text, StatusBar, View, ScrollView} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';
import _ from 'lodash';
import {Icon} from 'native-base';
import moment from 'moment';
import {colors} from '../../globals/styles';
import styles from './styles';
import Calendar from '../../components/Calendar';
import Card from '../../components/Card';
import LinearGradientButton from '../../components/LinearGradientButton';

const DEFAULT_SELECTED = {
  blood: [0, 0],
  oximeter: [0, 0],
  temperature: 0,
};

const Vitals = ({route}) => {
  const [selectedDate, setSelectedDate] = useState(
    moment(new Date()).format('MM/DD/YYYY'),
  );
  const [itemFound, setItemFound] = useState(false);
  const [selectedDay, setSelectedDay] = useState(DEFAULT_SELECTED);

  const measurementReducer = useSelector((state) => state.measurementReducer);

  useEffect(() => {
    getInfoSelectedDay(selectedDate);
  }, [selectedDay]);

  useEffect(() => {
    getInfoSelectedDay(moment(new Date()).format('MM/DD/YYYY'));
  }, [route.params]);

  const handleDateSelected = (date) => {
    setSelectedDate(date);
    getInfoSelectedDay(date);
  };

  const getInfoSelectedDay = (selectDate) => {
    let measurements = measurementReducer.measurements;
    setItemFound(false);
    !_.isEmpty(measurements) &&
      measurements.map((item) => {
        if (_.isEqual(selectDate, item.registrationDate)) {
          setSelectedDay(item);
          setItemFound(true);
        }
      });
  };

  return (
    <>
      <StatusBar
        backgroundColor={colors.primaryColor}
        barStyle="light-content"
      />
      <ScrollView style={styles.containerGrid}>
        <View style={styles.header}>
          <Text style={styles.headerDate}>
            {moment(new Date()).format('ll')}
          </Text>
          <Text style={styles.headerTitle}>How are you feeling today?</Text>
        </View>
        <View style={styles.container}>
          <Calendar
            onDateSelected={handleDateSelected}
            selectedDate={selectedDate}
          />
        </View>
        {itemFound ? (
          <Grid style={styles.gridHeight}>
            <Row>
              <Col>
                <Row size={2}>
                  <Card
                    color={colors.pinkColor}
                    type={1}
                    element={selectedDay}
                  />
                </Row>
                <Row size={3}>
                  <Card
                    color={colors.primaryColor}
                    type={2}
                    element={selectedDay}
                  />
                </Row>
              </Col>
              <Col>
                <Row size={2}>
                  <Card
                    color={colors.turquoiseColor}
                    type={3}
                    element={selectedDay}
                  />
                </Row>
                <Row size={1}>
                  <Card
                    color={colors.whiteDarker}
                    type={4}
                    element={selectedDay}
                  />
                </Row>
              </Col>
            </Row>
          </Grid>
        ) : (
          <View style={styles.notFoundContainer}>
            <Icon
              type="MaterialIcons"
              style={styles.notFoundIcon}
              name="error-outline"
            />
            <Text style={styles.notFoundText}>
              no measurements found for this day
            </Text>
          </View>
        )}
      </ScrollView>
      <LinearGradientButton route="Measure" text="Measure now" />
    </>
  );
};

export default Vitals;
