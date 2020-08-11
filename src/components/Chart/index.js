
import React from 'react';
import { View, Text } from 'react-native';
import { LineChart, YAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { colors } from '../../globals/styles';

const Chart = ({element}) => {
    const data = [97, 97.5, 98, 97, 96, 97, 97.5, 98, 97, 96]; //just for fun
    const contentInset = { top: 20, bottom: 20 }
    return (
        <View style={{ height: '70%', flexDirection: 'row' }}>
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
                style={{ flex: 1, marginLeft: 16 }}
                data={data}
                svg={{ stroke: colors.white }}
                contentInset={contentInset}
                curve={shape.curveNatural}
            >
            </LineChart>
        </View>
    )
}

export default Chart;
