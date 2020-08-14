import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  drawerLabelContainer: {
    flexDirection: 'row',
    marginLeft: -5,
  },
  icon: {
    color: '#8b19be',
    fontSize: 24,
  },
  drawerLabel: {
    color: '#8b19be',
    fontSize: 16,
    marginTop: 4,
    marginLeft: 10,
  },
  drawerCloseContainer: {
    display: 'flex',
    alignSelf: 'flex-end',
    padding: 15,
  },
  drawerFooter: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  drawerFooterText: {
    color: '#8b19be',
    marginTop: 4,
    marginLeft: 10,
  },
});

export default styles;
