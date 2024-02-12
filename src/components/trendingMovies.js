import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from 'react-native'; 
import tw from 'twrnc';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

var {width, height} = Dimensions.get('window');

const TrendingMovies = ({data}) => {
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate('Movie', item);
  };
  return (
    <View style={tw`mb-8`}>
      <Text style={tw`text-white text-xl mx-4 mb-5 my-4`}>Trending</Text>
      <Carousel
        data={data}
        renderItem={({item}) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.55}
        sliderStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  );
};

const MovieCard = ({item, handleClick}) => {
  return (
    <TouchableWithoutFeedback onPress={()=>handleClick(item)}>
      <Image
        source={require('../assets/images/moviePoster1.png')}
        style={[
          {height: responsiveHeight(40), width: responsiveScreenWidth(55)},
          tw`rounded-3xl`,
        ]}
      />
    </TouchableWithoutFeedback>
  );
};

export default TrendingMovies;
