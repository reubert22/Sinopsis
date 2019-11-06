import React, { useEffect } from 'react';
import { View, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import * as moviesService from '../../state/movies/service'
import { ScrollView } from 'react-native-gesture-handler'
import ItemTitle from '../../components/shared/Title'
import Popular from '../../components/home/Popular'
import GridItem from '../../components/home/GridItem'
import Header from '../../components/home/Header'

const HomeScreen = ({ navigation,
  getGenres,
  genresList,
  genresLoading,
  getPopular,
  mostPopular,
  popularLoading,
  popularList,
  getPlaying,
  playingList,
  playingLoading
}) => {
  useEffect(() => {
    getGenres()
    getPopular()
    getPlaying()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: '#000105' }}>
          <Header
            mostPopular={mostPopular}
            popularLoading={popularLoading}
            onDetails={() => { }}
            onFavorite={() => { }}
            onTrailer={() => { }}
          />

          <ItemTitle title="Mais populares" />
          {popularList.length !== 0 && (
            <Popular popularList={popularList} />
          )}

          <ItemTitle title="Sendo visto no momento" />
          {playingList.length !== 0 && (
            <GridItem data={playingList} />
          )}
        </ScrollView>
      </SafeAreaView>
    </View >
  )
}

/* istanbul ignore next */
const mapStateToProps = state => ({
  genresList: state.movies.genres.list,
  genresLoading: state.movies.genres.isLoading,
  popularList: state.movies.popular.list,
  mostPopular: state.movies.popular.mostPopular,
  popularLoading: state.movies.popular.isLoading,
  playingList: state.movies.playing.list,
  playingLoading: state.movies.playing.isLoading,
})

/* istanbul ignore next */
const mapDispatchToProps = {
  getGenres: moviesService.getGenres,
  getPopular: moviesService.getPopular,
  getPlaying: moviesService.getPlaying,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen)