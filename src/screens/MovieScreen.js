import {View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image, Dimensions, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import tw from 'twrnc';
import {ChevronLeftIcon} from'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid'
import {
  responsiveHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

var {width,height} = Dimensions.get('window')

const MovieScreen = () => {
  const {params: item} = useRoute();
  const navigation = useNavigation()
  const [isFavourite, toggleFavourite] = useState(false)
  useEffect(() => {}, [item]);
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 20}}
      style={tw`flex-1 bg-neutral-900`}>
        
      <View style={tw`w-full`}>
        <SafeAreaView
          style={tw`w-full flex-row justify-between items-center px-4`}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={[{marginTop:15,backgroundColor:'#eab308'},tw`rounded-xl p-1`]}>
            <ChevronLeftIcon size={28} strokeWidth={2.5} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>toggleFavourite(!isFavourite)} style={[{marginTop:15},tw`rounded-xl p-1`]}>
            <HeartIcon size={38} strokeWidth={2.5} color={isFavourite?'#eab308':'white'} />
            </TouchableOpacity>
          </SafeAreaView>
          <View>
            <Image source={require('../assets/images/moviePoster2.png')} style={{width:width,height:height*0.65,resizeMode:'cover'}}/>
          </View>
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
