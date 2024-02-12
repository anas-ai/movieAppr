import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

const MovieList = ({title, data}) => {
  let MovieName = 'Ant-Man and the Wasp: Quantumaina';
  const navigation = useNavigation();
  return (
    <View style={tw`mb-8 space-y-4`}>
      <View style={tw`mx-4 flex-row justify-between items-center`}>
        <Text style={tw`text-white text-xl`}>{title}</Text>
        <TouchableOpacity>
          <Text style={[{color: '#eab308'}, tw`text-lg`]}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15, marginTop: 15}}>
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate('Movie', item)}>
              <View style={[tw`space-y-1`, {marginRight: 4}]}>
                <Image
                  source={require('../assets/images/moviePoster2.png')}
                  style={[
                    {
                      height: responsiveHeight(22),
                      width: responsiveScreenWidth(30),
                    },
                    tw`rounded-3xl`,
                  ]}
                />
                <Text style={tw`text-neutral-300 ml-1`}>
                  {MovieName.length > 14
                    ? MovieName.slice(0, 14) + '...'
                    : MovieName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieList;
