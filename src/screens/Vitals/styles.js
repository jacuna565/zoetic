import {StyleSheet} from 'react-native';
import {colors} from '../../globals/styles';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  containerGrid: {
    backgroundColor: colors.white,
    height: '100%',
  },
  header: {
    backgroundColor: colors.primaryColor,
    padding: 15,
    paddingBottom: 40,
  },
  headerDate: {
    color: colors.white,
    marginBottom: 5,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  headerTitle: {
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
    fontSize: 16,
  },
  notFoundContainer: {
    height: 400,
    justifyContent: 'center',
    padding: 15,
  },
  notFoundIcon: {
    color: colors.primaryColor,
    fontSize: 48,
    textAlign: 'center',
  },
  notFoundText: {
    color: colors.secondaryColor,
    textTransform: 'uppercase',
    fontSize: 22,
    textAlign: 'center',
  },
  gridHeight: {
    color: colors.primaryColor,
  },
});

export default styles;
