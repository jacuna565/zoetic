import {StyleSheet, Platform} from 'react-native';
import {colors} from '../../globals/styles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    right: 15,
    borderRadius: 100,
    width: 85,
    height: 85,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    overflow: 'hidden',
    padding: 5,
    height: 'auto',
    width: 'auto',
  },
  textButton: {
    backgroundColor: Platform.OS === 'ios' ? 'transparent': colors.whiteDarker,
    height: 75,
    width: 75,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    overflow: 'hidden',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: Platform.OS === 'ios' ? colors.white : colors.primaryColor,
    paddingTop: 25,
    fontSize: Platform.OS === 'ios' ? 12 : 14,
  },
});
export default styles;
