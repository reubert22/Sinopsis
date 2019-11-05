import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './style'

const ItemTitle = ({ title }) => (
  <View style={styles.containerTitle}>
    <Text numberOfLines={1} style={styles.title}>{title}</Text>
  </View>
)

export default ItemTitle