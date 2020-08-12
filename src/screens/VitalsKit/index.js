import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
import {colors} from '../../globals/styles';
import CardKit from '../../components/CardKit';
import styles from './styles';

const VitalsKit = () => {
    return (
        <ScrollView style={styles.container}>
            <CardKit element={{category: 'Body', symbol:'°F' }} type={1} message='Waer thermometer view temperature'/>
            <CardKit element={{category: 'Blood', symbol:'mmHg' }} type={2} message='Wear blood pressure monitor to view blood press'/>
            <CardKit element={{category: 'Oximeter', symbol:'% bpm' }} type={3} message='Wear oximeter to view SpO2 and bpm'/>
        </ScrollView>
    );    
}

export default VitalsKit;