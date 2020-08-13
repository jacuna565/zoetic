import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { Text, StatusBar, View, ScrollView, Dimensions } from 'react-native';
import { Grid, Row, Col } from "react-native-easy-grid";
import moment from "moment";
import { colors } from '../../globals/styles';
import styles from './styles';
import Calendar from '../../components/Calendar';
import Card from '../../components/Card';
import LinearGradientButton from '../../components/LinearGradientButton';

import allActions from '../../actions';

const Vitals = () => {
    const [selectedDay, setSelectedDay] = useState({});

    const measurementReducer = useSelector(state => state.measurementReducer);
    useEffect(()=>{
        getInfoSelectedDay()
    },[selectedDay])

    const getInfoSelectedDay = () =>{
        let measurements = measurementReducer.measurements;
        measurements.map((item) => {
            if(moment(new Date()).format('MM/DD/YYYY') === item.registrationDate){
                setSelectedDay(item)
            }
        })
    }

    return (
        <>
        <StatusBar backgroundColor={colors.primaryColor} />
        <ScrollView style={styles.containerGrid}>
            <View style={styles.header}>
                <Text style={styles.headerDate}>{moment(new Date()).format('ll')}</Text>
                <Text style={styles.headerTitle}>How are you feeling today?</Text>
            </View>
            <View style={styles.container}>
                <Calendar/>
            </View>
            <Grid style={{height:500, padding: 7}}>
                <Row>
                    <Col>
                        <Row size={2}>
                            <Card color={colors.pinkColor} type={1} element={selectedDay}/>
                        </Row>
                        <Row size={3}>
                            <Card color={colors.primaryColor} type={2} element={selectedDay}/>
                        </Row>
                    </Col>
                    <Col>
                        <Row size={2}>
                            <Card color={colors.turquoiseColor} type={3} element={selectedDay}/>
                        </Row>
                        <Row size={1}>
                            <Card color={colors.whiteDarker} type={4} element={selectedDay}/>
                        </Row>
                    </Col>
                </Row>
            </Grid> 
        </ScrollView>
        <LinearGradientButton route='Measure' text='Measure now'/>
        </>
    );    
}

export default Vitals;