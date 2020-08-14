import {StyleSheet} from 'react-native';
import {colors} from '../../globals/styles';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: '100%',
    padding: 25,
  },
  btn: {
    borderRadius: 15,
    height: 50,
    backgroundColor: colors.primaryColor,
    marginTop: 25,
  },
  text: {
    textTransform: 'uppercase',
  },
});

export default styles;
