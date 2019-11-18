import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Platform.OS === 'ios' ? 600 : 550,
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: '87%',
    opacity: 0.82,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  containerButtons: {
    paddingHorizontal: 10,
    width: '100%',
    height: Platform.OS === 'ios' ? 100 : 60,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  lateralBtns: {
    backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'transparent',
    marginTop: Platform.OS === 'ios' ? 10 : 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    width: '33%'
  },
  symbolTxt: {
    color: Platform.OS === 'ios' ? '#6bf6ff' : '#87888a',
    fontSize: 20
  },
  lateralBtnsTxt: {
    color: Platform.OS === 'ios' ? '#6bf6ff' : '#87888a',
    fontFamily: 'Avenir',
    fontSize: 12
  },
  centralBtn: {
    backgroundColor: '#6bf6ff',
    marginTop: 10,
    height: 40,
    borderRadius: 5,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    opacity: Platform.OS === 'ios' ? 1 : 0.8,
    width: '33%'
  },
  centralBtnTxt: {
    color: '#000', //Platform.OS === 'ios' ? '#6bf6ff' : '#fff',
    fontFamily: 'Avenir',
    fontSize: 20,
    opacity: 1
  }
});