import React from 'react'
import { Animated } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import useRotate from '../hooks/UseRotate'

const Loading = ({ size = 30, color }) => {
  const rotate = useRotate()

  return (
    <Animated.View
      style={{
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ rotate }]
      }}
    >
      <Icon name="spinner" size={size} color={color} />
    </Animated.View>
  )
}

export default Loading