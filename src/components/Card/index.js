import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Fontisto';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const Calendar = (props) => {
    let {color, type, element } = props;
    let icon;
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
                <View style={styles.titleContainer}>
                    {getIcon()}
                        <Text style={styles.textTitle}>{element.category}</Text>
                </View>
            }
            {(type === 4) && <View style={styles.titleContainerCentered}><Icon4 style={styles.iconTitleInvert} name='face-recognition'/><Text style={styles.textTitleInvert}>face-recognition</Text></View>}
        </View>
    </View>
    );    
}

export default Calendar;