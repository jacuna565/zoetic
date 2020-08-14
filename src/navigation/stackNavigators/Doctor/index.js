import React from 'react';
import {Text} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'native-base';
import Doctor from '../../../screens/Doctor';
import {colors} from '../../../globals/styles';

const Stack = createStackNavigator();

function DoctorStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Doctor"
        component={Doctor}
        options={{
          headerTitle: () => <Text>Doctor</Text>,
          headerLeft: () => (
            <Icon
              type="MaterialIcons"
              style={{margin: 15, color: colors.white}}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              name="menu"
              size={32}
              color="#fff"
            />
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

export default DoctorStack;
