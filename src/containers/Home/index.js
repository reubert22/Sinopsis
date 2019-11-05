import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, Platform } from 'react-native'
import { connect } from 'react-redux'
import * as moviesService from '../../state/movies/service'
import { poster400, posterOriginal } from '../../utils/constants'
import FastImage from 'react-native-fast-image'
import { ScrollView, BaseButton } from 'react-native-gesture-handler'
import ItemTitle from '../../components/shared/Title';
import Popular from '../../components/home/Popular';
import GridItem from '../../components/home/GridItem';

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
          <View style={{ width: '100%', height: 500 }}>
            {popularLoading
              ? <Text>•••</Text>
              : <>
                <FastImage
                  style={{
                    width: '100%', height: '100%', opacity: 0.7
                  }}
                  source={{
                    uri: `${posterOriginal}${mostPopular.poster_path}`,
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </>
            }
            <View style={{
              paddingHorizontal: 10,
              width: '100%',
              height: 100,
              backgroundColor: '#000',
              position: 'absolute',
              bottom: 0,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
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
              <Text numberOfLines={1} style={{ color: '#6bf6ff', fontFamily: 'Avenir', fontSize: 25 }}>{mostPopular.title}</Text>
              <BaseButton
                onPress={() => navigation.navigate('Details', { selectedMovie: mostPopular })}
                style={{ backgroundColor: Platform.OS === 'ios' ? 'transparent' : '#6bf6ff', marginTop: 10, width: 120, height: 40, borderRadius: 5, borderWidth: 1.5, borderColor: Platform.OS === 'ios' ? '#6bf6ff' : 'none', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', paddingHorizontal: 10 }}
              >
                <Text style={{ color: Platform.OS === 'ios' ? '#6bf6ff' : '#000', fontFamily: 'Avenir', fontSize: 20 }}>Detalhes</Text>
              </BaseButton>
            </View>
          </View>

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
  );
}

/* istanbul ignore next */
const mapStateToProps = state => ({
  genresList: state.genres.list,
  genresLoading: state.genres.isLoading,
  popularList: state.popular.list,
  mostPopular: state.popular.mostPopular,
  popularLoading: state.popular.isLoading,
  playingList: state.playing.list,
  playingLoading: state.playing.isLoading,
});

/* istanbul ignore next */
const mapDispatchToProps = {
  getGenres: moviesService.getGenres,
  getPopular: moviesService.getPopular,
  getPlaying: moviesService.getPlaying,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);