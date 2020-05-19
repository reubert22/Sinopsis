import React from 'react'
import { FlatList, BaseButton } from 'react-native-gesture-handler';
import { SharedElement } from 'react-navigation-shared-element';
import FastImage from 'react-native-fast-image';
import { View, StyleSheet } from 'react-native';

import { poster500, primaryColor } from '../../../utils/constants';
import Loading from '../Loading';
import ItemTitle from '../Title';

const Grid = ({ data, handleDetails, fetchMore, title, rounded, isLoading }) => (
  <>
    <ItemTitle title={title} />
    {isLoading ? (
      <View style={styles.containerLoading}>
        <Loading color={primaryColor} />
      </View>
    ) : (
        <FlatList
          data={data}
          horizontal
          style={{ marginLeft: 7, marginBottom: 20, marginTop: 3 }}
          renderItem={({ item, index }) => (
            <View style={styles.containerItems}>
              <BaseButton
                style={rounded ? styles.button : styles.buttonImg}
                onPress={() => handleDetails(item, index)}
              >
                <SharedElement id={`image-${item.id}-${index}`}>
                  <FastImage
                    style={rounded ? styles.image : styles.picture}
                    source={{
                      uri: `${poster500}${item.poster_path}`,
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                </SharedElement>
              </BaseButton>
            </View>
          )}
          keyExtractor={item => `${item.id}-popular-btn`}
          onEndReached={fetchMore}
          showsHorizontalScrollIndicator={false}
        />
      )}
  </>
)

const styles = StyleSheet.create({
  containerLoading: {
    width: '100%',
    height: 150,
    marginBottom: 20,
    marginTop: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerItems: {
    alignItems: 'center',
    marginHorizontal: 4,
    width: 100,
  },
  picture: {
    width: '100%',
    height: '100%',
  },
  buttonImg: {
    width: 100,
    height: 150,
  },
  containerTitle: {
    height: 30,
    paddingVertical: 5
  },
  title: { color: '#5cd662' },
  buttonSeeMore: {
    width: 100,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  plusTxt: {
    color: '#cecece',
    fontSize: 50
  },
  seeMoreTxt: {
    color: '#cecece',
    fontSize: 20
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

export default Grid