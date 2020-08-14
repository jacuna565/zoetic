
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import _ from 'lodash';
import {useNavigation} from '@react-navigation/native';
import moment from "moment";
import Toast from 'react-native-simple-toast';
import { Button } from 'react-native-elements';
import {colors} from '../../globals/styles';
import CardKit from '../../components/CardKit';
import getLogoutClient from '../../func/loggedOutClient';
import styles from './styles';

import allActions from '../../actions';

const VitalsKit = () => {
    const [showBtn, setShowBtn] = useState(true);
    const [isDisable, setIsDisable] = useState(true);
    const [temperature, setTemperature] = useState(0);
    const [blood, setBlood] = useState(0);
    const [oximeter, setOximeter] = useState(0);

    const measurementReducer = useSelector(state => state.measurementReducer);
    const dispatch = useDispatch();

    const navigation = useNavigation();

    const handleShowButton = (value) =>{
        setShowBtn(value)
        setIsDisable(false)
    }

    const handleSubmit = () =>{
        let data = { 
            temperature: temperature, 
            blood: blood, 
            oximeter: oximeter,
            registrationDate: moment(new Date()).format('MM/DD/YYYY') 
        }
            
        const stranger = getLogoutClient();
        
        stranger
        .post('/measurements', data)
        .then(response => {
            dispatch(allActions.measurementActions.loadMeasurements());
            Toast.showWithGravity('Measurements uploaded correctly', Toast.LONG, Toast.TOP);
            setTimeout(() => {
                navigation.navigate('Vitals', {reload: true});
            }, 1000);
        })
        .catch(function (error) {
            Toast.showWithGravity('Something wrong happend', Toast.LONG, Toast.TOP);
        });
    }

    const processValues = (values, type) =>{
        (_.isEqual(type,1))
        ? setTemperature(values[0])
        : (_.isEqual(type,2))
            ? setBlood(values)
            : setOximeter(values)
    }

    return (
        <ScrollView style={styles.container}>
            <CardKit symbol='°F' showButton={handleShowButton} type={1} message='Waer thermometer view temperature' processValues={processValues}/>
            <CardKit symbol='mmHg' showButton={handleShowButton} type={2} message='Wear blood pressure monitor to view blood press' processValues={processValues}/>
            <CardKit symbol='% bpm' showButton={handleShowButton} type={3} message='Wear oximeter to view SpO2 and bpm' processValues={processValues}/>
            {(showBtn) && <Button
                onPress={() => handleSubmit()}
                title='Complete'
                titleStyle={{
                    textTransform: 'uppercase'
                }}
                disabled={isDisable}
                buttonStyle={{
                    borderRadius: 15,
                    height: 50,
                    backgroundColor: colors.primaryColor,
                    marginTop: 25
                }}
            />}
            
        </ScrollView>
    );    
}

export default VitalsKit;