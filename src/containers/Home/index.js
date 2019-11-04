import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import * as moviesService from '../../state/movies/service'
import { poster400 } from '../../utils/constants'
import FastImage from 'react-native-fast-image'
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = ({ getGenres, genresList, genresLoading, getPopular, mostPopular, popularLoading }) => {
  useEffect(() => {
    getGenres()
    getPopular()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: '#000105' }}>
          <View style={{ width: '100%', height: 400 }}>
            {popularLoading
              ? <Text>•••</Text>
              : <>
                <FastImage
                  style={{
                    width: '100%', height: '100%', opacity: 0.5
                  }}
                  source={{
                    uri: `${poster400}${mostPopular.poster_path}`,
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.stretch}
                />
              </>
            }
            <View style={{
              width: '100%',
              height: 50,
              backgroundColor: '#000',
              position: 'absolute',
              bottom: 0,
              backgroundColor: '#000105',
              shadowColor: "#000105",
              shadowOpacity: 0.8,
              shadowRadius: 20,
              shadowOffset: {
                height: -15,
                width: 1
              },
              alignItems: 'center'
            }}>
              <Text style={{ color: '#6bf6ff' }}>{mostPopular.title}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View >
  );
}

/* istanbul ignore next */
const mapStateToProps = state => ({
  genresList: state.genres.list,
  genresLoading: state.genres.isLoading,
  popularList: state.popular.list,
  mostPopular: state.popular.mostPopular,
  popularLoading: state.popular.isLoading,
});

/* istanbul ignore next */
const mapDispatchToProps = {
  getGenres: moviesService.getGenres,
  getPopular: moviesService.getPopular,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);