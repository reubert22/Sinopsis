import React from 'react'
import { StatusBar, View } from 'react-native'

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor }}>
    <StatusBar backgroundColor={backgroundColor} barStyle="light-content" {...props} />
  </View>
);

export default MyStatusBar