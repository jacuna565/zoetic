import React from 'react';
import { Text, StatusBar, View, ScrollView, Dimensions } from 'react-native';
import { Grid, Row, Col } from "react-native-easy-grid";
import moment from "moment";
import { colors } from '../../globals/styles';
import styles from './styles';
import Calendar from '../../components/Calendar';
import Card from '../../components/Card';

const Home = () => {
    const screenHeight = Math.round(Dimensions.get('window').height);
    console.log('screenHeight', screenHeight)
    return (
        <>
        <StatusBar backgroundColor={colors.primaryColor} />
        <ScrollView style={styles.containerGrid}>
            <View style={styles.header}>
                <Text style={styles.headerDate}>{moment(new Date()).format('ll')}</Text>
                <Text style={styles.headerTitle}>How are you feeling today?</Text>
            </View>
            <View style={styles.container}>
                <Calendar />
            </View>
            <Grid style={{height:500, padding: 7}}>
                <Row>
                    <Col>
                        <Row size={2}>
                            <Card color={colors.pinkColor} type={1} element={{category: 'Temperature'}}/>
                        </Row>
                        <Row size={3}>
                            <Card color={colors.primaryColor} type={2} element={{category: 'Oximeter'}}/>
                        </Row>
                    </Col>
                    <Col>
                        <Row size={2}>
                            <Card color={colors.turquoiseColor} type={3} element={{category: 'Blood'}}/>
                        </Row>
                        <Row size={1}>
                            <Card color={colors.whiteDarker} type={4} element={{category: ''}}/>
                        </Row>
                    </Col>
                </Row>
            </Grid> 
        </ScrollView>
        </>
    );    
}

export default Home;