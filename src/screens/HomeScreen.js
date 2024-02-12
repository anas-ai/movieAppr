import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import TrendingMovies from '../components/trendingMovies';
import MovieList from '../components/MovieList';

const android = Platform.OS == 'android';

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcomeing, setUpcomeing] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);

  return (
    <View style={tw`flex-1 bg-neutral-800`}>
      <SafeAreaView style={android ? tw`-mb-2` : tw`mb-3`}>
        <StatusBar barStyle="light-content" />
        <View style={tw`flex-row justify-between items-center mx-4 my-2`}>
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color={'#fff'} />
          <Text style={tw`text-white text-3xl font-bold`}>
            <Text style={{ color: 'yellow' }}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      
    <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
        
        {/* trendingMovies carousl */}
        <TrendingMovies data={trending} />
        {/* upcomeing Movies row */}
        <MovieList title='Upcoming' data={upcomeing}/>
        {/* topRated */}
        <MovieList title='Top Rated' data={topRated}/>
      </ScrollView>
    </View>
  );
};



export default HomeScreen;
