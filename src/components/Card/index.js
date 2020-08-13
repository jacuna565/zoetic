import React from 'react';
import { Text, View } from 'react-native';
import { Grid, Row, Col } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Fontisto';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Chart from '../Chart';
import styles from './styles';
import { colors } from '../../globals/styles';

const Card = (props) => {
    let {color, type, element } = props;
    let { temperature, blood, oximeter } = element;

    // not necessary if I had a single font icons
    // just for this case doing this:
    const getIconTitle = () =>{
        let icon;
        let text;
        switch(type){
            case 1:
                icon = <Icon style={styles.iconTitle} name='thermometer'/>
                text = <Text style={styles.textTitle}>Temperature</Text>
            break;
            case 2:
                icon = <Icon2 style={styles.iconTitle} name='lungs'/>
                text = <Text style={styles.textTitle}>Oximeter</Text>
            break;
            case 3:
                icon = <Icon3 style={styles.iconTitle} name='blood-drop'/>
                text = <Text style={styles.textTitle}>Blood</Text>
            break;
        }
        return (<View style={styles.titleContainer}>
            {icon}
            {text}
        </View>)
    }

    const getChartValues = () =>{
        let range = [];
        let value = (type === 1) ? element.temperature : (type === 2) ? element.oximeter[1] : element.blood[0]
        let aux;
        for(let i=0; i<=type; i++){
            range.push(parseFloat(value))
            range.push(parseFloat(value) + 0.5)
            range.push(parseFloat(value) + 2.5)
            range.push(parseFloat(value) - 0.5)
            range.push(parseFloat(value) - 2.5)
        }
        return range;
    }

    const getFirstValue = () =>{
        let value='';
        value = (type === 1) ? temperature : (type === 2) ? oximeter[0] : blood[0]
        return value;
    }

    return (<View style={styles.container}>
        <View style={[styles.card,{backgroundColor: color}]}>
            {(type !== 4) && 
                <>
                {getIconTitle()}
                <Chart data={getChartValues()}/>
                <View style={styles.info}>
                    <Text style={styles.infoTextBig}>{getFirstValue()}{(type===3) && <Text style={{color:colors.white}}>/<Text style={{color:'red'}}>{blood[1]}</Text></Text>}<Text style={{fontSize: 12}}>{(type === 1) ? '°F' : (type === 2) ? '%' : 'mmHG'}</Text></Text>
                    {(type === 2) && <Text style={styles.infoTextBig}> {oximeter[1]}<Text style={{fontSize: 12}}>bpm</Text></Text>}
                </View>
                </>
            }
            {(type === 4) && <View style={styles.titleContainerCentered}><Icon4 style={styles.iconTitleInvert} name='face-recognition'/><Text style={styles.textTitleInvert}>face-recognition</Text></View>}
        </View>
    </View>
    );    
}

export default Card;