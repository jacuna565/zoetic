import React from 'react';
import { Text, StatusBar, View, ScrollView } from 'react-native';
import { Grid, Row, Col } from "react-native-easy-grid";
import moment from "moment";
import { colors } from '../../globals/styles';
import styles from './styles';
import Calendar from '../../components/Calendar';
import Card from '../../components/Card';

const Home = () => {
    return (
        <>
        <StatusBar backgroundColor={colors.primaryColor} />
        <View style={styles.header}>
            <Text style={styles.headerDate}>{moment(new Date()).format('ll')}</Text>
            <Text style={styles.headerTitle}>How are you feeling today?</Text>
        </View>
        <View style={styles.container}>
            <Calendar />
        </View>
        
        <Grid style={styles.containerGrid}>
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
                    <Row size={3}>
                        <Card color={colors.turquoiseColor} type={3} element={{category: 'Blood'}}/>
                    </Row>
                    <Row size={2}>
                        <Card color={colors.whiteDarker} type={4} element={{category: ''}}/>
                    </Row>
                </Col>
            </Row>
        </Grid>
        </>
    );    
}

export default Home;