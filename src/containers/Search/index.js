import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TextInput, Dimensions } from 'react-native';
import { ScrollView, BaseButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigationFocus } from "react-navigation";
import FastImage from 'react-native-fast-image';
import { connect } from 'react-redux';

import * as searchService from '../../state/search/service';
import { backGroundColor, primaryColor, poster500 } from '../../utils/constants';
import ItemTitle from '../../components/shared/Title';
import Grid from '../../components/shared/Grid';

const { width } = Dimensions.get('window');

const SearchScreen = ({
  navigation,
  isFocused,
  getSearch,
  list
}) => {
  const [value, setValue] = useState('');
  const [whatSearch, setWhatSearch] = useState(true);

  const handleSearch = value => {
    setValue(value);
    setTimeout(() => getSearch(value, whatSearch), 400)
  }

  const handleChangeType = type => {
    setWhatSearch(type);
    setTimeout(() => getSearch(value, type), 400)
  }

  const handleSelectedSerie = (selectedMovie, index) => {
    return navigation.navigate('Details', { item: selectedMovie, index })
  }

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 0, backgroundColor: backGroundColor }} />
      <ScrollView style={{ flex: 1, backgroundColor: backGroundColor }}>
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 5
          }}
        >
          <View
            style={{
              width: '100%',
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#cecece',
              paddingHorizontal: 10,
              borderRadius: 10
            }}
          >
            <Icon name="search" size={20} color="#000" />
            <TextInput
              style={{ height: 50, padding: 0, width: '100%', marginLeft: 10, fontSize: 16 }}
              onChangeText={text => handleSearch(text)}
              value={value}
              placeholder="Procure o título que deseja"
              underlineColorAndroid="transparent"
            />
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginTop: 10
            }}
          >
            <BaseButton
              onPress={() => handleChangeType(true)}
              style={{
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'row',
                height: 30,
                borderWidth: 1,
                width: 100,
                borderRadius: 15,
                borderColor: primaryColor,
                backgroundColor: whatSearch ? primaryColor : backGroundColor
              }}
            >
              <Icon name="film" size={15} color={whatSearch ? '#000' : '#FFF'} />
              <Text style={{ color: whatSearch ? '#000' : '#FFF' }}>Movies</Text>
            </BaseButton>
            <BaseButton
              onPress={() => handleChangeType(false)}
              style={{
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'row',
                height: 30,
                borderWidth: 1,
                width: 100,
                borderRadius: 15,
                borderColor: primaryColor,
                backgroundColor: !whatSearch ? primaryColor : backGroundColor
              }}
            >
              <Icon name="tv" size={15} color={!whatSearch ? '#000' : '#FFF'} />
              <Text style={{ color: !whatSearch ? '#000' : '#FFF' }}>TV</Text>
            </BaseButton>
          </View>
        </View>
        <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, paddingHorizontal: 2, justifyContent: 'center' }}>
          {list.length > 0 && (
            <View style={{ width: '100%', height: 20, marginBottom: 10 }}>
              <ItemTitle title={value ? 'Resultado da busca' : 'Resultados da última busca'} />
            </View>
          )}
          {list.map((item, index) => item.poster_path && (
            <BaseButton
              key={`search-item-id-${item.id}`}
              style={{
                marginHorizontal: 3,
                marginVertical: 3,
                width: (width / 3) - 10,
                height: 150,
              }}
              onPress={() => handleSelectedSerie(item, index)}
            >

              <FastImage
                style={{
                  width: '100%',
                  height: '100%',
                }}
                source={{
                  uri: `${poster500}${item.poster_path}`,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
            </BaseButton>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

/* istanbul ignore next */
const mapStateToProps = state => ({
  list: state.search.list,
})

/* istanbul ignore next */
const mapDispatchToProps = {
  getSearch: searchService.getSearch
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigationFocus(SearchScreen))