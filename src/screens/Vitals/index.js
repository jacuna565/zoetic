import React from 'react';
import { Text, StatusBar, View } from 'react-native';
import { Grid, Row, Col } from "react-native-easy-grid";
import moment from "moment";
import { colors } from '../../globals/styles';
import styles from './styles';

const Home = () => {
    return (
        <>
            <StatusBar backgroundColor={colors.primaryColor} />
            <View style={styles.header}>
                <Text style={styles.headerDate}>{moment(new Date()).format('ll')}</Text>
                <Text style={styles.headerTitle}>How are you feeling today?</Text>
            </View>
            <Grid>
                <Row>
                    <Col>
                        <Text>Vitals screen!!!</Text> 
                    </Col>
                </Row>
            </Grid>
        </>
    );    
}

export default Home;