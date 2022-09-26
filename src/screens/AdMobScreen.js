import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  TestIds,
  BannerAd,
  BannerAdSize,
  RewardedAd,
} from '@react-native-firebase/admob';

const AdMobScreen = () => {
  const showAdd = () => {
    AdMobRewarded.setAdUnitID('ca-app-pub-5913677127061395/6915578041');
    AdMobRewarded.requestAdAsync().then(() => {
      AdMobRewarded.showAdAsync().catch(e => console.log(e.message));
    });
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <BannerAd
          unitId={'ca-app-pub-5913677127061395/7793545446'}
          size={BannerAdSize.BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
          onAdLoaded={() => {
            console.log('Advert loaded');
          }}
          onAdFailedToLoad={error => {
            console.error('Advert failed to load: ', error);
          }}
        />
      </View>

      <BannerAd
        unitId={'ca-app-pub-5913677127061395/6334205687'}
        size={BannerAdSize.ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdLoaded={() => {
          console.log('Advert loaded');
        }}
        onAdFailedToLoad={error => {
          console.error('Advert failed to load: ', error);
        }}
      />

      {/* <RewardedAd
        unitId={'ca-app-pub-5913677127061395/6915578041'}
        size={Rewa}
        // requestOptions={{
        //   requestNonPersonalizedAdsOnly: true,
        // }}
        // onAdLoaded={() => {
        //   console.log('Advert loaded');
        // }}
        // onAdFailedToLoad={error => {
        //   console.error('Advert failed to load: ', error);
        // }}
      /> */}
      <TouchableOpacity onPress={showAdd}>
        <Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdMobScreen;
