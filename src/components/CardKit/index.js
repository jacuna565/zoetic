import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import { colors } from '../../globals/styles';
import Loader from '../Loader';

const CardKit = (props) => {
    const [hasOverlay, setHasOverlay] = useState(0.8);
    const [value, setValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);
    const [loader, setLoader] = useState(false);
    const {type, element, message, showButton } = props;
    let icon;

    // not necessary if I had a single font icons
    // just for this case doing this:
    const getIcon = () =>{
        switch(type){
            case 1:
                icon = <Icon style={styles.icon} name='thermometer'/>
            break;
            case 2:
                icon = <Icon2 style={styles.icon} name='blood-drop'/>
            break;
            case 3:
                icon = <Icon3 style={styles.icon} name='lungs'/>
            break;
        }
        return (icon)
    }

    const calculate = () =>{
        let calc = 0;
        let secondCalc = 0;
        let precision= 100;
        console.log(type)
        if(type == 1){
            calc = Math.floor(Math.random() * (99 * precision - 97 * precision) + 97 * precision) / (1*precision);
        }else if(type == 2){
            calc = Math.floor(Math.random() * (120 - 90) + 90);
            secondCalc = Math.floor(Math.random() * (80 - 60) + 60);
        }else{
            calc = Math.floor(Math.random() * (100 - 95) + 95);
            secondCalc = Math.floor(Math.random() * (100 - 60) + 60);
        }
        setHasOverlay(0);
        setLoader(true)
        showButton(false)
        setTimeout(() => {
            setLoader(false)
            showButton(true)
            setValue(calc);
            (type != 1) && setSecondValue(secondCalc)
        }, 1500);

        

    }

    const getSecondValue = () =>{
        let style = (type == 2) ? styles.secondValue : styles.value;
        let alternative = (type == 2) ? '/' : '';
        return (<Text style={styles.value}>{alternative}<Text style={style}>{secondValue}</Text></Text>)
    }

    return (<TouchableOpacity style={styles.container} onPress={() => calculate()}>
        <View style={styles.card}>
            <Loader show={loader}/>
            <View style={[styles.cardItemContainer,{width:'35%'}]}>
                <View style={styles.cardItem}>
                    {getIcon()}
                    <Text style={styles.category}>{element.category}</Text>
                </View>
            </View>
            {(type != 3)
            ? <View style={[styles.cardItemContainer,{width:'65%', alignItems:'flex-end'}]}>
                <View style={styles.cardItem}>
                    <Text style={styles.value}>{value}{(secondValue != 0) && getSecondValue()}</Text>
                    <Text style={styles.symbol}>{element.symbol}</Text>
                </View>
            </View>
            :<>
            <View style={[styles.cardItemContainer,{width:'32%', alignItems:'flex-end'}]}>
                <View style={styles.cardItem}>
                    <Text style={styles.value}>{value}</Text>
                    <Text style={styles.symbol}>{(element.symbol.split(' ')[0])}</Text>
                </View>
            </View>
            <View style={[styles.cardItemContainer,{width:'32%', alignItems:'flex-end'}]}>
                <View style={styles.cardItem}>
                    <Text style={styles.value}>{getSecondValue()}</Text>
                    <Text style={styles.symbol}>{(element.symbol.split(' ')[1])}</Text>
                </View>
            </View>
            </>
            }
            <View style={[styles.overlap, {opacity: hasOverlay}]}>
                <Text style={styles.overlapText}>{message}</Text>
            </View> 
        </View>
    </TouchableOpacity>
    );    
}

export default CardKit;