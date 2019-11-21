import { StyleSheet, Platform, Dimensions } from 'react-native'
import { backGroundColor, primaryColor } from '../../../utils/constants';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 500,
    marginBottom: 15,
    backgroundColor: primaryColor,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  image: {
    width: '100%',
    height: '90%',
  },
  centralBtn: {
    borderColor: primaryColor,
    borderRadius: 3,
    borderWidth: 1,
    height: 40,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    opacity: 0.8,
    borderRadius: 40,
    position: 'absolute',
    bottom: 5
  },
  centralBtnTxt: {
    color: backGroundColor,
    fontFamily: 'Avenir',
    fontSize: Platform.OS === 'ios' ? 20 : 16,
    fontWeight: 'bold'
  }
});