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
    let icon;

    // not necessary if I had a single font icons
    // just for this case doing this:
    const getIcon = () =>{
        switch(type){
            case 1:
                icon = <Icon style={styles.iconTitle} name='thermometer'/>
            break;
            case 2:
                icon = <Icon2 style={styles.iconTitle} name='lungs'/>
            break;
            case 3:
                icon = <Icon3 style={styles.iconTitle} name='blood-drop'/>
            break;
        }
        return (icon)
    }
    return (<View style={styles.container}>
        <View style={[styles.card,{backgroundColor: color}]}>
            {(type !== 4) && 
                <>
                <View style={styles.titleContainer}>
                    {getIcon()}
                    <Text style={styles.textTitle}>{element.category}</Text>
                </View>
                <Chart />
                <View style={styles.info}>
                    <Text style={styles.infoTextBig}>91.6{(type===3) && <Text style={{color:colors.white}}>/ <Text style={{color:'red'}}>70</Text></Text>}<Text style={{fontSize: 12}}>{(type === 1) ? '°F' : (type === 2) ? '%' : 'mmHG'}</Text></Text>
                    {(type === 2) && <Text style={styles.infoTextBig}> 78.6<Text style={{fontSize: 12}}>bpm</Text></Text>}
                </View>
                </>
            }
            {(type === 4) && <View style={styles.titleContainerCentered}><Icon4 style={styles.iconTitleInvert} name='face-recognition'/><Text style={styles.textTitleInvert}>face-recognition</Text></View>}
        </View>
    </View>
    );    
}

export default Card;