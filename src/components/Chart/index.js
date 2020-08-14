import React from 'react';
import {View} from 'react-native';
import {LineChart, YAxis} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {colors} from '../../globals/styles';

const Chart = ({data}) => {
  const contentInset = {top: 20, bottom: 20};
  return (
    <View style={{height: '70%', flexDirection: 'row'}}>
      <YAxis
        data={data}
        contentInset={contentInset}
        svg={{
          fill: colors.white,
          fontSize: 10,
        }}
        numberOfTicks={2}
        formatLabel={(value) => value}
      />
      <LineChart
        style={{flex: 1, marginLeft: 16}}
        data={data}
        svg={{stroke: colors.white}}
        contentInset={contentInset}
        curve={shape.curveNatural} />
    </View>
  );
};

export default Chart;
