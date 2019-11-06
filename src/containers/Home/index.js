import React, { useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler'
import { View, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'

import * as moviesService from '../../state/movies/service'
import GridItem from '../../components/home/GridItem'
import ItemTitle from '../../components/shared/Title'
import Popular from '../../components/home/Popular'
import Header from '../../components/home/Header'

const HomeScreen = ({
  navigation,
  getPopular,
  popularList,
  getPlaying,
  playingList,
  getTopRated,
  topRatedList,
  upcomingList,
  getUpcoming,
  getLatest,
  latest,
  latestLoading
}) => {
  useEffect(() => {
    getLatest()
    getPopular()
    getPlaying()
    getTopRated()
    getUpcoming()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: '#000105' }}>
          <Header
            latest={latest}
            latestLoading={latestLoading}
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

          <ItemTitle title="Mais votados" />
          {topRatedList.length !== 0 && (
            <GridItem data={topRatedList} />
          )}

          <ItemTitle title="Estão por vir" />
          {upcomingList.length !== 0 && (
            <GridItem data={upcomingList} />
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
  popularLoading: state.movies.popular.isLoading,
  playingList: state.movies.playing.list,
  playingLoading: state.movies.playing.isLoading,
  topRatedList: state.movies.topRated.list,
  topRatedLoading: state.movies.topRated.isLoading,
  upcomingList: state.movies.upcoming.list,
  upcomingLoading: state.movies.upcoming.isLoading,
  latest: state.movies.latest.latest,
  latestLoading: state.movies.latest.isLoading,
})

/* istanbul ignore next */
const mapDispatchToProps = {
  getGenres: moviesService.getGenres,
  getPopular: moviesService.getPopular,
  getPlaying: moviesService.getPlaying,
  getTopRated: moviesService.getTopRated,
  getUpcoming: moviesService.getUpcoming,
  getLatest: moviesService.getLatest,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen)