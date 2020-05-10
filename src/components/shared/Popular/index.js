import React from 'react';
import { FlatList, BaseButton } from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import { View, StyleSheet } from 'react-native';

import { poster500 } from '../../../utils/constants';
import ItemTitle from '../Title';

const Popular = ({ popularList, handleDetails, title }) => (
  <>
    <ItemTitle title={title} />
    <FlatList
      data={popularList}
      horizontal
      style={{ marginLeft: 7, marginBottom: 20, marginTop: 3 }}
      renderItem={({ item, index }) => (
        <View style={styles.containerItems}>
          <BaseButton style={styles.button} onPress={() => handleDetails(item, index)}>
            <FastImage
              style={styles.image}
              source={{
                uri: `${poster500}${item.poster_path}`,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </BaseButton>
        </View>
      )}
      keyExtractor={item => `${item.id}-popular-btn`}
      showsHorizontalScrollIndicator={false}
    />
  </>
)

const styles = StyleSheet.create({
  containerItems: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginHorizontal: 4,
    width: 100,
    height: 100,
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

export default Popular