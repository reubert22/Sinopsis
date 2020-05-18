import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import ChevronIco from 'react-native-vector-icons/FontAwesome';
import { BaseButton } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import { posterOriginal, primaryColor } from '../../../utils/constants';
import Loading from '../Loading';

const Header = ({ latest, onDetails, isLoading }) => isLoading ? (
  <View style={{ ...styles.container, alignItems: 'center', justifyContent: 'center' }}>
    <Loading color={primaryColor} />
  </View>
) : (
    <BaseButton onPress={() => onDetails(latest, 0)} style={styles.container}>
      <SharedElement style={styles.container} id={`image-${latest.id}-0`}>
        <FastImage
          style={styles.image}
          source={{
            uri: `${posterOriginal}${latest.poster_path}`,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
      </SharedElement>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 10,
        }}
      >
        <ChevronIco name="chevron-up" size={20} color="#fff" />
      </View>
    </BaseButton>
  )

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 420,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Header