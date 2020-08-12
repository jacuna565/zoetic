import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Grid, Row, Col } from 'react-native-easy-grid';
import {colors} from '../../globals/styles';
import CardKit from '../../components/CardKit';
import styles from './styles';

const VitalsKit = () => {
    const [showBtn, setShowBtn] = useState(true);
    const [isDisable, setIsDisable] = useState(true);

    const handleShowButton = (value) =>{
        setShowBtn(value)
        setIsDisable(false)
    }
    return (
        <ScrollView style={styles.container}>
            <CardKit element={{category: 'Body', symbol:'°F' }} showButton={handleShowButton} type={1} message='Waer thermometer view temperature'/>
            <CardKit element={{category: 'Blood', symbol:'mmHg' }} showButton={handleShowButton} type={2} message='Wear blood pressure monitor to view blood press'/>
            <CardKit element={{category: 'Oximeter', symbol:'% bpm' }} showButton={handleShowButton} type={3} message='Wear oximeter to view SpO2 and bpm'/>
            {(showBtn) && <Button
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