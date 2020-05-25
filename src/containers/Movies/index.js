import React, { useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { withNavigationFocus } from "react-navigation";
import { View, SafeAreaView, Text } from 'react-native';
import { connect } from 'react-redux';

import * as moviesService from '../../state/movies/service';
import * as moviesAction from '../../state/movies/actions';
import Popular from '../../components/shared/Popular';
import Header from '../../components/shared/Header';
import Grid from '../../components/shared/Grid';
import { backGroundColor, typesMovies } from '../../utils/constants';

const MovieScreen = ({
  navigation,
  getPopular,
  popularList,
  getPlaying,
  playingList,
  getTopRated,
  topRatedList,
  upcomingList,
  getUpcoming,
  latest,
  successSelectMovie,
  isFocused,
  popularLoading,
  playingLoading,
  topRatedLoading,
  upcomingLoading,
  getMorePopular,
  popularPage,
  popularTotalPages,
}) => {

  useEffect(() => {
    getPopular();
    getPlaying();
    getTopRated();
    getUpcoming();
  }, []);

  const handleSelectedMovie = (selectedMovie, index) => {
    successSelectMovie(selectedMovie)
    return navigation.navigate('Details', { item: selectedMovie, index })
  }

  const handleFetchMore = (type) => {
    if (typesMovies.MOST_POPULAR === type) {
      getMorePopular();
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 0, backgroundColor: backGroundColor }} />
      <ScrollView style={{ flex: 1, backgroundColor: backGroundColor }}>

        <Header
          latest={latest}
          isLoading={popularLoading}
          onDetails={handleSelectedMovie}
        />

        <Popular
          title={typesMovies.MOST_POPULAR}
          isLoading={popularLoading}
          popularList={popularList}
          handleDetails={handleSelectedMovie}
          handleFetchMore={() => handleFetchMore(typesMovies.MOST_POPULAR)}
          shouldFetch={popularPage !== popularTotalPages}
        />

        <Grid
          data={playingList}
          handleDetails={handleSelectedMovie}
          fetchMore={() => handleFetchMore(typesMovies.PLAYING_NOW)}
          title={typesMovies.PLAYING_NOW}
          isLoading={playingLoading}
        />

        <Grid
          title={typesMovies.TOP_RATED}
          data={topRatedList}
          isLoading={topRatedLoading}
          handleDetails={handleSelectedMovie}
          fetchMore={() => handleFetchMore(typesMovies.TOP_RATED)}
        />

        <Grid
          title={typesMovies.UPCOMING}
          data={upcomingList}
          isLoading={upcomingLoading}
          handleDetails={handleSelectedMovie}
          fetchMore={() => handleFetchMore(typesMovies.UPCOMING)}
        />

        <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: 200 }}>
          <View style={{ width: '95%', height: 200, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#FFF' }}>Trending movies section</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

/* istanbul ignore next */
const mapStateToProps = state => ({
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
  popularPage: state.movies.popular.page,
  popularTotalPages: state.movies.popular.totalPages,
})

const mapDispatchToProps = {
  getPopular: moviesService.getPopular,
  getPlaying: moviesService.getPlaying,
  getTopRated: moviesService.getTopRated,
  getUpcoming: moviesService.getUpcoming,
  getMorePopular: moviesService.getMorePopular,
  successSelectMovie: moviesAction.successSelectMovie,

}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigationFocus(MovieScreen))