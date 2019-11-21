import { useRef, useEffect } from 'react'
import { Animated, Easing } from 'react-native'

const useRotate = (duration) => {
  const rotate = useRef(new Animated.Value(0)).current

  const animate = () => {
    rotate.setValue(0)
    Animated.timing(rotate, {
      toValue: 1,
      duration: duration || 3000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => animate())
  }

  useEffect(() => {
    animate()
  }, [])

  return rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  })
}

export default useRotate