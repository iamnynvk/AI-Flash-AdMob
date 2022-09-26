import {
  View,
  Text,
  NativeEventEmitter,
  NativeModules,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AlanView} from '@alan-ai/alan-sdk-react-native';

const AIBitcoinScreen = () => {
  const {AlanManager, AlanEventEmitter} = NativeModules;
  const alanEventEmitter = new NativeEventEmitter(AlanEventEmitter);

  useEffect(() => {
    const subscription = alanEventEmitter.addListener('command', response => {
      if (response?.command == 'newChart') {
        // setChartData({
        //     labels:response?.datas?.length > 7 ? response?.datas
        // })
        console.log('response ----->', response);
      }
    });
    return () => subscription.remove();
  }, []);

  return (
    <View style={{flex: 1}}>
      <AlanView
        projectid={
          '73980927445620d8513acd83d6df2caf2e956eca572e1d8b807a3e2338fdd0dc/stage'
        }
      />
    </View>
  );
};

export default AIBitcoinScreen;
