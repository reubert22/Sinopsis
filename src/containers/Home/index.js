import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as moviesService from '../../state/movies/service'

const HomeScreen = ({ getGenres, genresList, genresLoading }) => {
  useEffect(() => {
    getGenres()
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

/* istanbul ignore next */
const mapStateToProps = state => ({
  genresList: state.genres.list,
  genresLoading: state.genres.isLoading,
});

/* istanbul ignore next */
const mapDispatchToProps = {
  getGenres: moviesService.getGenres
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);

// export default HomeScreen