import React, { useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { withNavigationFocus } from "react-navigation";
import { View, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import * as moviesService from '../../state/movies/service';
import * as moviesAction from '../../state/movies/actions';
import Popular from '../../components/shared/Popular';
import Header from '../../components/shared/Header';
import Grid from '../../components/shared/Grid';
import { backGroundColor } from '../../utils/constants';

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
    console.log('should fetch more: ', type)
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
          title="Most popular"
          isLoading={popularLoading}
          popularList={popularList}
          handleDetails={handleSelectedMovie}
        />

        <Grid
          data={playingList}
          handleDetails={handleSelectedMovie}
          fetchMore={() => handleFetchMore('playing')}
          title="Playing now"
          isLoading={playingLoading}
        />

        <Grid
          title="Top rated"
          data={topRatedList}
          isLoading={topRatedLoading}
          handleDetails={handleSelectedMovie}
          fetchMore={() => handleFetchMore('topRated')}
        />

        <Grid
          title="Upcoming"
          data={upcomingList}
          isLoading={upcomingLoading}
          handleDetails={handleSelectedMovie}
          fetchMore={() => handleFetchMore('upcoming')}
        />
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
})

const mapDispatchToProps = {
  getPopular: moviesService.getPopular,
  getPlaying: moviesService.getPlaying,
  getTopRated: moviesService.getTopRated,
  getUpcoming: moviesService.getUpcoming,
  successSelectMovie: moviesAction.successSelectMovie
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigationFocus(MovieScreen))