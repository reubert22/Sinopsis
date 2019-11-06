import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 420
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 0.42,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  containerButtons: {
    paddingHorizontal: 10,
    width: '100%',
    height: 100,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  lateralBtns: {
    backgroundColor: Platform.OS === 'ios' ? 'transparent' : '#6bf6ff',
    marginTop: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  symbolTxt: {
    color: Platform.OS === 'ios' ? '#6bf6ff' : '#000',
    fontSize: 20
  },
  lateralBtnsTxt: {
    color: Platform.OS === 'ios' ? '#6bf6ff' : '#000',
    fontFamily: 'Avenir',
    fontSize: 12
  },
  centralBtn: {
    backgroundColor: Platform.OS === 'ios' ? 'transparent' : '#6bf6ff',
    marginTop: 10,
    height: 40,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: Platform.OS === 'ios' ? '#6bf6ff' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  centralBtnTxt: {
    color: Platform.OS === 'ios' ? '#6bf6ff' : '#000',
    fontFamily: 'Avenir',
    fontSize: 20
  }
});