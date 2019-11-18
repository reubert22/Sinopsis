import React from 'react'
import FastImage from 'react-native-fast-image'
import { View, Text } from 'react-native'
import { BaseButton } from 'react-native-gesture-handler'
import { posterOriginal } from '../../../utils/constants'
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './style'

const Header = ({ latest, latestLoading, onDetails, onFavorite, onTrailer }) => (
  <LinearGradient colors={["#000105", "transparent"]} start={{ x: 0, y: 0.95 }} end={{ x: 0, y: 0.4 }}>
    <View style={styles.container}>
      {latestLoading
        ? <Text>•••</Text>
        :
        <FastImage
          style={styles.image}
          source={{
            uri: `${posterOriginal}${latest.poster_path}`,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
      }
      <View style={styles.containerButtons}>
        <BaseButton
          onPress={onFavorite}
          style={styles.lateralBtns}
        >
          <Text style={styles.symbolTxt}>+</Text>
          <Text style={styles.lateralBtnsTxt}>Favoritar</Text>
        </BaseButton>
        <BaseButton
          onPress={() => { if (!latestLoading) { onTrailer(latest.id) } }}
          style={styles.centralBtn}
        >
          <Text style={styles.centralBtnTxt}>{latestLoading ? '...' : 'Ver trailer'}</Text>
        </BaseButton>
        <BaseButton
          onPress={() => onDetails(latest)}
          style={styles.lateralBtns}
        >
          <Text style={styles.symbolTxt}>¡</Text>
          <Text style={styles.lateralBtnsTxt}>Ver detalhes</Text>
        </BaseButton>
      </View>
    </View>
  </LinearGradient>
)

export default Header