import React from "react";
import { Text, View } from "react-native";
import _ from "lodash";
import { Icon } from "native-base";
import Chart from "../Chart";
import styles from "./styles";
import { colors } from "../../globals/styles";

const Card = (props) => {
    let {color, type, element } = props;
    let { temperature, blood, oximeter } = element;
    const getIconTitle = () =>{
        let icon;
        let text;
        switch(type){
            case 1:
                icon = <Icon type="FontAwesome" style={styles.iconTitle} name="thermometer" />
                text = <Text style={styles.textTitle}>Temperature</Text>
            break;
            case 2:
                icon = <Icon type="Entypo" style={styles.iconTitle} name="heart" />
                text = <Text style={styles.textTitle}>Oximeter</Text>
            break;
            case 3:
                icon = <Icon type="Entypo" style={styles.iconTitle} name="drop" />
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
        let value = (_.isEqual(type,1)) ? element.temperature : (_.isEqual(type,2)) ? element.oximeter[1] : element.blood[0]
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
        let value="";
        value = (_.isEqual(type,1)) ? temperature : (_.isEqual(type,2)) ? oximeter[0] : blood[0]
        return value;
    }

    return (<View style={styles.container}>
        <View style={[styles.card,{backgroundColor: color}]}>
            {(type !== 4) && 
                <>
                {getIconTitle()}
                <Chart data={getChartValues()}/>
                <View style={styles.info}>
                    <Text style={styles.infoTextBig}>{getFirstValue()}{(_.isEqual(type,3)) && <Text style={{color:colors.white}}>/<Text style={{color:"red"}}>{blood[1]}</Text></Text>}<Text style={{fontSize: 12}}>{(_.isEqual(type,1)) ? "°F" : (_.isEqual(type,2)) ? "%" : "mmHG"}</Text></Text>
                    {(_.isEqual(type,2)) && <Text style={styles.infoTextBig}> {oximeter[1]}<Text style={{fontSize: 12}}>bpm</Text></Text>}
                </View>
                </>
            }
            {(_.isEqual(type,4)) && <View style={styles.titleContainerCentered}><Icon type="FontAwesome" style={styles.iconTitleInvert} name="smile-o"/><Text style={styles.textTitleInvert}>face-recognition</Text></View>}
        </View>
    </View>
    );    
}

export default Card;