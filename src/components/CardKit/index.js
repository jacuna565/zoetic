import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import {Icon} from 'native-base';
import styles from './styles';
import Loader from '../Loader';

const CardKit = (props) => {
  const [hasOverlay, setHasOverlay] = useState(0.8);
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [loader, setLoader] = useState(false);
  const {type, symbol, message, showButton, processValues} = props;

  const getIconTitle = () => {
    let icon;
    let text;
    switch (type) {
      case 1:
        icon = (
          <Icon type="FontAwesome" style={styles.icon} name="thermometer" />
        );
        text = <Text style={styles.category}>Temperature</Text>;
        break;
      case 2:
        icon = <Icon type="Entypo" style={styles.icon} name="drop" />;
        text = <Text style={styles.category}>Blood</Text>;
        break;
      case 3:
        icon = <Icon type="Entypo" style={styles.icon} name="heart" />;
        text = <Text style={styles.category}>Oximeter</Text>;
        break;
    }
    return (
      <View style={styles.cardItem}>
        {icon}
        {text}
      </View>
    );
  };

  const calculate = () => {
    let calc = 0;
    let secondCalc = 0;
    let precision = 100;
    if (_.isEqual(type, 1)) {
      calc =
        Math.floor(
          Math.random() * (99 * precision - 97 * precision) + 97 * precision,
        ) /
        (1 * precision);
    } else if (_.isEqual(type, 2)) {
      calc = Math.floor(Math.random() * (120 - 90) + 90);
      secondCalc = Math.floor(Math.random() * (80 - 60) + 60);
    } else {
      calc = Math.floor(Math.random() * (100 - 95) + 95);
      secondCalc = Math.floor(Math.random() * (100 - 60) + 60);
    }
    setHasOverlay(0);
    setLoader(true);
    showButton(false);
    setTimeout(() => {
      setLoader(false);
      showButton(true);
      setValue(calc);
      !_.isEqual(type, 1) && setSecondValue(secondCalc);
      processValues([calc.toString(), secondCalc.toString()], type);
    }, 1500);
  };

  const getSecondValue = () => {
    let style = _.isEqual(type, 2) ? styles.secondValue : styles.value;
    let alternative = _.isEqual(type, 2) ? '/' : '';
    return (
      <Text style={styles.value}>
        {alternative}
        <Text style={style}>{secondValue}</Text>
      </Text>
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => calculate()}>
      <View style={styles.card}>
        <Loader show={loader} />
        <View style={[styles.cardItemContainer, {width: '40%'}]}>
          {getIconTitle()}
        </View>
        {!_.isEqual(type, 3) ? (
          <View
            style={[
              styles.cardItemContainer,
              {width: '60%', alignItems: 'flex-end'},
            ]}>
            <View style={styles.cardItem}>
              <Text style={styles.value}>
                {value}
                {secondValue != 0 && getSecondValue()}
              </Text>
              <Text style={styles.symbol}>{symbol}</Text>
            </View>
          </View>
        ) : (
          <>
            <View
              style={[
                styles.cardItemContainer,
                {width: '30%', alignItems: 'flex-end'},
              ]}>
              <View style={styles.cardItem}>
                <Text style={styles.value}>{value}</Text>
                <Text style={styles.symbol}>{symbol.split(' ')[0]}</Text>
              </View>
            </View>
            <View
              style={[
                styles.cardItemContainer,
                {width: '30%', alignItems: 'flex-end'},
              ]}>
              <View style={styles.cardItem}>
                <Text style={styles.value}>{getSecondValue()}</Text>
                <Text style={styles.symbol}>{symbol.split(' ')[1]}</Text>
              </View>
            </View>
          </>
        )}
        <View style={[styles.overlap, {opacity: hasOverlay}]}>
          <Text style={styles.overlapText}>{message}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardKit;
