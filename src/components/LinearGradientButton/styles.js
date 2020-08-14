import {StyleSheet} from 'react-native';
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
    borderRadius: 100,
    padding: 5,
    height: 'auto',
    width: 'auto',
  },
  textButton: {
    backgroundColor: colors.whiteDarker,
    height: 75,
    width: 75,
    borderRadius: 100,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: colors.primaryColor,
    paddingTop: 25,
    fontSize: 14,
  },
});
export default styles;
