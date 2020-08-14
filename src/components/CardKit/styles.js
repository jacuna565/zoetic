import {StyleSheet} from 'react-native';
import {colors} from '../../globals/styles';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.whiteDarker,
    borderRadius: 15,
    height: 140,
    justifyContent: 'center',
    marginBottom: 25,
  },
  card: {
    width: '100%',
    flexDirection: 'row',
    height: '100%',
  },
  icon: {
    fontSize: 28,
    color: colors.primaryColor,
  },
  cardItemContainer: {
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  cardItem: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  category: {
    fontSize: 12,
    marginLeft: 5,
    marginTop: 5,
    fontWeight: 'bold',
    color: colors.secondaryColorDarker,
  },
  value: {
    fontSize: 48,
    color: colors.secondaryColor,
  },
  secondValue: {
    fontSize: 48,
    color: colors.turquoiseColor,
  },
  symbol: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize: 12,
    marginTop: 45,
    fontWeight: 'bold',
    color: colors.secondaryColorDarker,
  },
  overlap: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: colors.primaryColor,
    width: '60%',
    height: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    padding: 15,
  },
  overlapText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default styles;
