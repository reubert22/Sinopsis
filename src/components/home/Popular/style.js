import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
  containerItems: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginHorizontal: 7,
    width: 100,
    height: 100,
    marginVertical: 15,
  },
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 50
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    borderColor: '#fff',
    marginBottom: 10,
    borderWidth: 2
  }
});